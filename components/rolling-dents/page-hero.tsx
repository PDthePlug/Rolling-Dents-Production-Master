import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappUrl } from "@/lib/rolling-dents";

type PageHeroProps = { eyebrow: string; title: string; description: string; image: string; imageAlt: string; compact?: boolean };

export function PageHero({ eyebrow, title, description, image, imageAlt, compact = false }: PageHeroProps) {
  return (
    <section className={`page-hero${compact ? " page-hero-compact" : ""}`}>
      <div className="page-hero-copy">
        <p className="eyebrow"><span />{eyebrow}</p>
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="hero-actions">
          <Button asChild className="orange-button hero-button"><Link href="/estimate">Start an assessment <ArrowRight /></Link></Button>
          <Button asChild variant="outline" className="dark-outline hero-button"><a href={whatsappUrl()} target="_blank" rel="noreferrer"><MessageCircle /> WhatsApp us</a></Button>
        </div>
      </div>
      <div className="page-hero-image"><Image src={image} alt={imageAlt} fill sizes="(max-width: 900px) 100vw, 50vw" style={{ objectFit: "cover" }} /><span /></div>
    </section>
  );
}
