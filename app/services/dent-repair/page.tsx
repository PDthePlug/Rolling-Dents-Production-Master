import { ServiceDetail } from "@/components/rolling-dents/service-detail";
import { pageMetadata, services } from "@/lib/rolling-dents";
const service = services.find((item) => item.slug === "dent-repair")!;
export const metadata = pageMetadata("Dent & Panel Repair Roodepoort", "Dent, crease and panel repair in Laser Park, with paintless methods used where the damage allows.", "/services/dent-repair", service.image);
export default function Page() { return <ServiceDetail service={service} />; }
