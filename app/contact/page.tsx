import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Camera, Clock3, ExternalLink, Mail, MapPin, MessageCircle, Phone, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ADDRESS, EMAIL, FACEBOOK_URL, INSTAGRAM_URL, MAPS_URL, pageMetadata, PHONE_DISPLAY, whatsappUrl } from "@/lib/rolling-dents";

export const metadata = pageMetadata("Contact Rolling Dents | Laser Park Roodepoort", "Call, WhatsApp, email or get directions to Rolling Dents at 1510 Zeiss Road, Laser Park, Roodepoort.", "/contact", "/media/workshop-entrance.webp");

export default function ContactPage() {
  return (
    <main>
      <section className="contact-hero">
        <div><p className="eyebrow"><span />CONTACT ROLLING DENTS</p><h1>Bring the damage.<br /><em>Leave with the finish.</em></h1><p>Call, WhatsApp or visit the workshop at 1510 Zeiss Road in Laser Park.</p><div className="hero-actions"><Button asChild className="orange-button hero-button"><Link href="/estimate">Start assessment <ArrowRight /></Link></Button><Button asChild variant="outline" className="dark-outline hero-button"><a href={whatsappUrl()} target="_blank" rel="noreferrer"><MessageCircle /> WhatsApp us</a></Button></div></div>
        <div><Image src="/media/workshop-entrance.webp" alt="Rolling Dents workshop entrance at 1510 Zeiss Road" width={1200} height={900} priority sizes="(max-width: 900px) 100vw, 50vw" /></div>
      </section>
      <section className="contact-options section-light">
        <a href={whatsappUrl()} target="_blank" rel="noreferrer"><span><MessageCircle /></span><small>WHATSAPP</small><h2>{PHONE_DISPLAY}</h2><p>Send vehicle details and damage photographs.</p><ArrowRight /></a>
        <a href="tel:+27117942454"><span><Phone /></span><small>CALL THE WORKSHOP</small><h2>{PHONE_DISPLAY}</h2><p>Speak directly to Rolling Dents.</p><ArrowRight /></a>
        <a href={`mailto:${EMAIL}`}><span><Mail /></span><small>EMAIL</small><h2>{EMAIL}</h2><p>Share claim documents or repair information.</p><ArrowRight /></a>
        <a href={MAPS_URL} target="_blank" rel="noreferrer"><span><MapPin /></span><small>DIRECTIONS</small><h2>1510 Zeiss Road</h2><p>Unit 1, Block 2, Laser Park, Roodepoort.</p><ExternalLink /></a>
      </section>
      <section id="existing-repair" className="service-decision">
        <div><p className="section-kicker orange-kicker">VEHICLE ALREADY WITH ROLLING DENTS?</p><h2>Use the direct workshop channels for the current update.</h2><p>The Production Master is adding a customer repair-status journey. Until that operational status system is connected to workshop updates, existing customers should contact the workshop directly rather than being shown a status that cannot be guaranteed current.</p></div>
        <div className="service-decision-card"><MessageCircle /><h3>Ask about an existing repair</h3><p>Include your name, registration and any assessment or claim reference you have.</p><Button asChild className="orange-button content-button"><a href={whatsappUrl("Hi Rolling Dents, my vehicle is already with the workshop. I would like an update on the repair.")} target="_blank" rel="noreferrer">WhatsApp the workshop <ArrowRight /></a></Button></div>
      </section>
      <section className="visit-detail">
        <div className="visit-photo"><Image src="/media/zeiss-road-sign.webp" alt="1510 Zeiss Road entrance sign for Rolling Dents Unit 1" width={1200} height={900} sizes="(max-width: 900px) 100vw, 50vw" /></div>
        <div className="visit-copy"><p className="section-kicker orange-kicker">VISIT THE WORKSHOP</p><h2>{ADDRESS}</h2><div className="visit-info"><span><Clock3 /><strong>Monday–Friday</strong>07:30–17:00</span><span><MapPin /><strong>Unit 1, Block 2</strong>Look for the Rolling Dents sign at the entrance.</span></div><Button asChild className="orange-button content-button"><a href={MAPS_URL} target="_blank" rel="noreferrer">Open Google Maps <ExternalLink /></a></Button></div>
      </section>
      <section className="contact-social section-light"><div><p className="section-kicker">FOLLOW THE WORK</p><h2>See more from Rolling Dents.</h2></div><div><a href={INSTAGRAM_URL} target="_blank" rel="noreferrer"><Camera />@rollingdents <ExternalLink /></a><a href={FACEBOOK_URL} target="_blank" rel="noreferrer"><ThumbsUp />Find Rolling Dents on Facebook <ExternalLink /></a></div></section>
      <section className="contact-area section-light"><div><p className="section-kicker">COMING FROM OUTSIDE ROODEPOORT?</p><h2>Plan your route to Laser Park.</h2><p>The workshop serves drivers across Johannesburg West and North, including Honeydew, Ruimsig, Randburg, Northcliff, Fourways, Sandton, Krugersdorp and nearby areas.</p><Link className="text-link dark-text-link" href="/service-areas">See areas we serve <ArrowRight /></Link></div><div className="contact-area-art"><MapPin /><span>LASER PARK</span><strong>ROODEPOORT</strong></div></section>
    </main>
  );
}
