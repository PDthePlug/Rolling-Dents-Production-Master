import Link from "next/link";
import { Camera, Mail, MapPin, MessageCircle, Phone, ThumbsUp } from "lucide-react";
import {
  ADDRESS, EMAIL, FACEBOOK_URL, INSTAGRAM_URL, MAPS_URL, navigation,
  PHONE_DISPLAY, services, whatsappUrl,
} from "@/lib/rolling-dents";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-intro">
          <Link className="brand footer-logo" href="/">
            <span className="brand-mark">RD</span>
            <span className="brand-type"><strong>ROLLING DENTS</strong><small>PERFECTION IN EVERY PANEL</small></span>
          </Link>
          <p>Complete automotive body repair, paint, dent, parts, detailing and restoration services in Laser Park, Roodepoort.</p>
          <div className="social-links">
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" aria-label="Rolling Dents on Instagram"><Camera /></a>
            <a href={FACEBOOK_URL} target="_blank" rel="noreferrer" aria-label="Find Rolling Dents on Facebook"><ThumbsUp /></a>
          </div>
        </div>
        <div className="footer-column">
          <h2>Explore</h2>
          {navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          <Link href="/reviews">Reviews</Link>
          <Link href="/service-areas">Areas We Serve</Link>
        </div>
        <div className="footer-column">
          <h2>Services</h2>
          {services.map((service) => <Link key={service.slug} href={`/services/${service.slug}`}>{service.shortTitle}</Link>)}
        </div>
        <div className="footer-contact">
          <h2>Visit the workshop</h2>
          <a href={MAPS_URL} target="_blank" rel="noreferrer"><MapPin />{ADDRESS}</a>
          <a href="tel:+27117942454"><Phone />{PHONE_DISPLAY}</a>
          <a href={whatsappUrl()} target="_blank" rel="noreferrer"><MessageCircle />WhatsApp {PHONE_DISPLAY}</a>
          <a href={`mailto:${EMAIL}`}><Mail />{EMAIL}</a>
          <p>Monday–Friday · 07:30–17:00</p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Rolling Dents. All rights reserved.</span>
        <span>Laser Park · Roodepoort</span>
        <span>Monday–Friday · 07:30–17:00</span>
      </div>
    </footer>
  );
}
