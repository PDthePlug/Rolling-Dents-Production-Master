"use client";

import { ChevronRight, Menu, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader,
  SheetTitle, SheetTrigger,
} from "@/components/ui/sheet";
import { navigation, PHONE_DISPLAY, whatsappUrl } from "@/lib/rolling-dents";

export function SiteHeader() {
  return (
    <header className="topbar">
      <a className="brand" href="/" aria-label="Rolling Dents home">
        <span className="brand-mark" aria-hidden="true">RD</span>
        <span className="brand-type">
          <strong>ROLLING DENTS</strong>
          <small>AUTOBODY · LASER PARK</small>
        </span>
      </a>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
      </nav>

      <div className="desktop-actions">
        <a className="phone-link" href="tel:+27117942454"><Phone />{PHONE_DISPLAY}</a>
        <Button asChild className="orange-button header-cta">
          <a href={whatsappUrl()} target="_blank" rel="noreferrer"><MessageCircle /> WhatsApp us</a>
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
            <SheetClose asChild><a href="/">Home <ChevronRight /></a></SheetClose>
            {navigation.map((item) => <SheetClose asChild key={item.href}><a href={item.href}>{item.label}<ChevronRight /></a></SheetClose>)}
            <SheetClose asChild><a href="/service-areas">Areas We Serve <ChevronRight /></a></SheetClose>
          </nav>
          <div className="mobile-sheet-actions">
            <a className="mobile-primary" href={whatsappUrl()} target="_blank" rel="noreferrer"><MessageCircle /> WhatsApp damage photos</a>
            <a className="mobile-secondary" href="tel:+27117942454"><Phone /> Call {PHONE_DISPLAY}</a>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}
