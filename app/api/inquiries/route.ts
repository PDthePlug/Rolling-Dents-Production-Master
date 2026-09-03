import { getDb } from "@/db";
import { inquiries } from "@/db/schema";

const ALLOWED_TOPICS = new Set(["General enquiry", "Existing repair", "Insurance question", "Restoration project", "Paint or detailing question", "Other"]);

function clean(value: unknown, max: number) {
  const text = typeof value === "string" ? value.trim() : "";
  if (text.length > max) throw new Error("A submitted field is too long.");
  return text;
}

function referenceFor(id: string) {
  const date = new Date();
  const stamp = `${date.getUTCFullYear()}${String(date.getUTCMonth() + 1).padStart(2, "0")}${String(date.getUTCDate()).padStart(2, "0")}`;
  return `INQ-${stamp}-${id.slice(0, 6).toUpperCase()}`;
}

export async function POST(request: Request) {
  try {
    const input = await request.json() as Record<string, unknown>;
    if (clean(input.website, 200)) return Response.json({ accepted: true }, { status: 202 });
    if (input.consent !== true) return Response.json({ error: "Consent is required before an enquiry can be submitted." }, { status: 400 });

    const customerName = clean(input.name, 120);
    const mobile = clean(input.mobile, 40);
    const email = clean(input.email, 180);
    const topic = clean(input.topic, 100);
    const relatedReference = clean(input.relatedReference, 100);
    const message = clean(input.message, 2000);

    if (!customerName || !mobile || !topic || !message) return Response.json({ error: "Name, mobile number, topic and message are required." }, { status: 400 });
    if (!ALLOWED_TOPICS.has(topic)) return Response.json({ error: "Choose a valid enquiry topic." }, { status: 400 });

    const id = crypto.randomUUID();
    const reference = referenceFor(id);
    const db = getDb();
    await db.insert(inquiries).values({ id, reference, customerName, mobile, email, topic, relatedReference, message });
    return Response.json({ inquiryId: id, reference, status: "received" }, { status: 201 });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unexpected enquiry error";
    if (message.includes("Cloudflare D1 binding `DB` is unavailable")) return Response.json({ error: "Online enquiry storage is not configured yet." }, { status: 503 });
    if (message.includes("too long")) return Response.json({ error: message }, { status: 400 });
    return Response.json({ error: "We could not save this enquiry right now." }, { status: 500 });
  }
}
