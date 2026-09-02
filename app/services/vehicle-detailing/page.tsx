import { ServiceDetail } from "@/components/rolling-dents/service-detail";
import { pageMetadata, services } from "@/lib/rolling-dents";
const service = services.find((item) => item.slug === "vehicle-detailing")!;
export const metadata = pageMetadata("Professional Vehicle Detailing Roodepoort", "Professional vehicle detailing and post-repair finishing in Laser Park, Roodepoort.", "/services/vehicle-detailing", service.image);
export default function Page() { return <ServiceDetail service={service} />; }
