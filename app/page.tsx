import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Camera, Car, Clock3, MapPin, MessageCircle, ShieldCheck, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBanner } from "@/components/rolling-dents/cta-banner";
import { PHONE_DISPLAY, services, whatsappUrl } from "@/lib/rolling-dents";

export default function Home() {
  return (
    <main>
      <section className="home-hero">
        <div className="home-hero-copy">
          <p className="eyebrow"><span />AUTOBODY REPAIR · LASER PARK</p>
          <h1>DENTS.<br />DAMAGE.<br /><em>GONE.</em></h1>
          <p className="hero-lead">Complete autobody repair, dent repair and professional refinishing in Laser Park, Roodepoort.</p>
          <div className="hero-actions">
            <Button asChild className="orange-button hero-button"><Link href="/estimate">Start my assessment <ArrowRight /></Link></Button>
            <Button asChild variant="outline" className="dark-outline hero-button"><a href={whatsappUrl()} target="_blank" rel="noreferrer"><MessageCircle /> WhatsApp the workshop</a></Button>
          </div>
          <div className="hero-trust">
            <div><Wrench /><span><strong>Complete autobody repair</strong>Assessment to finish</span></div>
            <div><MapPin /><span><strong>Laser Park</strong>Roodepoort</span></div>
            <div><Clock3 /><span><strong>Mon–Fri</strong>07:30–17:00</span></div>
          </div>
        </div>
        <div className="home-hero-visual">
          <Image src="/og.png" alt="Premium Mercedes-Benz in a professional automotive paint booth" fill priority sizes="(max-width: 900px) 100vw, 58vw" style={{ objectFit: "cover", objectPosition: "62% center" }} />
          <div className="hero-image-shade" />
          <a className="hero-project-card" href={whatsappUrl("Hi Rolling Dents, I would like to send photographs for a repair assessment.")} target="_blank" rel="noreferrer"><span className="pulse-dot" /><span><small>QUICK ASSESSMENT</small><strong>Send damage photos on WhatsApp</strong></span><ArrowRight /></a>
        </div>
      </section>

      <section className="signal-strip"><p>PAINT SHOP</p><span /><p>FULL VEHICLE RESPRAYS</p><span /><p>PAINTLESS DENT REMOVAL</p><span /><p>PARTS REPLACEMENT</p><span /><p>PAINT CORRECTION</p></section>

      <section className="quick-actions">
        <Link href="/estimate"><Car /><span><small>VEHICLE DAMAGED?</small><strong>Start an assessment</strong></span><ArrowRight /></Link>
        <Link href="/insurance-repairs"><ShieldCheck /><span><small>INSURANCE CLAIM?</small><strong>See the insurance journey</strong></span><ArrowRight /></Link>
        <Link href="/contact#existing-repair"><MessageCircle /><span><small>VEHICLE ALREADY WITH US?</small><strong>Contact the workshop</strong></span><ArrowRight /></Link>
      </section>

      <section className="home-services section-light">
        <div className="section-heading split-heading">
          <div><p className="section-kicker">ROLLING DENTS SERVICES</p><h2>Start with what your vehicle actually needs.</h2></div>
          <div className="heading-side"><p>Paint, resprays, dents, parts and finishing each have their own repair path. If you are unsure, start with photographs.</p><Link className="text-link dark-text-link" href="/services">Explore all services <ArrowRight /></Link></div>
        </div>
        <div className="home-service-grid">
          {services.slice(0, 4).map((service, index) => (
            <Link href={`/services/${service.slug}`} key={service.slug}>
              <span className="service-number">{String(index + 1).padStart(2, "0")}</span>
              <Image src={service.image} alt={service.imageAlt} width={720} height={460} sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 25vw" />
              <div><small>{service.kicker}</small><h3>{service.title}</h3><p>{service.summary}</p><em>View service <ArrowRight /></em></div>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-work">
        <div className="home-work-heading"><p className="section-kicker orange-kicker">REAL WORKSHOP · REAL VEHICLES</p><h2>Judge the finish, not the promise.</h2><p>See Rolling Dents workshop photography, refinishing work and completed vehicle finishes.</p><Link className="text-link" href="/our-work">View the workshop gallery <ArrowRight /></Link></div>
        <div className="home-work-grid">
          <figure className="work-large"><Image src="/media/volkswagen-spray-booth.webp" alt="Vehicle inside the Rolling Dents spray booth" width={1200} height={820} sizes="(max-width: 800px) 100vw, 55vw" /><figcaption><span>IN THE BOOTH</span><strong>Preparation and controlled refinishing</strong></figcaption></figure>
          <figure><Image src="/media/black-gtr-finish.webp" alt="Black performance vehicle with a deep exterior finish" width={900} height={700} sizes="(max-width: 800px) 100vw, 30vw" /><figcaption><span>FINAL FINISH</span><strong>Depth, clarity and clean reflections</strong></figcaption></figure>
          <figure><Image src="/media/toyota-finish.webp" alt="Vehicle bodywork and components after professional work" width={900} height={700} sizes="(max-width: 800px) 100vw, 30vw" /><figcaption><span>BODY & FIT</span><strong>Panels, parts and presentation</strong></figcaption></figure>
        </div>
      </section>

      <section className="home-journey section-light">
        <div className="section-heading center-heading"><p className="section-kicker">FROM DAMAGE TO DECISION</p><h2>Know what happens before the keys change hands.</h2><p>Start with photographs and vehicle details, confirm the repair route, then bring the vehicle in when the workshop needs to inspect it.</p></div>
        <div className="three-step-grid">
          <article><span>01</span><Camera /><h3>Show the damage</h3><p>Upload or WhatsApp clear photographs together with the vehicle details.</p></article>
          <article><span>02</span><ShieldCheck /><h3>Confirm the route</h3><p>Private repair, insurance claim or still deciding—the next step is made clear before work begins.</p></article>
          <article><span>03</span><Car /><h3>Workshop assessment</h3><p>The vehicle is inspected, the repair scope is confirmed and authorised work can be planned.</p></article>
        </div>
        <div className="center-actions"><Button asChild className="orange-button content-button"><Link href="/repair-process">See the full repair process <ArrowRight /></Link></Button><a href={whatsappUrl()} target="_blank" rel="noreferrer"><MessageCircle /> WhatsApp instead</a></div>
      </section>

      <CtaBanner title="Start with the damage." copy={`Request an assessment online or WhatsApp ${PHONE_DISPLAY} with your vehicle details and clear photographs.`} />
    </main>
  );
}
