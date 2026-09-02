import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBanner } from "@/components/rolling-dents/cta-banner";
import { PageHero } from "@/components/rolling-dents/page-hero";
import { pageMetadata, services, whatsappUrl } from "@/lib/rolling-dents";

export const metadata = pageMetadata("Autobody Repair Services Roodepoort", "Complete automotive body repair services in Laser Park: accident repair, dent repair, spray painting, parts replacement, detailing and restoration.", "/services", "/media/volkswagen-spray-booth.webp");

export default function ServicesPage() {
  return (
    <main>
      <PageHero eyebrow="COMPLETE AUTOBODY CARE" title="Every repair has a right first step." description="Bodywork, dents, paint, parts and finishing—assessed around the damage your vehicle actually has." image="/media/volkswagen-spray-booth.webp" imageAlt="Vehicle receiving controlled refinishing inside the Rolling Dents spray booth" />
      <section className="services-hub section-light">
        <div className="section-heading split-heading"><div><p className="section-kicker">CHOOSE THE DAMAGE, NOT THE JARGON</p><h2>What does your vehicle need?</h2></div><p>Open the service that best describes the problem. If you are unsure, send photographs and Rolling Dents will guide you.</p></div>
        <div className="services-hub-grid">{services.map((service, index) => <a href={`/services/${service.slug}`} key={service.slug}><div className="service-hub-image"><img src={service.image} alt={service.imageAlt} /><span>{String(index + 1).padStart(2, "0")}</span></div><div><small>{service.kicker}</small><h2>{service.title}</h2><p>{service.summary}</p><em>Explore service <ArrowRight /></em></div></a>)}</div>
      </section>
      <section className="service-decision">
        <div><p className="section-kicker orange-kicker">NOT SURE WHERE TO START?</p><h2>One photo can start the conversation.</h2><p>Send the full vehicle, a straight view of the damaged panel and close-up detail from two angles.</p></div>
        <div className="service-decision-card"><MessageCircle /><h3>WhatsApp a quick assessment</h3><p>Include the vehicle make, model, year and whether the repair is private or insurance-related.</p><Button asChild className="orange-button content-button"><a href={whatsappUrl()} target="_blank" rel="noreferrer">Message Rolling Dents <ArrowRight /></a></Button></div>
      </section>
      <CtaBanner />
    </main>
  );
}
