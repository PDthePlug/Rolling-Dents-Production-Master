import Image from "next/image";
import { Camera, Check, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import { EstimateForm } from "@/components/rolling-dents/estimate-form";
import { PHONE_DISPLAY, pageMetadata, whatsappUrl } from "@/lib/rolling-dents";

export const metadata = pageMetadata(
  "Request a Vehicle Repair Assessment",
  "Start a Rolling Dents vehicle repair assessment with your vehicle details and damage photographs, then continue directly in WhatsApp.",
  "/estimate",
  "/og.png",
);

export default function EstimatePage() {
  return (
    <main className="estimate-page">
      <section className="estimate-page-intro">
        <div>
          <p className="eyebrow"><span />START YOUR ASSESSMENT</p>
          <h1>Show the workshop the damage before you drive in.</h1>
          <p>Complete the vehicle details and add clear photographs. The assessment is prepared first, then WhatsApp opens so you can continue the conversation with the same information.</p>
        </div>
        <div className="estimate-side-card">
          <ShieldCheck />
          <h2>Before you begin</h2>
          <div className="check-list light-check-list">
            <span><Check />Stand in good light</span>
            <span><Check />Include the full side of the vehicle</span>
            <span><Check />Take close-ups from two angles</span>
            <span><Check />Have the registration ready if possible</span>
          </div>
          <a href={whatsappUrl()} target="_blank" rel="noreferrer"><MessageCircle /> Skip the form and WhatsApp</a>
          <a href="tel:+27117942454"><Phone /> Call {PHONE_DISPLAY}</a>
        </div>
      </section>
      <section className="estimate-form-section section-light">
        <div className="estimate-form-visual">
          <Image src="/media/mercedes-paint-booth.webp" alt="Vehicle inside the Rolling Dents professional paint booth" width={1200} height={1500} sizes="(max-width: 900px) 100vw, 42vw" />
          <span><Camera /><strong>Show the whole repair area</strong>Clear photographs make the first conversation more useful.</span>
        </div>
        <EstimateForm />
      </section>
    </main>
  );
}
