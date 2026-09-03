"use client";

import Link from "next/link";
import { FormEvent, useEffect, useRef, useState } from "react";
import { ArrowRight, Camera, Check, CheckCircle2, ImagePlus, LoaderCircle, MessageCircle, ShieldCheck, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { WHATSAPP_NUMBER } from "@/lib/rolling-dents";

const MAX_PHOTOS = 6;
const MAX_FILE_BYTES = 8 * 1024 * 1024;
const ALLOWED_TYPES = new Set(["image/jpeg", "image/png", "image/webp"]);

type PhotoPreview = { file: File; url: string };
type AssessmentResponse = { reference: string; storedPhotoCount: number; needsWhatsappPhotos: boolean };
type SuccessState = AssessmentResponse & { whatsappHref: string };

function whatsappHref(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function EstimateForm() {
  const [repairType, setRepairType] = useState("");
  const [paymentRoute, setPaymentRoute] = useState("");
  const [claimStatus, setClaimStatus] = useState("");
  const [photos, setPhotos] = useState<PhotoPreview[]>([]);
  const [photoError, setPhotoError] = useState("");
  const [submitError, setSubmitError] = useState("");
  const [fallbackHref, setFallbackHref] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<SuccessState | null>(null);
  const previewUrls = useRef<string[]>([]);
  const insuranceRepair = paymentRoute === "Insurance repair";

  useEffect(() => () => {
    previewUrls.current.forEach((url) => URL.revokeObjectURL(url));
  }, []);

  function addPhotos(files: FileList | null) {
    if (!files) return;
    setPhotoError("");
    const next = [...photos];
    for (const file of Array.from(files)) {
      if (next.length >= MAX_PHOTOS) {
        setPhotoError(`You can upload up to ${MAX_PHOTOS} photographs.`);
        break;
      }
      if (!ALLOWED_TYPES.has(file.type)) {
        setPhotoError("Use JPG, PNG or WebP photographs only.");
        continue;
      }
      if (file.size > MAX_FILE_BYTES) {
        setPhotoError("Each photograph must be 8 MB or smaller.");
        continue;
      }
      const url = URL.createObjectURL(file);
      previewUrls.current.push(url);
      next.push({ file, url });
    }
    setPhotos(next);
  }

  function removePhoto(index: number) {
    setPhotos((current) => {
      const selected = current[index];
      if (selected) {
        URL.revokeObjectURL(selected.url);
        previewUrls.current = previewUrls.current.filter((url) => url !== selected.url);
      }
      return current.filter((_, itemIndex) => itemIndex !== index);
    });
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitError("");
    setFallbackHref("");

    if (!repairType || !paymentRoute) {
      setSubmitError("Please select the repair type and repair route before continuing.");
      return;
    }
    if (insuranceRepair && !claimStatus) {
      setSubmitError("Please select the current insurance claim status before continuing.");
      return;
    }

    setSubmitting(true);
    const source = new FormData(event.currentTarget);
    const payload = new FormData();
    source.forEach((value, key) => {
      if (key !== "photos" && typeof value === "string") payload.append(key, value);
    });
    payload.set("repairType", repairType);
    payload.set("paymentRoute", paymentRoute);
    payload.set("claimStatus", insuranceRepair ? claimStatus : "");
    if (!insuranceRepair) {
      payload.set("insurer", "");
      payload.set("claimNumber", "");
    }
    photos.forEach(({ file }) => payload.append("photos", file, file.name));

    const baseMessage = [
      "Hi Rolling Dents, I submitted a vehicle repair assessment.",
      `Name: ${source.get("name")}`,
      `Mobile: ${source.get("mobile")}`,
      `Vehicle: ${source.get("year")} ${source.get("make")} ${source.get("model")}`,
      `Registration: ${source.get("registration") || "Not provided"}`,
      `Repair type: ${repairType}`,
      `Repair route: ${paymentRoute}`,
      insuranceRepair ? `Insurer: ${source.get("insurer") || "Not provided"}` : "",
      insuranceRepair ? `Claim number: ${source.get("claimNumber") || "Not provided"}` : "",
      insuranceRepair ? `Claim status: ${claimStatus}` : "",
      `Damage: ${source.get("description")}`,
    ].filter(Boolean);

    const fallback = whatsappHref([
      ...baseMessage,
      "",
      photos.length > 0 ? "The online submission did not complete, so I will attach the damage photos here." : "Please advise which damage photographs you need.",
    ].join("\n"));

    try {
      const response = await fetch("/api/assessments", { method: "POST", body: payload });
      const body = await response.json() as AssessmentResponse & { error?: string };
      if (!response.ok) throw new Error(body.error || "Assessment persistence unavailable");
      const message = [
        ...baseMessage,
        `Assessment reference: ${body.reference}`,
        body.storedPhotoCount > 0 ? `Photos uploaded: ${body.storedPhotoCount}` : "Photos uploaded: none",
        "",
        body.needsWhatsappPhotos ? "Please tell me which photos you still need me to attach here." : "Please confirm the next assessment step.",
      ].join("\n");
      setSuccess({ ...body, whatsappHref: whatsappHref(message) });
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "We could not save the assessment online.");
      setFallbackHref(fallback);
    } finally {
      setSubmitting(false);
    }
  }

  if (success) {
    return (
      <div className="estimate-form" aria-live="polite">
        <CheckCircle2 className="h-14 w-14 text-[#2d7b56]" />
        <p className="form-step mt-6">ASSESSMENT RECEIVED</p>
        <h2>Keep this repair reference.</h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-[#5d5952]">Your vehicle details have been recorded for Rolling Dents. Continue on WhatsApp with the same reference, or read the repair process before you visit the workshop.</p>
        <div className="mt-5 inline-flex rounded-2xl border border-[#d6cfc4] bg-[#f4f0e9] px-5 py-4 text-xl font-black tracking-[0.05em] text-[#171817]">{success.reference}</div>
        <div className="mt-7 flex flex-wrap gap-3">
          <Button asChild className="orange-button content-button"><a href={success.whatsappHref} target="_blank" rel="noreferrer"><MessageCircle /> Continue on WhatsApp</a></Button>
          <Button asChild variant="outline" className="dark-outline content-button"><Link href="/repair-process">What happens next <ArrowRight /></Link></Button>
        </div>
        <p className="estimate-disclaimer mt-6"><Check /> {success.storedPhotoCount} photograph{success.storedPhotoCount === 1 ? "" : "s"} stored with this assessment. A physical inspection may still be required before a final quotation is confirmed.</p>
      </div>
    );
  }

  return (
    <form className="estimate-form" onSubmit={submit} encType="multipart/form-data">
      <div className="estimate-form-heading">
        <div><p className="form-step">VEHICLE ASSESSMENT</p><h2>Tell us what happened.</h2></div>
        <span><ShieldCheck /> Your assessment is recorded before WhatsApp opens</span>
      </div>

      <input className="sr-only" tabIndex={-1} autoComplete="off" name="website" aria-hidden="true" />
      <input type="hidden" name="repairType" value={repairType} />
      <input type="hidden" name="paymentRoute" value={paymentRoute} />
      <input type="hidden" name="claimStatus" value={insuranceRepair ? claimStatus : ""} />

      <div className="form-grid">
        <label><span>Your name</span><Input required name="name" autoComplete="name" maxLength={120} placeholder="Full name" /></label>
        <label><span>Mobile number</span><Input required name="mobile" autoComplete="tel" inputMode="tel" maxLength={40} placeholder="e.g. 082 123 4567" /></label>
        <label><span>Email (optional)</span><Input name="email" type="email" autoComplete="email" maxLength={180} placeholder="name@example.com" /></label>
        <label><span>Vehicle make</span><Input required name="make" maxLength={80} placeholder="e.g. BMW" /></label>
        <label><span>Vehicle model</span><Input required name="model" maxLength={80} placeholder="e.g. 320i" /></label>
        <label><span>Vehicle year</span><Input required name="year" inputMode="numeric" maxLength={4} pattern="[0-9]{4}" placeholder="e.g. 2021" /></label>
        <label><span>Registration (optional)</span><Input name="registration" maxLength={30} placeholder="e.g. AB 12 CD GP" /></label>
        <label>
          <span>What needs attention?</span>
          <Select required value={repairType} onValueChange={(value) => setRepairType(value ?? "")}>
            <SelectTrigger className="form-control"><SelectValue placeholder="Select repair type" /></SelectTrigger>
            <SelectContent><SelectItem value="Accident or collision damage">Accident or collision damage</SelectItem><SelectItem value="Paint shop">Paint shop</SelectItem><SelectItem value="Full vehicle respray">Full vehicle respray</SelectItem><SelectItem value="Paintless dent removal">Paintless dent removal</SelectItem><SelectItem value="Parts replacement">Parts replacement</SelectItem><SelectItem value="Paint correction">Paint correction</SelectItem><SelectItem value="Vehicle detailing">Vehicle detailing</SelectItem><SelectItem value="Classic vehicle restoration">Classic vehicle restoration</SelectItem></SelectContent>
          </Select>
        </label>
        <label>
          <span>How will the repair be handled?</span>
          <Select required value={paymentRoute} onValueChange={(value) => { setPaymentRoute(value ?? ""); if (value !== "Insurance repair") setClaimStatus(""); }}>
            <SelectTrigger className="form-control"><SelectValue placeholder="Select repair route" /></SelectTrigger>
            <SelectContent><SelectItem value="Insurance repair">Insurance repair</SelectItem><SelectItem value="Private repair">Private repair</SelectItem><SelectItem value="Not sure yet">Not sure yet</SelectItem></SelectContent>
          </Select>
        </label>
        {insuranceRepair && <><label><span>Insurer</span><Input required name="insurer" maxLength={120} placeholder="Insurance provider" /></label><label><span>Claim number (optional)</span><Input name="claimNumber" maxLength={100} placeholder="Claim reference" /></label><label><span>Current claim status</span><Select required value={claimStatus} onValueChange={(value) => setClaimStatus(value ?? "")}><SelectTrigger className="form-control"><SelectValue placeholder="Select claim status" /></SelectTrigger><SelectContent><SelectItem value="Not opened yet">Not opened yet</SelectItem><SelectItem value="Claim opened">Claim opened</SelectItem><SelectItem value="Assessment or authorisation in progress">Assessment or authorisation in progress</SelectItem><SelectItem value="Authorised">Authorised</SelectItem><SelectItem value="Not sure">Not sure</SelectItem></SelectContent></Select></label></>}
      </div>

      <label className="full-field"><span>Describe the damage</span><Textarea required name="description" maxLength={2000} placeholder="Tell us where the damage is, what happened and whether the vehicle is driveable." /></label>

      <div className="rounded-2xl border border-[#d2cbc0] bg-[#ebe6de] p-5 sm:p-6">
        <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div><p className="m-0 text-[11px] font-black uppercase tracking-[0.16em] text-[#6f6a62]">Damage photographs</p><p className="mt-2 mb-0 text-sm leading-6 text-[#5d5a54]">Add up to six JPG, PNG or WebP images. Each file can be up to 8 MB.</p></div>
          <label className="inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-full border border-[#252625] px-4 text-xs font-black text-[#171817] transition hover:bg-[#171817] hover:text-white"><ImagePlus className="h-4 w-4" /> Add photos<input className="sr-only" type="file" name="photos" accept="image/jpeg,image/png,image/webp" multiple onChange={(event) => { addPhotos(event.currentTarget.files); event.currentTarget.value = ""; }} /></label>
        </div>
        {photos.length > 0 ? <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">{photos.map((photo, index) => <div key={`${photo.file.name}-${photo.file.lastModified}-${index}`} className="relative overflow-hidden rounded-xl border border-[#cfc7bb] bg-[#d9d2c7]"><span className="block aspect-[4/3] bg-cover bg-center" style={{ backgroundImage: `url(${photo.url})` }} role="img" aria-label={`Damage photograph ${index + 1}: ${photo.file.name}`} /><div className="flex items-center justify-between gap-2 bg-white px-3 py-2"><span className="min-w-0 truncate text-[10px] font-bold text-[#494640]">{photo.file.name}</span><button type="button" className="inline-flex h-8 w-8 items-center justify-center rounded-full text-[#5d5952] hover:bg-[#eee9e2]" onClick={() => removePhoto(index)} aria-label={`Remove ${photo.file.name}`}><Trash2 className="h-4 w-4" /></button></div></div>)}</div> : <div className="flex min-h-28 items-center justify-center rounded-xl border border-dashed border-[#c8c0b5] bg-[#f3efe9] px-5 text-center text-sm text-[#706b64]"><Camera className="mr-2 h-5 w-5" /> No photos selected yet.</div>}
        {photoError && <p className="mt-3 mb-0 text-sm font-bold text-[#a12a24]" role="alert">{photoError}</p>}
      </div>

      <div className="photo-guide"><h3>For a useful first look, include:</h3><div><span><strong>01</strong>The full side of the vehicle</span><span><strong>02</strong>A straight view of the damage</span><span><strong>03</strong>Close-up detail from two angles</span></div></div>
      <label className="flex items-start gap-3 text-sm leading-6 text-[#5d5952]"><input required name="consent" value="yes" type="checkbox" className="mt-1 h-4 w-4 accent-[#f47721]" /><span>I agree that Rolling Dents may store these details and photographs to assess my repair enquiry and contact me about the vehicle.</span></label>
      {submitError && <div className="rounded-xl border border-[#e3b3ae] bg-[#fff1ef] px-4 py-3 text-sm font-bold text-[#8c2922]" role="alert" aria-live="polite"><p>{submitError}</p>{fallbackHref && <a className="mt-2 inline-flex items-center gap-2 underline" href={fallbackHref} target="_blank" rel="noreferrer">Continue in WhatsApp <ArrowRight className="h-4 w-4" /></a>}</div>}
      <Button type="submit" disabled={submitting} className="orange-button estimate-submit">{submitting ? <><LoaderCircle className="animate-spin" /> Saving assessment</> : <>Submit assessment <ArrowRight /></>}</Button>
      <p className="estimate-disclaimer"><Check /> Photographs support an initial assessment. A physical inspection may still be required before a final quotation is confirmed.</p>
    </form>
  );
}
