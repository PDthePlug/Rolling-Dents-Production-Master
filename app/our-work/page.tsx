import { ArrowRight, Camera, Check } from "lucide-react";
import { CtaBanner } from "@/components/rolling-dents/cta-banner";
import { PageHero } from "@/components/rolling-dents/page-hero";
import { pageMetadata } from "@/lib/rolling-dents";

export const metadata = pageMetadata("Autobody Repair Gallery | Our Work", "See vehicles, spray-booth work, workshop facilities and finished automotive body repairs from Rolling Dents in Roodepoort.", "/our-work", "/media/black-gtr-finish.webp");

const gallery = [
  { image: "/media/black-gtr-finish.webp", label: "FINAL FINISH", title: "Deep gloss. Clean reflections.", alt: "Black performance car with a polished exterior finish" },
  { image: "/media/volkswagen-spray-booth.webp", label: "SPRAY BOOTH", title: "Prepared for controlled refinishing.", alt: "Volkswagen prepared inside the Rolling Dents spray booth" },
  { image: "/media/mercedes-paint-booth.webp", label: "REFINISHING", title: "Coverage, colour and clarity.", alt: "Mercedes-Benz receiving automotive refinishing" },
  { image: "/media/white-gtr-finish.webp", label: "BODY & FINISH", title: "Form restored. Presence returned.", alt: "White Nissan GT-R with finished bodywork" },
  { image: "/media/toyota-finish.webp", label: "PARTS & FIT", title: "Every component sits where it belongs.", alt: "Toyota front body components after professional work" },
  { image: "/media/rolling-dents-reception.webp", label: "RMI APPROVED", title: "A workshop with a standard to protect.", alt: "Rolling Dents reception entrance and RMI sign" },
  { image: "/media/workshop-entrance.webp", label: "LASER PARK", title: "The workshop behind the work.", alt: "Entrance to the Rolling Dents workshop" },
  { image: "/media/zeiss-road-sign.webp", label: "FIND US", title: "Unit 1 at 1510 Zeiss Road.", alt: "1510 Zeiss Road sign showing Rolling Dents Unit 1" },
];

export default function OurWorkPage() {
  return (
    <main>
      <PageHero eyebrow="REAL WORK. REAL WORKSHOP." title="The finish speaks before we do." description="Vehicles in process, vehicles complete and the people and equipment that bring the bodywork back to standard." image="/media/black-gtr-finish.webp" imageAlt="Finished black performance vehicle at Rolling Dents" />
      <section className="work-gallery section-light">
        <div className="section-heading split-heading"><div><p className="section-kicker">FROM PREPARATION TO PRESENTATION</p><h2>See where the result comes from.</h2></div><p>No stock workshop scenes. This is Rolling Dents in Laser Park—its spray booth, reception, workshop and finished vehicles.</p></div>
        <div className="work-gallery-grid">{gallery.map((item, index) => <figure className={index === 0 || index === 3 ? "gallery-wide" : ""} key={item.image}><img src={item.image} alt={item.alt} /><figcaption><span>{item.label}</span><strong>{item.title}</strong></figcaption></figure>)}</div>
      </section>
      <section className="proof-standard">
        <div><Camera /><p className="section-kicker orange-kicker">WHAT GOOD PROOF SHOWS</p><h2>Not just the final angle.</h2><p>A complete repair story includes the damage, the work in progress, the repaired panel and the finished vehicle. Ask the workshop to explain what your repair requires.</p></div>
        <div className="proof-list"><span><Check />Damage assessed before work begins</span><span><Check />Repair method matched to the panel</span><span><Check />Preparation completed before colour</span><span><Check />Fit and finish checked before collection</span><a href="/services">Explore repair services <ArrowRight /></a></div>
      </section>
      <CtaBanner title="Let your vehicle be the next finish." copy="Send photographs of the damage and the workshop will advise the right assessment step." />
    </main>
  );
}
