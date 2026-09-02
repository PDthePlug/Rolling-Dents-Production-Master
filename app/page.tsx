import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Camera, Car, MapPin, MessageCircle, ShieldCheck, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBanner } from "@/components/rolling-dents/cta-banner";
import { MAPS_URL, PHONE_DISPLAY, services, whatsappUrl } from "@/lib/rolling-dents";

export default function Home() {
  return (
    <main>
      <section className="home-hero">
        <div className="home-hero-copy">
          <p className="eyebrow"><span />RMI-approved autobody repair · Laser Park</p>
          <h1>DENTS.<br />DAMAGE.<br /><em>GONE.</em></h1>
          <p className="hero-lead">Complete body repair, precision paintwork and vehicle restoration in Roodepoort.</p>
          <div className="hero-actions">
            <Button asChild className="orange-button hero-button"><Link href="/estimate">Start my assessment <ArrowRight /></Link></Button>
            <Button asChild variant="outline" className="dark-outline hero-button"><a href={whatsappUrl()} target="_blank" rel="noreferrer"><MessageCircle /> WhatsApp photos</a></Button>
          </div>
          <div className="hero-trust">
            <div><BadgeCheck /><span><strong>RMI approved</strong>Body repair specialist</span></div>
            <div><Star /><span><strong>4.5 / 5</strong>Google rating</span></div>
            <div><MapPin /><span><strong>Laser Park</strong>Roodepoort</span></div>
          </div>
        </div>
        <div className="home-hero-visual">
          <Image src="/og.png" alt="Premium Mercedes-Benz in a professional automotive paint booth" fill priority sizes="(max-width: 900px) 100vw, 58vw" style={{ objectFit: "cover", objectPosition: "62% center" }} />
          <div className="hero-image-shade" />
          <a className="hero-project-card" href={whatsappUrl("Hi Rolling Dents, I would like to send photographs for a repair assessment.")} target="_blank" rel="noreferrer"><span className="pulse-dot" /><span><small>QUICK ASSESSMENT</small><strong>Send damage photos on WhatsApp</strong></span><ArrowRight /></a>
        </div>
      </section>

      <section className="signal-strip"><p>ACCIDENT REPAIR</p><span /><p>DENT REPAIR</p><span /><p>SPRAY PAINTING</p><span /><p>DETAILING</p><span /><p>PRIVATE & INSURANCE REPAIRS</p></section>

      <section className="quick-actions">
        <a href={whatsappUrl()} target="_blank" rel="noreferrer"><MessageCircle /><span><small>VEHICLE DAMAGED?</small><strong>WhatsApp the photos</strong></span><ArrowRight /></a>
        <Link href="/repair-process"><ShieldCheck /><span><small>WHAT HAPPENS NEXT?</small><strong>See the repair process</strong></span><ArrowRight /></Link>
        <a href={MAPS_URL} target="_blank" rel="noreferrer"><MapPin /><span><small>READY TO VISIT?</small><strong>Get workshop directions</strong></span><ArrowRight /></a>
      </section>

      <section className="home-services section-light">
        <div className="section-heading split-heading">
          <div><p className="section-kicker">COMPLETE AUTOBODY CARE</p><h2>The right repair starts with the damage.</h2></div>
          <div className="heading-side"><p>Bodywork, dents, refinishing and parts are assessed as one repair plan rather than a collection of disconnected jobs.</p><Link className="text-link dark-text-link" href="/services">Explore all services <ArrowRight /></Link></div>
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

      <section className="home-journey section-light">
        <div className="section-heading center-heading"><p className="section-kicker">FROM DAMAGE TO DECISION</p><h2>Know what happens before the keys change hands.</h2><p>Start with photographs and vehicle details, confirm the repair route, then bring the vehicle in for the workshop assessment.</p></div>
        <div className="three-step-grid">
          <article><span>01</span><Camera /><h3>Show the damage</h3><p>Upload or WhatsApp clear photographs together with the vehicle details.</p></article>
          <article><span>02</span><ShieldCheck /><h3>Confirm the route</h3><p>Private repair or insurance claim, the next step is made clear before work begins.</p></article>
          <article><span>03</span><Car /><h3>Workshop assessment</h3><p>The vehicle is inspected, the repair scope is confirmed and the work is planned.</p></article>
        </div>
        <div className="center-actions"><Button asChild className="orange-button content-button"><Link href="/repair-process">See the full repair process <ArrowRight /></Link></Button><a href={whatsappUrl()} target="_blank" rel="noreferrer"><MessageCircle /> WhatsApp instead</a></div>
      </section>

      <section className="home-work">
        <div className="home-work-heading"><p className="section-kicker orange-kicker">WORKSHOP PROOF</p><h2>Judge the finish, not the promise.</h2><p>Real Rolling Dents workshop photography shows preparation, paint-booth work and completed finishes.</p><Link className="text-link" href="/our-work">View the workshop gallery <ArrowRight /></Link></div>
        <div className="home-work-grid">
          <figure className="work-large"><Image src="/media/volkswagen-spray-booth.webp" alt="Volkswagen inside the Rolling Dents spray booth" width={1200} height={820} /><figcaption><span>IN THE BOOTH</span><strong>Controlled preparation and refinishing</strong></figcaption></figure>
          <figure><Image src="/media/black-gtr-finish.webp" alt="Black performance car with a deep finished shine" width={900} height={700} /><figcaption><span>FINAL FINISH</span><strong>Depth, clarity and clean reflections</strong></figcaption></figure>
          <figure><Image src="/media/toyota-finish.webp" alt="Toyota front bodywork after professional finishing" width={900} height={700} /><figcaption><span>BODY & FIT</span><strong>Panels, parts and presentation</strong></figcaption></figure>
        </div>
      </section>

      <CtaBanner title="Start with the damage." copy={`Request an assessment online or WhatsApp ${PHONE_DISPLAY} with your vehicle details and clear photographs.`} />
    </main>
  );
}
