import { ServiceDetail } from "@/components/rolling-dents/service-detail";
import { pageMetadata, services } from "@/lib/rolling-dents";
const service = services.find((item) => item.slug === "full-vehicle-resprays")!;
export const metadata = pageMetadata("Full Vehicle Resprays Roodepoort", "Full vehicle respray assessment, preparation and professional refinishing at Rolling Dents in Laser Park, Roodepoort.", "/services/full-vehicle-resprays", service.image);
export default function Page() { return <ServiceDetail service={service} />; }
