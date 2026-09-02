import { ArrowRight, Camera, Car, Check, ClipboardCheck, FileText, MessageCircle, ShieldCheck, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBanner } from "@/components/rolling-dents/cta-banner";
import { PageHero } from "@/components/rolling-dents/page-hero";
import { pageMetadata, whatsappUrl } from "@/lib/rolling-dents";

export const metadata = pageMetadata("Insurance Accident Repairs Roodepoort", "RMI-approved insurance accident repair journey in Laser Park, Roodepoort. Send damage photos and start the vehicle assessment process.", "/insurance-repairs", "/media/mercedes-paint-booth.webp");

const steps = [
  [Camera, "Send the damage", "WhatsApp clear photographs, vehicle details and a short description of the accident."],
  [ClipboardCheck, "Workshop assessment", "Rolling Dents inspects the vehicle and confirms the visible repair requirements."],
  [FileText, "Claim & authorisation", "Your insurer’s claim and authorisation process is followed before approved work begins."],
  [Wrench, "Body repair & paint", "Panels, parts and refinishing move through the agreed repair plan."],
  [ShieldCheck, "Quality check & collection", "The completed vehicle is inspected and prepared for handover."],
] as const;

export default function InsuranceRepairsPage() {
  return (
    <main>
      <PageHero eyebrow="INSURANCE ACCIDENT REPAIRS" title="Had an accident? Start with what you can see." description="Send the damage, confirm the claim route and let an RMI-approved repairer guide the workshop assessment." image="/media/mercedes-paint-booth.webp" imageAlt="Mercedes-Benz being professionally refinished at Rolling Dents" />
      <section className="insurance-start section-light">
        <div><p className="section-kicker">BEFORE YOU ARRIVE</p><h2>Have these details ready.</h2><p>A clear first message helps the workshop understand the vehicle and the claim stage before you travel to Laser Park.</p></div>
        <div className="insurance-checklist"><span><Check />Your full name and mobile number</span><span><Check />Vehicle make, model, year and registration</span><span><Check />Claim number, if one has been issued</span><span><Check />Insurer details and current claim status</span><span><Check />3–6 clear photographs of the damage</span><span><Check />A short description of what happened</span></div>
      </section>
      <section className="insurance-journey">
        <div className="section-heading center-heading"><p className="section-kicker orange-kicker">ACCIDENT TO COLLECTION</p><h2>A repair journey with a clear next step.</h2></div>
        <div className="insurance-step-grid">{steps.map(([Icon, title, copy], index) => <article key={title}><div><span>{String(index + 1).padStart(2, "0")}</span><Icon /></div><h3>{title}</h3><p>{copy}</p>{index < steps.length - 1 && <ArrowRight />}</article>)}</div>
      </section>
      <section className="insurance-choice section-light">
        <div className="choice-card"><ShieldCheck /><p className="section-kicker">INSURANCE REPAIR</p><h2>Already opened a claim?</h2><p>Share the claim information together with the damage photographs. Rolling Dents will advise what is required for the workshop assessment.</p><Button asChild className="orange-button content-button"><a href={whatsappUrl("Hi Rolling Dents, I need help with an insurance accident repair. I have opened a claim and would like to send the vehicle details.")} target="_blank" rel="noreferrer"><MessageCircle /> Start on WhatsApp</a></Button></div>
        <div className="choice-card dark-choice"><Car /><p className="section-kicker orange-kicker">PRIVATE REPAIR</p><h2>Paying for the repair yourself?</h2><p>Private work follows the same careful damage assessment, repair planning and quality-control process.</p><Button asChild variant="outline" className="dark-outline content-button"><a href="/estimate">Start a private assessment <ArrowRight /></a></Button></div>
      </section>
      <section className="faq-section">
        <div><p className="section-kicker orange-kicker">CLAIM QUESTIONS</p><h2>Know before the repair begins.</h2></div>
        <div className="faq-list">
          <details><summary>Should I contact my insurer before authorising repairs?<span>+</span></summary><p>Yes. Insurance repairs normally require a claim and authorisation before work begins. Contact your insurer and share the claim stage with Rolling Dents.</p></details>
          <details><summary>Can photographs confirm the full repair cost?<span>+</span></summary><p>Photographs help with the first conversation, but concealed damage and component condition may only be clear during a physical workshop assessment.</p></details>
          <details><summary>Does RMI approval mean every insurer automatically approves the workshop?<span>+</span></summary><p>No. RMI approval and insurer repair-network approval are different. Confirm your insurer’s requirements for the specific claim.</p></details>
        </div>
      </section>
      <CtaBanner title="Start the claim conversation." copy="WhatsApp the vehicle details, claim stage and clear damage photographs to Rolling Dents." />
    </main>
  );
}
