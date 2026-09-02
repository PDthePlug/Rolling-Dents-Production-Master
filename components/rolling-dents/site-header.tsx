"use client";

import Link from "next/link";
import { ChevronRight, Menu, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader,
  SheetTitle, SheetTrigger,
} from "@/components/ui/sheet";
import { PHONE_DISPLAY, whatsappUrl } from "@/lib/rolling-dents";

const navigation = [
  { label: "Services", href: "/services" },
  { label: "Repair Process", href: "/repair-process" },
  { label: "Our Work", href: "/our-work" },
  { label: "Insurance", href: "/insurance-repairs" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="topbar">
      <Link className="brand" href="/" aria-label="Rolling Dents home">
        <span className="brand-mark" aria-hidden="true">RD</span>
        <span className="brand-type">
          <strong>ROLLING DENTS</strong>
          <small>AUTOBODY · LASER PARK</small>
        </span>
      </Link>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
      </nav>

      <div className="desktop-actions">
        <a className="phone-link" href="tel:+27117942454"><Phone />{PHONE_DISPLAY}</a>
        <Button asChild className="orange-button header-cta">
          <Link href="/estimate">Start assessment</Link>
        </Button>
      </div>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="mobile-menu-button" aria-label="Open menu"><Menu /></Button>
        </SheetTrigger>
        <SheetContent className="mobile-sheet" side="right">
          <SheetHeader>
            <SheetTitle className="text-left text-2xl font-black tracking-tight">ROLLING DENTS</SheetTitle>
            <SheetDescription className="text-left">Complete automotive body repair in Laser Park.</SheetDescription>
          </SheetHeader>
          <nav className="mobile-nav" aria-label="Mobile navigation">
            <SheetClose asChild><Link href="/">Home <ChevronRight /></Link></SheetClose>
            {navigation.map((item) => <SheetClose asChild key={item.href}><Link href={item.href}>{item.label}<ChevronRight /></Link></SheetClose>)}
            <SheetClose asChild><Link href="/reviews">Reviews <ChevronRight /></Link></SheetClose>
            <SheetClose asChild><Link href="/service-areas">Areas We Serve <ChevronRight /></Link></SheetClose>
          </nav>
          <div className="mobile-sheet-actions">
            <Link className="mobile-primary" href="/estimate">Start an assessment</Link>
            <a className="mobile-secondary" href={whatsappUrl()} target="_blank" rel="noreferrer"><MessageCircle /> WhatsApp damage photos</a>
            <a className="mobile-secondary" href="tel:+27117942454"><Phone /> Call {PHONE_DISPLAY}</a>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}
