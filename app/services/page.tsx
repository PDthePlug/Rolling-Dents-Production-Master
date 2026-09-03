import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBanner } from "@/components/rolling-dents/cta-banner";
import { PageHero } from "@/components/rolling-dents/page-hero";
import { pageMetadata, services, whatsappUrl } from "@/lib/rolling-dents";

export const metadata = pageMetadata("Autobody Services Roodepoort | Rolling Dents", "Rolling Dents services in Laser Park: paint shop, full vehicle resprays, paintless dent removal, parts replacement, paint correction, detailing and classic vehicle restorations.", "/services", "/media/volkswagen-spray-booth.webp");

export default function ServicesPage() {
  return (
    <main>
      <PageHero eyebrow="ROLLING DENTS SERVICES" title="Every repair has a right first step." description="Paint, resprays, dents, parts, correction, detailing and restoration—each scoped around the condition of your vehicle." image="/media/volkswagen-spray-booth.webp" imageAlt="Vehicle receiving controlled refinishing inside the Rolling Dents spray booth" />
      <section className="services-hub section-light">
        <div className="section-heading split-heading"><div><p className="section-kicker">THE PUBLISHED SERVICE CATALOGUE</p><h2>What does your vehicle need?</h2></div><p>Choose the service that best fits the job. If you are unsure, start an assessment and let the damage lead the next step.</p></div>
        <div className="services-hub-grid">{services.map((service, index) => <Link href={`/services/${service.slug}`} key={service.slug}><div className="service-hub-image"><Image src={service.image} alt={service.imageAlt} width={900} height={650} sizes="(max-width: 760px) 100vw, 50vw" /><span>{String(index + 1).padStart(2, "0")}</span></div><div><small>{service.kicker}</small><h2>{service.title}</h2><p>{service.summary}</p><em>Explore service <ArrowRight /></em></div></Link>)}</div>
      </section>
      <section className="service-decision">
        <div><p className="section-kicker orange-kicker">ACCIDENT OR MIXED DAMAGE?</p><h2>Start with the whole vehicle, not a service label.</h2><p>Collision damage can involve several services at once. The assessment journey helps the workshop see the vehicle, identify the route and confirm what needs inspection.</p><Button asChild variant="outline" className="dark-outline content-button"><Link href="/services/accident-repair">See accident & autobody repair <ArrowRight /></Link></Button></div>
        <div className="service-decision-card"><MessageCircle /><h3>Start with photographs</h3><p>Include the vehicle make, model, year, visible damage and whether the repair is private or insurance-related.</p><Button asChild className="orange-button content-button"><Link href="/estimate">Start online assessment <ArrowRight /></Link></Button><a href={whatsappUrl()} target="_blank" rel="noreferrer">WhatsApp instead</a></div>
      </section>
      <CtaBanner />
    </main>
  );
}
