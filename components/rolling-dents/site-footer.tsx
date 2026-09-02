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
          <a className="brand footer-logo" href="/">
            <span className="brand-mark">RD</span>
            <span className="brand-type"><strong>ROLLING DENTS</strong><small>PERFECTION IN EVERY PANEL</small></span>
          </a>
          <p>Complete automotive body repair, spray painting, dent repair, parts replacement and professional detailing in Laser Park, Roodepoort.</p>
          <div className="social-links">
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" aria-label="Rolling Dents on Instagram"><Camera /></a>
            <a href={FACEBOOK_URL} target="_blank" rel="noreferrer" aria-label="Rolling Dents on Facebook"><ThumbsUp /></a>
          </div>
        </div>
        <div className="footer-column"><h2>Explore</h2>{navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}<a href="/service-areas">Areas We Serve</a></div>
        <div className="footer-column"><h2>Services</h2>{services.slice(0, 6).map((service) => <a key={service.slug} href={`/services/${service.slug}`}>{service.shortTitle}</a>)}</div>
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
        <span>RMI approved · Laser Park, Roodepoort</span>
        <span>Website by <strong>PDCONNECT</strong></span>
      </div>
    </footer>
  );
}
