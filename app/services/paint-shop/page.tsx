import { ServiceDetail } from "@/components/rolling-dents/service-detail";
import { pageMetadata, services } from "@/lib/rolling-dents";
const service = services.find((item) => item.slug === "paint-shop")!;
export const metadata = pageMetadata("Automotive Paint Shop Roodepoort", "Professional automotive paint preparation, colour matching and panel refinishing at Rolling Dents in Laser Park, Roodepoort.", "/services/paint-shop", service.image);
export default function Page() { return <ServiceDetail service={service} />; }
