"use client";

import { FormEvent, useMemo, useState } from "react";
import { ArrowRight, CheckCircle2, LoaderCircle, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { WHATSAPP_NUMBER } from "@/lib/rolling-dents";

const topics = ["General enquiry", "Existing repair", "Insurance question", "Restoration project", "Paint or detailing question", "Other"] as const;

type InquiryResult = { reference: string; status: string };

function whatsappHref(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function InquiryForm() {
  const [topic, setTopic] = useState<(typeof topics)[number]>("General enquiry");
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [fallbackHref, setFallbackHref] = useState("");
  const [result, setResult] = useState<InquiryResult | null>(null);
  const [whatsappContinuation, setWhatsappContinuation] = useState("");
  const existingRepair = topic === "Existing repair";

  const topicOptions = useMemo(() => topics.map((item) => <SelectItem key={item} value={item}>{item}</SelectItem>), []);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage("");
    setFallbackHref("");
    setSubmitting(true);
    const form = new FormData(event.currentTarget);
    const payload = {
      name: String(form.get("name") ?? "").trim(),
      mobile: String(form.get("mobile") ?? "").trim(),
      email: String(form.get("email") ?? "").trim(),
      topic,
      relatedReference: String(form.get("relatedReference") ?? "").trim(),
      message: String(form.get("message") ?? "").trim(),
      website: String(form.get("website") ?? "").trim(),
      consent: form.get("consent") === "yes",
    };
    const fallback = whatsappHref([
      "Hi Rolling Dents, I have a customer enquiry.",
      `Name: ${payload.name}`,
      `Mobile: ${payload.mobile}`,
      `Topic: ${payload.topic}`,
      payload.relatedReference ? `Reference: ${payload.relatedReference}` : "",
      `Message: ${payload.message}`,
    ].filter(Boolean).join("\n"));

    try {
      const response = await fetch("/api/inquiries", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(payload) });
      const body = await response.json() as InquiryResult & { error?: string };
      if (!response.ok) throw new Error(body.error || "Enquiry persistence unavailable");
      const continuation = whatsappHref(`Hi Rolling Dents, I submitted enquiry ${body.reference}. Please help me with the next step.`);
      setResult(body);
      setWhatsappContinuation(continuation);
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "We could not save this enquiry right now.");
      setFallbackHref(fallback);
    } finally {
      setSubmitting(false);
    }
  }

  if (result) {
    return (
      <div className="rounded-[28px] border border-[#d7d0c6] bg-white p-7 shadow-sm sm:p-9" aria-live="polite">
        <CheckCircle2 className="h-12 w-12 text-[#287b55]" />
        <p className="mt-6 text-[11px] font-black uppercase tracking-[0.18em] text-[#6d675e]">ENQUIRY RECEIVED</p>
        <h2 className="mt-2 text-4xl font-black tracking-[-0.04em] text-[#171817]">Keep this reference.</h2>
        <p className="mt-4 text-sm leading-7 text-[#655f57]">Your enquiry has been recorded for the workshop. Use the reference below if you continue the conversation on WhatsApp or by phone.</p>
        <div className="mt-5 inline-flex rounded-2xl border border-[#d6cfc4] bg-[#f4f0e9] px-5 py-4 text-lg font-black tracking-[0.04em] text-[#171817]">{result.reference}</div>
        <div className="mt-7 flex flex-wrap gap-3">
          <Button asChild className="orange-button content-button"><a href={whatsappContinuation} target="_blank" rel="noreferrer"><MessageCircle /> Continue on WhatsApp</a></Button>
          <Button type="button" variant="outline" className="dark-outline content-button" onClick={() => { setResult(null); setWhatsappContinuation(""); }}>Send another enquiry</Button>
        </div>
      </div>
    );
  }

  return (
    <form className="rounded-[28px] border border-[#d7d0c6] bg-white p-7 shadow-sm sm:p-9" onSubmit={submit}>
      <div className="mb-6"><p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#6d675e]">GENERAL ENQUIRY</p><h2 className="mt-2 text-4xl font-black tracking-[-0.04em] text-[#171817]">Ask the workshop.</h2><p className="mt-3 text-sm leading-7 text-[#655f57]">Use the vehicle assessment for new damage. Use this form for existing repairs, insurance questions, restoration projects or other customer enquiries.</p></div>
      <input className="sr-only" tabIndex={-1} autoComplete="off" name="website" aria-hidden="true" />
      <div className="grid gap-4 sm:grid-cols-2">
        <label><span>Your name</span><Input required name="name" maxLength={120} autoComplete="name" placeholder="Full name" /></label>
        <label><span>Mobile / WhatsApp</span><Input required name="mobile" maxLength={40} autoComplete="tel" inputMode="tel" placeholder="082 123 4567" /></label>
        <label><span>Email (optional)</span><Input name="email" maxLength={180} autoComplete="email" type="email" placeholder="name@example.com" /></label>
        <label><span>What do you need help with?</span><Select value={topic} onValueChange={(value) => setTopic((value as (typeof topics)[number]) || "General enquiry")}><SelectTrigger className="form-control"><SelectValue /></SelectTrigger><SelectContent>{topicOptions}</SelectContent></Select></label>
        {existingRepair && <label className="sm:col-span-2"><span>Assessment, claim or job reference (optional)</span><Input name="relatedReference" maxLength={100} placeholder="e.g. RD-20260903-ABC123" /></label>}
        <label className="sm:col-span-2"><span>Message</span><Textarea required name="message" maxLength={2000} rows={6} placeholder="Tell Rolling Dents what you need help with." /></label>
      </div>
      <label className="mt-5 flex flex-row items-start gap-3 text-sm font-medium leading-6 text-[#5d5952]"><input required name="consent" value="yes" type="checkbox" className="mt-1 h-4 w-4 accent-[#f47721]" /><span>I agree that Rolling Dents may store these details and contact me about this enquiry.</span></label>
      {errorMessage && <div className="mt-5 rounded-xl border border-[#e3b3ae] bg-[#fff1ef] px-4 py-3 text-sm font-bold text-[#8c2922]" role="alert" aria-live="polite"><p>{errorMessage}</p>{fallbackHref && <a className="mt-2 inline-flex items-center gap-2 underline" href={fallbackHref} target="_blank" rel="noreferrer">Continue in WhatsApp <ArrowRight className="h-4 w-4" /></a>}</div>}
      <Button type="submit" disabled={submitting} className="orange-button estimate-submit mt-6">{submitting ? <><LoaderCircle className="animate-spin" /> Saving enquiry</> : <>Send enquiry <ArrowRight /></>}</Button>
    </form>
  );
}
