import type { MetadataRoute } from "next";
import { services, SITE_URL } from "@/lib/rolling-dents";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/services", "/our-work", "/insurance-repairs", "/about", "/reviews", "/contact", "/estimate", "/service-areas"];
  return [...staticRoutes, ...services.map((service) => `/services/${service.slug}`)].map((path, index) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date("2026-08-31"),
    changeFrequency: index === 0 ? "weekly" : "monthly",
    priority: index === 0 ? 1 : path.startsWith("/services/") ? 0.8 : 0.7,
  }));
}
