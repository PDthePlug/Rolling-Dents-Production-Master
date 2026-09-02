import { env } from "cloudflare:workers";
import { eq } from "drizzle-orm";
import { getDb } from "@/db";
import { assessmentPhotos, assessments } from "@/db/schema";

const MAX_PHOTOS = 6;
const MAX_FILE_BYTES = 8 * 1024 * 1024;
const ALLOWED_TYPES = new Set(["image/jpeg", "image/png", "image/webp"]);

const extensionByType: Record<string, string> = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
};

type MediaBucket = {
  put(
    key: string,
    value: Blob | ArrayBuffer | ReadableStream,
    options?: {
      httpMetadata?: { contentType?: string };
      customMetadata?: Record<string, string>;
    },
  ): Promise<unknown>;
  delete(key: string): Promise<void>;
};

function textValue(form: FormData, key: string, maxLength: number, required = true) {
  const raw = form.get(key);
  const value = typeof raw === "string" ? raw.trim() : "";
  if (required && !value) throw new Error(`${key} is required`);
  if (value.length > maxLength) throw new Error(`${key} is too long`);
  return value;
}

function publicError(error: unknown) {
  const message = error instanceof Error ? error.message : "Unexpected assessment error";
  if (message.includes("Cloudflare D1 binding `DB` is unavailable")) {
    return { status: 503, message: "Online assessment storage is not configured yet." };
  }
  if (/ is required$| is too long$|photograph|photo/i.test(message)) {
    return { status: 400, message };
  }
  return { status: 500, message: "We could not save this assessment right now." };
}

function referenceFor(id: string) {
  const date = new Date();
  const stamp = `${date.getUTCFullYear()}${String(date.getUTCMonth() + 1).padStart(2, "0")}${String(date.getUTCDate()).padStart(2, "0")}`;
  return `RD-${stamp}-${id.slice(0, 6).toUpperCase()}`;
}

export async function POST(request: Request) {
  const storedKeys: string[] = [];
  let insertedAssessmentId = "";

  try {
    const form = await request.formData();

    // Quietly absorb obvious bot submissions without creating records.
    if (textValue(form, "website", 200, false)) {
      return Response.json({ accepted: true }, { status: 202 });
    }

    if (textValue(form, "consent", 20) !== "yes") {
      return Response.json({ error: "Consent is required before an assessment can be submitted." }, { status: 400 });
    }

    const name = textValue(form, "name", 120);
    const mobile = textValue(form, "mobile", 40);
    const email = textValue(form, "email", 180, false);
    const make = textValue(form, "make", 80);
    const model = textValue(form, "model", 80);
    const year = textValue(form, "year", 4);
    const registration = textValue(form, "registration", 30, false);
    const repairType = textValue(form, "repairType", 100);
    const paymentRoute = textValue(form, "paymentRoute", 100);
    const description = textValue(form, "description", 2000);

    if (!/^\d{4}$/.test(year)) {
      return Response.json({ error: "Vehicle year must contain four digits." }, { status: 400 });
    }

    const files = form
      .getAll("photos")
      .filter((item): item is File => item instanceof File && item.size > 0);

    if (files.length > MAX_PHOTOS) {
      return Response.json({ error: `Upload no more than ${MAX_PHOTOS} photographs.` }, { status: 400 });
    }

    for (const file of files) {
      if (!ALLOWED_TYPES.has(file.type)) {
        return Response.json({ error: "Photographs must be JPG, PNG or WebP files." }, { status: 400 });
      }
      if (file.size > MAX_FILE_BYTES) {
        return Response.json({ error: "Each photograph must be 8 MB or smaller." }, { status: 400 });
      }
    }

    const assessmentId = crypto.randomUUID();
    insertedAssessmentId = assessmentId;
    const reference = referenceFor(assessmentId);
    const runtimeEnv = env as unknown as { MEDIA?: MediaBucket };
    const media = runtimeEnv.MEDIA;

    const photoRows: Array<typeof assessmentPhotos.$inferInsert> = [];
    if (media) {
      for (const file of files) {
        const photoId = crypto.randomUUID();
        const extension = extensionByType[file.type];
        const objectKey = `assessments/${assessmentId}/${photoId}.${extension}`;
        await media.put(objectKey, file, {
          httpMetadata: { contentType: file.type },
          customMetadata: {
            assessmentReference: reference,
            originalName: file.name.slice(0, 180),
          },
        });
        storedKeys.push(objectKey);
        photoRows.push({
          id: photoId,
          assessmentId,
          objectKey,
          originalName: file.name.slice(0, 180),
          contentType: file.type,
          sizeBytes: file.size,
        });
      }
    }

    const db = getDb();
    await db.insert(assessments).values({
      id: assessmentId,
      reference,
      customerName: name,
      mobile,
      email,
      vehicleYear: year,
      vehicleMake: make,
      vehicleModel: model,
      registration,
      repairType,
      paymentRoute,
      description,
      photoCount: photoRows.length,
    });

    if (photoRows.length > 0) {
      await db.insert(assessmentPhotos).values(photoRows);
    }

    return Response.json(
      {
        assessmentId,
        reference,
        storedPhotoCount: photoRows.length,
        needsWhatsappPhotos: files.length > photoRows.length,
      },
      { status: 201 },
    );
  } catch (error) {
    const runtimeEnv = env as unknown as { MEDIA?: MediaBucket };
    if (runtimeEnv.MEDIA && storedKeys.length > 0) {
      await Promise.allSettled(storedKeys.map((key) => runtimeEnv.MEDIA!.delete(key)));
    }

    if (insertedAssessmentId) {
      try {
        const db = getDb();
        await db.delete(assessments).where(eq(assessments.id, insertedAssessmentId));
      } catch {
        // Cleanup is best effort; preserve the original error response.
      }
    }

    const failure = publicError(error);
    return Response.json({ error: failure.message }, { status: failure.status });
  }
}
