import { ServiceDetail } from "@/components/rolling-dents/service-detail";
import { pageMetadata, services } from "@/lib/rolling-dents";
const service = services.find((item) => item.slug === "classic-restoration")!;
export const metadata = pageMetadata("Classic & Project Vehicle Restoration Johannesburg", "Bodywork and paint restoration for classic, collector and project vehicles in Johannesburg and Roodepoort.", "/services/classic-restoration", service.image);
export default function Page() { return <ServiceDetail service={service} />; }
