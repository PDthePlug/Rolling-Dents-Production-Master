import type { Metadata, Viewport } from "next";
import "./globals.css";
import { MobileActions } from "@/components/rolling-dents/mobile-actions";
import { SiteFooter } from "@/components/rolling-dents/site-footer";
import { SiteHeader } from "@/components/rolling-dents/site-header";
import {
  ADDRESS, EMAIL, FACEBOOK_URL, INSTAGRAM_URL, services,
  SITE_URL, serviceAreas,
} from "@/lib/rolling-dents";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Rolling Dents | Panel Beaters & Autobody Repair Roodepoort", template: "%s | Rolling Dents" },
  description: "RMI-approved panel beaters in Laser Park, Roodepoort. Accident repair, dent repair, spray painting, parts replacement, paint correction and detailing.",
  applicationName: "Rolling Dents",
  authors: [{ name: "Rolling Dents" }],
  creator: "Rolling Dents",
  publisher: "Rolling Dents",
  category: "Automotive body repair",
  keywords: ["panel beaters Roodepoort", "autobody repair Roodepoort", "dent repair Laser Park", "spray painting Roodepoort", "accident repair Johannesburg West", "car respray Honeydew"],
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: "Rolling Dents — Dents. Damage. Gone.",
    description: "Complete automotive body repair in Laser Park, Roodepoort.",
    type: "website",
    url: SITE_URL,
    siteName: "Rolling Dents",
    locale: "en_ZA",
    images: [{ url: "/og.png", width: 1731, height: 909, alt: "Rolling Dents — Dents. Damage. Gone." }],
  },
  twitter: { card: "summary_large_image", title: "Rolling Dents — Dents. Damage. Gone.", description: "Complete automotive body repair in Laser Park, Roodepoort.", images: ["/og.png"] },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export const viewport: Viewport = { themeColor: "#0d0e0e", colorScheme: "dark light" };

const localBusiness = {
  "@context": "https://schema.org",
  "@type": ["AutoBodyShop", "LocalBusiness"],
  "@id": `${SITE_URL}/#business`,
  name: "Rolling Dents",
  description: "RMI-approved complete automotive body repair specialist in Laser Park, Roodepoort.",
  url: SITE_URL,
  telephone: "+27 11 794 2454",
  email: EMAIL,
  image: [`${SITE_URL}/og.png`, `${SITE_URL}/media/volkswagen-spray-booth.webp`, `${SITE_URL}/media/black-gtr-finish.webp`],
  priceRange: "$$",
  address: { "@type": "PostalAddress", streetAddress: "1510 Zeiss Road, Unit 1, Block 2, Laser Park", addressLocality: "Roodepoort", addressRegion: "Gauteng", addressCountry: "ZA" },
  openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "07:30", closes: "17:00" }],
  areaServed: serviceAreas.map((name) => ({ "@type": "Place", name })),
  sameAs: [INSTAGRAM_URL, FACEBOOK_URL],
  hasOfferCatalog: { "@type": "OfferCatalog", name: "Automotive body repair services", itemListElement: services.map((service) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: service.title, url: `${SITE_URL}/services/${service.slug}` } })) },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-ZA">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness).replace(/</g, "\\u003c") }} />
        <SiteHeader />
        {children}
        <SiteFooter />
        <MobileActions />
      </body>
    </html>
  );
}
