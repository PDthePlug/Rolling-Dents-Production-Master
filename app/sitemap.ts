import type { MetadataRoute } from "next";
import { services, SITE_URL } from "@/lib/rolling-dents";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/services", "/our-work", "/repair-process", "/insurance-repairs", "/about", "/reviews", "/contact", "/estimate", "/service-areas", "/services/accident-repair"];
  return [...staticRoutes, ...services.map((service) => `/services/${service.slug}`)].map((path, index) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date("2026-09-03"),
    changeFrequency: index === 0 ? "weekly" : "monthly",
    priority: index === 0 ? 1 : path === "/estimate" ? 0.9 : path.startsWith("/services/") ? 0.8 : 0.7,
  }));
}
