import Image from "next/image";
import { Check, MapPin, Paintbrush, ShieldCheck, Sparkles, Wrench } from "lucide-react";
import { CtaBanner } from "@/components/rolling-dents/cta-banner";
import { PageHero } from "@/components/rolling-dents/page-hero";
import { ADDRESS, pageMetadata } from "@/lib/rolling-dents";

export const metadata = pageMetadata("About Rolling Dents | Autobody Repair Laser Park", "Meet Rolling Dents, a complete automotive body repair specialist in Laser Park, Roodepoort.", "/about", "/media/rolling-dents-reception.webp");

export default function AboutPage() {
  return (
    <main>
      <PageHero eyebrow="ABOUT ROLLING DENTS" title="Panel beating is the process. Restoring the car is the craft." description="Complete automotive body repair, paint, dent, parts, detailing and restoration services in Laser Park." image="/media/rolling-dents-reception.webp" imageAlt="Entrance to the Rolling Dents reception in Laser Park" />
      <section className="about-story section-light">
        <div><p className="section-kicker">PERFECTION IN EVERY PANEL</p><h2>A workshop built around the finish.</h2></div>
        <div><p>Rolling Dents is an automotive body repair specialist based at {ADDRESS}. The workshop handles private and insurance-related repair enquiries across bodywork, paint, dents, replacement parts and vehicle finishing.</p><p>The working principle is simple: understand the damage, choose the right repair method, control each stage and return the vehicle with the bodywork and finish properly presented.</p></div>
      </section>
      <section className="about-mosaic">
        <figure className="about-mosaic-main"><Image src="/media/volkswagen-spray-booth.webp" alt="Rolling Dents spray booth with a vehicle prepared for refinishing" width={1200} height={900} sizes="(max-width: 800px) 100vw, 58vw" /><figcaption>CONTROLLED REFINISHING ENVIRONMENT</figcaption></figure>
        <figure><Image src="/media/workshop-entrance.webp" alt="Rolling Dents workshop entrance in Laser Park" width={900} height={700} sizes="(max-width: 800px) 100vw, 30vw" /><figcaption>LASER PARK WORKSHOP</figcaption></figure>
        <figure><Image src="/media/black-gtr-finish.webp" alt="Finished black performance vehicle" width={900} height={700} sizes="(max-width: 800px) 100vw, 30vw" /><figcaption>FINISH-LED WORKMANSHIP</figcaption></figure>
      </section>
      <section className="standards-section section-light">
        <div className="section-heading center-heading"><p className="section-kicker">WHAT THE STANDARD LOOKS LIKE</p><h2>Care at every visible stage.</h2></div>
        <div className="standards-grid">
          <article><Wrench /><h3>Repair before appearance</h3><p>The panel and component requirements are established before finishing begins.</p></article>
          <article><Paintbrush /><h3>Controlled paintwork</h3><p>Preparation, application and final finish receive their own attention.</p></article>
          <article><Sparkles /><h3>Presentation matters</h3><p>The completed vehicle is checked as a whole, not only at the damaged panel.</p></article>
          <article><ShieldCheck /><h3>Clear next steps</h3><p>The customer journey explains what information the workshop needs before repair begins.</p></article>
        </div>
      </section>
      <section className="workshop-values">
        <div><ShieldCheck /><p className="section-kicker orange-kicker">THE ROLLING DENTS APPROACH</p><h2>Return the confidence with the car.</h2></div>
        <div className="check-list light-check-list"><span><Check />Clear assessment before work begins</span><span><Check />Repair method matched to the damage</span><span><Check />Body, parts and paint planned together</span><span><Check />Final inspection before collection</span><span><Check />Direct contact with the Laser Park workshop</span></div>
      </section>
      <section className="visit-workshop section-light"><div><MapPin /><p className="section-kicker">VISIT ROLLING DENTS</p><h2>See the workshop behind the work.</h2><p>{ADDRESS}<br />Monday–Friday · 07:30–17:00</p></div><div className="visit-image"><Image src="/media/zeiss-road-sign.webp" alt="1510 Zeiss Road sign showing Rolling Dents Unit 1" width={1100} height={800} sizes="(max-width: 800px) 100vw, 45vw" /></div></section>
      <CtaBanner title="Let the workshop see the damage." />
    </main>
  );
}
