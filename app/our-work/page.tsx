import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Camera, Check } from "lucide-react";
import { CtaBanner } from "@/components/rolling-dents/cta-banner";
import { PageHero } from "@/components/rolling-dents/page-hero";
import { pageMetadata } from "@/lib/rolling-dents";

export const metadata = pageMetadata("Autobody Repair Gallery | Our Work", "See real Rolling Dents vehicles, spray-booth work, workshop facilities and finished automotive body repairs in Roodepoort.", "/our-work", "/media/black-gtr-finish.webp");

const gallery = [
  { image: "/media/black-gtr-finish.webp", label: "FINAL FINISH", title: "Deep gloss. Clean reflections.", alt: "Black performance vehicle with a polished exterior finish" },
  { image: "/media/volkswagen-spray-booth.webp", label: "SPRAY BOOTH", title: "Prepared for controlled refinishing.", alt: "Vehicle prepared inside the Rolling Dents spray booth" },
  { image: "/media/mercedes-paint-booth.webp", label: "REFINISHING", title: "Coverage, colour and clarity.", alt: "Vehicle receiving automotive refinishing" },
  { image: "/media/white-gtr-finish.webp", label: "BODY & FINISH", title: "Form restored. Presence returned.", alt: "White performance vehicle with finished bodywork" },
  { image: "/media/toyota-finish.webp", label: "PARTS & FIT", title: "Every component sits where it belongs.", alt: "Vehicle front body components after professional work" },
  { image: "/media/rolling-dents-reception.webp", label: "RECEPTION", title: "A real workshop you can visit.", alt: "Rolling Dents reception entrance in Laser Park" },
  { image: "/media/workshop-entrance.webp", label: "LASER PARK", title: "The workshop behind the work.", alt: "Entrance to the Rolling Dents workshop" },
  { image: "/media/zeiss-road-sign.webp", label: "FIND US", title: "Unit 1 at 1510 Zeiss Road.", alt: "1510 Zeiss Road sign showing Rolling Dents Unit 1" },
];

export default function OurWorkPage() {
  return (
    <main>
      <PageHero eyebrow="REAL WORK. REAL WORKSHOP." title="The finish speaks before we do." description="Vehicles in process, vehicles complete and the workshop environment behind the bodywork and finish." image="/media/black-gtr-finish.webp" imageAlt="Finished black performance vehicle at Rolling Dents" />
      <section className="work-gallery section-light">
        <div className="section-heading split-heading"><div><p className="section-kicker">FROM PREPARATION TO PRESENTATION</p><h2>See where the result comes from.</h2></div><p>No stock workshop scenes. This is Rolling Dents in Laser Park—its spray booth, reception, workshop and finished vehicles.</p></div>
        <div className="work-gallery-grid">{gallery.map((item, index) => <figure className={index === 0 || index === 3 ? "gallery-wide" : ""} key={item.image}><Image src={item.image} alt={item.alt} width={1100} height={820} sizes={index === 0 || index === 3 ? "(max-width: 800px) 100vw, 66vw" : "(max-width: 800px) 100vw, 33vw"} /><figcaption><span>{item.label}</span><strong>{item.title}</strong></figcaption></figure>)}</div>
      </section>
      <section className="proof-standard">
        <div><Camera /><p className="section-kicker orange-kicker">WHAT GOOD PROOF SHOWS</p><h2>Not just the final angle.</h2><p>A complete repair story includes the damage, the work in progress, the repaired panel and the finished vehicle. As more matched before-and-after jobs become available, this gallery can document the full repair story.</p></div>
        <div className="proof-list"><span><Check />Damage assessed before work begins</span><span><Check />Repair method matched to the vehicle</span><span><Check />Preparation completed before colour</span><span><Check />Fit and finish checked before collection</span><Link href="/services">Explore repair services <ArrowRight /></Link></div>
      </section>
      <CtaBanner title="Let your vehicle be the next finish." copy="Submit photographs of the damage and the workshop will advise the right assessment step." />
    </main>
  );
}
