import { ServiceDetail } from "@/components/rolling-dents/service-detail";
import { accidentRepairService, pageMetadata } from "@/lib/rolling-dents";

export const metadata = pageMetadata("Accident & Autobody Repair Roodepoort", "Start with the whole damage picture after an accident. Rolling Dents can assess the vehicle, repair route, parts and refinishing requirements in Laser Park.", "/services/accident-repair", accidentRepairService.image);

export default function Page() { return <ServiceDetail service={accidentRepairService} />; }
