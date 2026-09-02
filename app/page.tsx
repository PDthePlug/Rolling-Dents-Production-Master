import { ArrowRight, BadgeCheck, Camera, Car, Check, MapPin, MessageCircle, Phone, ShieldCheck, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBanner } from "@/components/rolling-dents/cta-banner";
import { GOOGLE_URL, MAPS_URL, PHONE_DISPLAY, services, whatsappUrl } from "@/lib/rolling-dents";

export default function Home() {
  return (
    <main>
      <section className="home-hero">
        <div className="home-hero-copy">
          <p className="eyebrow"><span />RMI-approved autobody repair · Laser Park</p>
          <h1>DENTS.<br />DAMAGE.<br /><em>GONE.</em></h1>
          <p className="hero-lead">Complete body repair, precision paintwork and vehicle restoration in Roodepoort.</p>
          <div className="hero-actions">
            <Button asChild className="orange-button hero-button"><a href="/estimate">Start my assessment <ArrowRight /></a></Button>
            <Button asChild variant="outline" className="dark-outline hero-button"><a href={whatsappUrl()} target="_blank" rel="noreferrer"><MessageCircle /> WhatsApp photos</a></Button>
          </div>
          <div className="hero-trust">
            <div><BadgeCheck /><span><strong>RMI approved</strong>Body repair specialist</span></div>
            <div><Star /><span><strong>4.5 / 5</strong>Google rating</span></div>
            <div><MapPin /><span><strong>Laser Park</strong>Roodepoort</span></div>
          </div>
        </div>
        <div className="home-hero-visual">
          <img src="/og.png" alt="Premium Mercedes-Benz in a professional automotive paint booth" />
          <div className="hero-image-shade" />
          <a className="hero-project-card" href={whatsappUrl("Hi Rolling Dents, I would like to send photographs for a repair assessment.")} target="_blank" rel="noreferrer"><span className="pulse-dot" /><span><small>QUICK ASSESSMENT</small><strong>Send damage photos on WhatsApp</strong></span><ArrowRight /></a>
        </div>
      </section>

      <section className="signal-strip"><p>ACCIDENT REPAIR</p><span /><p>DENT REPAIR</p><span /><p>SPRAY PAINTING</p><span /><p>DETAILING</p><span /><p>PRIVATE & INSURANCE REPAIRS</p></section>

      <section className="quick-actions">
        <a href={whatsappUrl()} target="_blank" rel="noreferrer"><MessageCircle /><span><small>VEHICLE DAMAGED?</small><strong>WhatsApp the photos</strong></span><ArrowRight /></a>
        <a href="/insurance-repairs"><ShieldCheck /><span><small>INSURANCE CLAIM?</small><strong>See the repair journey</strong></span><ArrowRight /></a>
        <a href={MAPS_URL} target="_blank" rel="noreferrer"><MapPin /><span><small>READY TO VISIT?</small><strong>Get workshop directions</strong></span><ArrowRight /></a>
      </section>

      <section className="home-services section-light">
        <div className="section-heading split-heading">
          <div><p className="section-kicker">COMPLETE AUTOBODY CARE</p><h2>From impact to immaculate.</h2></div>
          <div className="heading-side"><p>One workshop for bodywork, dent repair, paint, parts and finishing.</p><a className="text-link dark-text-link" href="/services">Explore all services <ArrowRight /></a></div>
        </div>
        <div className="home-service-grid">
          {services.slice(0, 4).map((service, index) => <a href={`/services/${service.slug}`} key={service.slug}><span className="service-number">{String(index + 1).padStart(2, "0")}</span><img src={service.image} alt={service.imageAlt} /><div><small>{service.kicker}</small><h3>{service.title}</h3><p>{service.summary}</p><em>View service <ArrowRight /></em></div></a>)}
        </div>
      </section>

      <section className="home-work">
        <div className="home-work-heading"><p className="section-kicker orange-kicker">FOCUS ON THE FINISH</p><h2>Work you can judge with your own eyes.</h2><p>From spray-booth preparation to the final reflection, every stage leads to one thing: a finish that belongs on the car.</p><a className="text-link" href="/our-work">View the workshop gallery <ArrowRight /></a></div>
        <div className="home-work-grid">
          <figure className="work-large"><img src="/media/volkswagen-spray-booth.webp" alt="Volkswagen inside the Rolling Dents spray booth" /><figcaption><span>IN THE BOOTH</span><strong>Controlled preparation and refinishing</strong></figcaption></figure>
          <figure><img src="/media/black-gtr-finish.webp" alt="Black performance car with a deep finished shine" /><figcaption><span>FINAL FINISH</span><strong>Depth, clarity and clean reflections</strong></figcaption></figure>
          <figure><img src="/media/toyota-finish.webp" alt="Toyota front bodywork after professional finishing" /><figcaption><span>BODY & FIT</span><strong>Panels, parts and presentation</strong></figcaption></figure>
        </div>
      </section>

      <section className="home-journey section-light">
        <div className="section-heading center-heading"><p className="section-kicker">YOUR NEXT THREE MOVES</p><h2>Damaged today. Assessed next.</h2><p>Start from your phone, then bring the vehicle in when the workshop is ready to inspect it.</p></div>
        <div className="three-step-grid">
          <article><span>01</span><Camera /><h3>Show us the damage</h3><p>Send clear photographs, vehicle details and a short description.</p></article>
          <article><span>02</span><ShieldCheck /><h3>Confirm the repair route</h3><p>Insurance or private repair, Rolling Dents will guide the assessment.</p></article>
          <article><span>03</span><Car /><h3>Bring in the vehicle</h3><p>The workshop inspects, plans and confirms the next repair step.</p></article>
        </div>
        <div className="center-actions"><Button asChild className="orange-button content-button"><a href="/estimate">Start my assessment <ArrowRight /></a></Button><a href={whatsappUrl()} target="_blank" rel="noreferrer"><MessageCircle /> WhatsApp instead</a></div>
      </section>

      <section className="home-trust">
        <div className="trust-rating"><p className="section-kicker orange-kicker">CUSTOMER CONFIDENCE</p><div>4.5</div><span>{[0,1,2,3,4].map((item) => <Star key={item} />)}</span><strong>Google rating</strong><a href={GOOGLE_URL} target="_blank" rel="noreferrer">Read live Google reviews <ArrowRight /></a></div>
        <div className="trust-copy"><BadgeCheck /><p className="section-kicker">RMI APPROVED</p><h2>Your car deserves a repairer with a standard to protect.</h2><div className="check-list light-check-list"><span><Check />Complete automotive body repair</span><span><Check />Insurance and private repairs</span><span><Check />Professional spray-booth refinishing</span><span><Check />Final quality and presentation check</span></div><a className="text-link" href="/about">Meet Rolling Dents <ArrowRight /></a></div>
      </section>

      <section className="area-teaser section-light">
        <div><p className="section-kicker">ROODEPOORT · JOHANNESBURG WEST & NORTH</p><h2>Worth the drive for the right finish.</h2><p>Rolling Dents serves drivers from Laser Park, Honeydew, Ruimsig, Randburg, Northcliff, Fourways, Sandton, Krugersdorp and surrounding areas.</p><div className="area-pills">{["Roodepoort", "Honeydew", "Randburg", "Northcliff", "Fourways", "Sandton", "Krugersdorp", "Midrand"].map((area) => <span key={area}>{area}</span>)}</div><a className="text-link dark-text-link" href="/service-areas">See areas we serve <ArrowRight /></a></div>
        <div className="area-image"><img src="/media/workshop-entrance.webp" alt="Entrance to the Rolling Dents workshop at 1510 Zeiss Road" /><span><MapPin /><strong>1510 Zeiss Road</strong>Laser Park, Roodepoort</span></div>
      </section>

      <CtaBanner title="Perfection in every panel." copy={`WhatsApp ${PHONE_DISPLAY} with your vehicle details and clear photographs of the damage.`} />
    </main>
  );
}
