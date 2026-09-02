import { ServiceDetail } from "@/components/rolling-dents/service-detail";
import { pageMetadata, services } from "@/lib/rolling-dents";
const service = services.find((item) => item.slug === "paint-correction")!;
export const metadata = pageMetadata("Paint Correction Roodepoort", "Paint correction and finish restoration for dull, marked and imperfect vehicle paint in Roodepoort.", "/services/paint-correction", service.image);
export default function Page() { return <ServiceDetail service={service} />; }
