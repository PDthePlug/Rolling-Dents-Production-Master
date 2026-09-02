import Link from "next/link";
import { ArrowRight, BadgeCheck, Camera, Car, Check, ClipboardCheck, MessageCircle, Paintbrush, ShieldCheck, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBanner } from "@/components/rolling-dents/cta-banner";
import { PageHero } from "@/components/rolling-dents/page-hero";
import { pageMetadata, whatsappUrl } from "@/lib/rolling-dents";

export const metadata = pageMetadata(
  "Vehicle Repair Process Roodepoort",
  "See how Rolling Dents moves from damage photos and assessment to repair planning, bodywork, paint, quality control and collection.",
  "/repair-process",
  "/media/mercedes-paint-booth.webp",
);

const steps = [
  [Camera, "Start with the damage", "Send or upload clear photographs together with the vehicle details and a short description of what happened."],
  [ClipboardCheck, "Workshop assessment", "The visible damage, affected panels and likely parts or paint requirements are inspected before the repair scope is confirmed."],
  [ShieldCheck, "Approve the repair route", "Private work is quoted directly. Insurance work follows the claim and authorisation requirements before approved work begins."],
  [Wrench, "Body repair & parts", "Panels are repaired or replaced, fit and alignment are checked, and the vehicle is prepared for refinishing."],
  [Paintbrush, "Paint & finish", "Prepared surfaces move through colour matching, controlled application, curing and finish refinement."],
  [BadgeCheck, "Quality check & collection", "The completed repair is inspected for fit, finish and presentation before the vehicle is handed back."],
] as const;

export default function RepairProcessPage() {
  return (
    <main>
      <PageHero
        eyebrow="THE REPAIR PROCESS"
        title="Know what happens after you show us the damage."
        description="A clear repair journey from the first photographs to the final inspection, whether the work is private or insurance-related."
        image="/media/mercedes-paint-booth.webp"
        imageAlt="Mercedes-Benz inside the Rolling Dents professional refinishing environment"
      />

      <section className="insurance-start section-light">
        <div>
          <p className="section-kicker">FIRST CONTACT</p>
          <h2>Useful information makes the first assessment faster.</h2>
          <p>Start with enough context for the workshop to understand the vehicle, the visible damage and the route you expect the repair to follow.</p>
        </div>
        <div className="insurance-checklist">
          <span><Check />Vehicle make, model and year</span>
          <span><Check />Registration number if available</span>
          <span><Check />3–6 clear damage photographs</span>
          <span><Check />Short description of what happened</span>
          <span><Check />Private or insurance repair</span>
          <span><Check />Claim number if one already exists</span>
        </div>
      </section>

      <section className="insurance-journey">
        <div className="section-heading center-heading">
          <p className="section-kicker orange-kicker">DAMAGE TO COLLECTION</p>
          <h2>Six stages. One clear next step at a time.</h2>
          <p>Photographs help start the conversation, but the physical workshop assessment is where the final repair scope is confirmed.</p>
        </div>
        <div className="insurance-step-grid">
          {steps.map(([Icon, title, copy], index) => (
            <article key={title}>
              <div><span>{String(index + 1).padStart(2, "0")}</span><Icon /></div>
              <h3>{title}</h3>
              <p>{copy}</p>
              {index < steps.length - 1 && <ArrowRight />}
            </article>
          ))}
        </div>
      </section>

      <section className="insurance-choice section-light">
        <div className="choice-card">
          <ShieldCheck />
          <p className="section-kicker">INSURANCE REPAIR</p>
          <h2>Already have a claim?</h2>
          <p>Bring the claim number, insurer details and current authorisation stage. Rolling Dents can then tell you what the workshop needs next.</p>
          <Button asChild className="orange-button content-button"><Link href="/insurance-repairs">See insurance repairs <ArrowRight /></Link></Button>
        </div>
        <div className="choice-card dark-choice">
          <Car />
          <p className="section-kicker orange-kicker">PRIVATE REPAIR</p>
          <h2>Paying for the repair yourself?</h2>
          <p>Start with the same assessment. The workshop confirms the repair scope and quotation before authorised work begins.</p>
          <Button asChild variant="outline" className="dark-outline content-button"><Link href="/estimate">Start an assessment <ArrowRight /></Link></Button>
        </div>
      </section>

      <section className="faq-section">
        <div><p className="section-kicker orange-kicker">REPAIR QUESTIONS</p><h2>What the first photos can—and cannot—tell you.</h2></div>
        <div className="faq-list">
          <details><summary>Can photographs give me a final quotation?<span>+</span></summary><p>Photographs are useful for the first assessment, but concealed damage, panel access and component condition may require a physical inspection before a final quotation is confirmed.</p></details>
          <details><summary>Will work start before I approve the repair?<span>+</span></summary><p>No repair should begin until the applicable scope, quotation or insurer authorisation has been confirmed.</p></details>
          <details><summary>What if I am not sure whether to claim from insurance?<span>+</span></summary><p>Start with the damage assessment. You can explain that you are still deciding, and the workshop can tell you what information is needed for the next step.</p></details>
        </div>
      </section>

      <CtaBanner title="Start with the damage." copy="Request an assessment online, or send the vehicle details and clear photographs to Rolling Dents on WhatsApp." />
      <div className="center-actions" style={{ paddingBottom: 42 }}><a href={whatsappUrl()} target="_blank" rel="noreferrer"><MessageCircle /> WhatsApp Rolling Dents</a></div>
    </main>
  );
}
