import { ArrowLeft, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappUrl } from "@/lib/rolling-dents";

export default function NotFound() {
  return <main className="not-found"><p className="section-kicker orange-kicker">404 · WRONG TURN</p><h1>This road does not lead to the workshop.</h1><p>Return to Rolling Dents or ask the team about your vehicle on WhatsApp.</p><div><Button asChild className="orange-button content-button"><a href="/"><ArrowLeft /> Back home</a></Button><a href={whatsappUrl()} target="_blank" rel="noreferrer"><MessageCircle /> WhatsApp Rolling Dents</a></div></main>;
}
