import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PHONE_DISPLAY, whatsappUrl } from "@/lib/rolling-dents";

export function CtaBanner({ title = "Show us the damage.", copy = "Send clear photographs on WhatsApp or start a guided vehicle assessment online." }: { title?: string; copy?: string }) {
  return (
    <section className="cta-banner">
      <div><p className="section-kicker orange-kicker">READY WHEN YOU ARE</p><h2>{title}</h2><p>{copy}</p></div>
      <div className="cta-banner-actions">
        <Button asChild className="orange-button cta-button"><a href={whatsappUrl()} target="_blank" rel="noreferrer"><MessageCircle /> WhatsApp damage photos</a></Button>
        <a className="cta-phone" href="tel:+27117942454"><Phone /> Call {PHONE_DISPLAY}</a>
      </div>
    </section>
  );
}
