import { Camera, Check, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import { EstimateForm } from "@/components/rolling-dents/estimate-form";
import { PHONE_DISPLAY, pageMetadata, whatsappUrl } from "@/lib/rolling-dents";

export const metadata = pageMetadata("Request a Vehicle Repair Assessment", "Start a Rolling Dents vehicle repair assessment and continue directly in WhatsApp with your damage photographs.", "/estimate", "/og.png");

export default function EstimatePage() {
  return (
    <main className="estimate-page">
      <section className="estimate-page-intro">
        <div><p className="eyebrow"><span />START YOUR ASSESSMENT</p><h1>Let the workshop see the damage first.</h1><p>Complete the vehicle details once. Your answers will open in a WhatsApp message to Rolling Dents, ready for you to attach the damage photographs.</p></div>
        <div className="estimate-side-card"><ShieldCheck /><h2>Before you begin</h2><div className="check-list light-check-list"><span><Check />Stand in good light</span><span><Check />Keep the full vehicle in one photo</span><span><Check />Take close-ups from two angles</span><span><Check />Include your registration if possible</span></div><a href={whatsappUrl()} target="_blank" rel="noreferrer"><MessageCircle /> Skip the form and WhatsApp</a><a href="tel:+27117942454"><Phone /> Call {PHONE_DISPLAY}</a></div>
      </section>
      <section className="estimate-form-section section-light"><div className="estimate-form-visual"><img src="/media/mercedes-paint-booth.webp" alt="Vehicle inside the Rolling Dents professional paint booth" /><span><Camera /><strong>Show the whole repair area</strong>Clear photographs make the first conversation more useful.</span></div><EstimateForm /></section>
    </main>
  );
}
