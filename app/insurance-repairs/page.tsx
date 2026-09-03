import Link from "next/link";
import { ArrowRight, Camera, Car, Check, ClipboardCheck, FileText, MessageCircle, ShieldCheck, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBanner } from "@/components/rolling-dents/cta-banner";
import { PageHero } from "@/components/rolling-dents/page-hero";
import { pageMetadata, whatsappUrl } from "@/lib/rolling-dents";

export const metadata = pageMetadata("Insurance Accident Repairs Roodepoort", "Start an insurance-related accident repair enquiry in Laser Park, Roodepoort. Send damage photos, claim details and vehicle information for the workshop assessment.", "/insurance-repairs", "/media/mercedes-paint-booth.webp");

const steps = [
  [Camera, "Send the damage", "Start with clear photographs, vehicle details and a short description of the accident."],
  [ClipboardCheck, "Workshop assessment", "Rolling Dents inspects the vehicle and confirms the visible repair requirements."],
  [FileText, "Claim & authorisation", "The insurer claim and authorisation requirements are followed before approved work begins."],
  [Wrench, "Body repair & paint", "Panels, parts and refinishing move through the agreed repair plan."],
  [ShieldCheck, "Quality check & collection", "The completed vehicle is inspected and prepared for handover."],
] as const;

export default function InsuranceRepairsPage() {
  return (
    <main>
      <PageHero eyebrow="INSURANCE ACCIDENT REPAIRS" title="Had an accident? Start with what you can see." description="Send the damage, identify the claim stage and let the workshop confirm what information or inspection is needed next." image="/media/mercedes-paint-booth.webp" imageAlt="Vehicle being professionally refinished at Rolling Dents" />
      <section className="insurance-start section-light">
        <div><p className="section-kicker">BEFORE YOU ARRIVE</p><h2>Have these details ready.</h2><p>A clear first message helps the workshop understand the vehicle and claim stage before you travel to Laser Park.</p></div>
        <div className="insurance-checklist"><span><Check />Your full name and mobile number</span><span><Check />Vehicle make, model, year and registration</span><span><Check />Claim number, if one has been issued</span><span><Check />Insurer details and current claim status</span><span><Check />3–6 clear photographs of the damage</span><span><Check />A short description of what happened</span></div>
      </section>
      <section className="insurance-journey">
        <div className="section-heading center-heading"><p className="section-kicker orange-kicker">ACCIDENT TO COLLECTION</p><h2>A repair journey with a clear next step.</h2></div>
        <div className="insurance-step-grid">{steps.map(([Icon, title, copy], index) => <article key={title}><div><span>{String(index + 1).padStart(2, "0")}</span><Icon /></div><h3>{title}</h3><p>{copy}</p>{index < steps.length - 1 && <ArrowRight />}</article>)}</div>
      </section>
      <section className="insurance-choice section-light">
        <div className="choice-card"><ShieldCheck /><p className="section-kicker">INSURANCE REPAIR</p><h2>Already opened a claim?</h2><p>Share the claim information together with the damage photographs. Rolling Dents will advise what is required for the workshop assessment.</p><Button asChild className="orange-button content-button"><Link href="/estimate">Start insurance assessment <ArrowRight /></Link></Button></div>
        <div className="choice-card dark-choice"><Car /><p className="section-kicker orange-kicker">PRIVATE REPAIR</p><h2>Paying for the repair yourself?</h2><p>Private work follows the same careful damage assessment, repair planning and quality-control process.</p><Button asChild variant="outline" className="dark-outline content-button"><Link href="/estimate">Start a private assessment <ArrowRight /></Link></Button></div>
      </section>
      <section className="faq-section">
        <div><p className="section-kicker orange-kicker">CLAIM QUESTIONS</p><h2>Know before the repair begins.</h2></div>
        <div className="faq-list">
          <details><summary>Should I contact my insurer before authorising repairs?<span>+</span></summary><p>Insurance repairs normally require a claim and authorisation process. Contact your insurer and share the claim stage with Rolling Dents before work is authorised.</p></details>
          <details><summary>Can photographs confirm the full repair cost?<span>+</span></summary><p>Photographs help with the first conversation, but concealed damage and component condition may only be clear during a physical workshop assessment.</p></details>
          <details><summary>Does every insurer use the same repair process?<span>+</span></summary><p>No. Insurer requirements and repair-network rules vary. Confirm the requirements for the specific claim and bring the information you have to the workshop.</p></details>
        </div>
      </section>
      <CtaBanner title="Start the claim conversation." copy="Submit the vehicle details and damage photographs, or continue directly on WhatsApp if that is faster." />
      <div className="center-actions" style={{ paddingBottom: 42 }}><a href={whatsappUrl("Hi Rolling Dents, I need help with an insurance-related repair and would like to share my claim details.")} target="_blank" rel="noreferrer"><MessageCircle /> WhatsApp Rolling Dents</a></div>
    </main>
  );
}
