import { ServiceDetail } from "@/components/rolling-dents/service-detail";
import { pageMetadata, services } from "@/lib/rolling-dents";
const service = services.find((item) => item.slug === "spray-painting")!;
export const metadata = pageMetadata("Automotive Spray Painting Roodepoort", "Professional panel preparation, colour matching, spray painting and vehicle resprays in Laser Park, Roodepoort.", "/services/spray-painting", service.image);
export default function Page() { return <ServiceDetail service={service} />; }
