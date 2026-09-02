import { ServiceDetail } from "@/components/rolling-dents/service-detail";
import { pageMetadata, services } from "@/lib/rolling-dents";
const service = services.find((item) => item.slug === "parts-replacement")!;
export const metadata = pageMetadata("Vehicle Body Parts Replacement Roodepoort", "Assessment, replacement, fitment and refinishing of damaged exterior vehicle body components in Roodepoort.", "/services/parts-replacement", service.image);
export default function Page() { return <ServiceDetail service={service} />; }
