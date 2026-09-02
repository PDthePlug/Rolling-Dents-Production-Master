import { ArrowRight, Car, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBanner } from "@/components/rolling-dents/cta-banner";
import { MAPS_URL, pageMetadata, whatsappUrl } from "@/lib/rolling-dents";

export const metadata = pageMetadata("Panel Beaters Serving Johannesburg West & North", "Rolling Dents serves drivers from Roodepoort, Honeydew, Randburg, Northcliff, Fourways, Sandton, Krugersdorp, Midrand and surrounding areas.", "/service-areas", "/media/workshop-entrance.webp");

const groups = [
  { title: "Roodepoort & Johannesburg West", areas: ["Laser Park", "Honeydew", "Ruimsig", "Little Falls", "Wilgeheuwel", "Strubens Valley", "Weltevreden Park", "Constantia Kloof", "Florida", "Johannesburg West"] },
  { title: "Johannesburg North", areas: ["Northcliff", "Cresta", "Randpark Ridge", "Randburg", "Northgate", "Fourways", "Douglasdale", "Bryanston", "Sandton", "Rosebank"] },
  { title: "Northwest & outer areas", areas: ["Krugersdorp", "Muldersdrift", "Lanseria", "Midrand", "Kyalami", "Melville", "Auckland Park"] },
];

export default function ServiceAreasPage() {
  return (
    <main>
      <section className="areas-hero">
        <div><p className="eyebrow"><span />WORKSHOP-BASED REPAIRS · LASER PARK</p><h1>Panel beating for Johannesburg West and North.</h1><p>Rolling Dents serves drivers across Roodepoort and surrounding communities within practical driving distance of the Laser Park workshop.</p><div className="hero-actions"><Button asChild className="orange-button hero-button"><a href={whatsappUrl()} target="_blank" rel="noreferrer"><MessageCircle /> Ask about your area</a></Button><Button asChild variant="outline" className="dark-outline hero-button"><a href={MAPS_URL} target="_blank" rel="noreferrer"><MapPin /> Get directions</a></Button></div></div>
        <div><img src="/media/workshop-entrance.webp" alt="Rolling Dents workshop entrance in Laser Park, Roodepoort" /><span><MapPin /><strong>1510 ZEISS ROAD</strong>LASER PARK · ROODEPOORT</span></div>
      </section>
      <section className="area-groups section-light">
        <div className="section-heading split-heading"><div><p className="section-kicker">APPROXIMATELY 50 KM AROUND THE WORKSHOP</p><h2>One repair centre. A wide local reach.</h2></div><p>Rolling Dents is a workshop-based autobody repairer. Contact the team before travelling so the vehicle and damage can be assessed properly.</p></div>
        <div className="area-group-grid">{groups.map((group, index) => <article key={group.title}><div><span>{String(index + 1).padStart(2, "0")}</span><Car /></div><h2>{group.title}</h2><div>{group.areas.map((area) => <span key={area}>{area}</span>)}</div></article>)}</div>
      </section>
      <section className="local-seo-content">
        <div><p className="section-kicker orange-kicker">PANEL BEATERS IN LASER PARK</p><h2>Close to Honeydew, Northgate and Roodepoort.</h2><p>The workshop at 1510 Zeiss Road is positioned for drivers travelling from Johannesburg West, the northern suburbs and the Krugersdorp side of Gauteng.</p></div>
        <div><h3>Services available at the workshop</h3><a href="/services/accident-repair">Accident and autobody repair <ArrowRight /></a><a href="/services/dent-repair">Dent and panel repair <ArrowRight /></a><a href="/services/spray-painting">Automotive spray painting <ArrowRight /></a><a href="/services/paint-correction">Paint correction <ArrowRight /></a><a href="/services/vehicle-detailing">Professional detailing <ArrowRight /></a></div>
      </section>
      <section className="route-help section-light"><div><MapPin /><h2>Not sure how far you are?</h2><p>Open the workshop in Google Maps or WhatsApp your suburb to Rolling Dents before setting out.</p></div><div><a href={MAPS_URL} target="_blank" rel="noreferrer">Check the driving route <ArrowRight /></a><a href={whatsappUrl("Hi Rolling Dents, I am travelling from [your suburb]. I would like to arrange a vehicle assessment.")} target="_blank" rel="noreferrer">Ask on WhatsApp <ArrowRight /></a></div></section>
      <CtaBanner title="The right repair is worth the route." copy="Send damage photographs before travelling and the workshop will advise the next step." />
    </main>
  );
}
