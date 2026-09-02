import { ServiceDetail } from "@/components/rolling-dents/service-detail";
import { pageMetadata, services } from "@/lib/rolling-dents";
const service = services.find((item) => item.slug === "accident-repair")!;
export const metadata = pageMetadata("Accident & Autobody Repair Roodepoort", "RMI-approved accident and autobody repair for insurance and private vehicles in Laser Park, Roodepoort.", "/services/accident-repair", service.image);
export default function Page() { return <ServiceDetail service={service} />; }
