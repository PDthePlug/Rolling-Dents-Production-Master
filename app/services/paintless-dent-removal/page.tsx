import { ServiceDetail } from "@/components/rolling-dents/service-detail";
import { pageMetadata, services } from "@/lib/rolling-dents";
const service = services.find((item) => item.slug === "paintless-dent-removal")!;
export const metadata = pageMetadata("Paintless Dent Removal Roodepoort", "Paintless dent removal assessment for suitable dents, dings and panels at Rolling Dents in Laser Park, Roodepoort.", "/services/paintless-dent-removal", service.image);
export default function Page() { return <ServiceDetail service={service} />; }
