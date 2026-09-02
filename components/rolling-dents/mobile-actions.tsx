import { Camera, MapPin, MessageCircle, Phone } from "lucide-react";
import { MAPS_URL, whatsappUrl } from "@/lib/rolling-dents";

export function MobileActions() {
  return (
    <div className="mobile-action-bar" aria-label="Quick contact actions">
      <a href="tel:+27117942454"><Phone /><span>Call</span></a>
      <a className="mobile-estimate" href={whatsappUrl()} target="_blank" rel="noreferrer"><MessageCircle /><span>WhatsApp</span></a>
      <a href="/estimate"><Camera /><span>Assessment</span></a>
      <a href={MAPS_URL} target="_blank" rel="noreferrer"><MapPin /><span>Directions</span></a>
    </div>
  );
}
