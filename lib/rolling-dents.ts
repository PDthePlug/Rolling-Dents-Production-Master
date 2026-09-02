import type { Metadata } from "next";

export const SITE_URL = "https://rolling-dents-proposal.pdmpofu.chatgpt.site";
export const WHATSAPP_NUMBER = "27117942454";
export const PHONE_DISPLAY = "011 794 2454";
export const EMAIL = "admin@rollingdents.co.za";
export const ADDRESS = "1510 Zeiss Road, Unit 1, Block 2, Laser Park, Roodepoort";
export const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Rolling+Dents+1510+Zeiss+Road+Laser+Park+Roodepoort";
export const GOOGLE_URL = "https://www.google.com/search?q=Rolling+Dents+1510+Zeiss+Road+Roodepoort+reviews";
export const INSTAGRAM_URL = "https://www.instagram.com/rollingdents/";
export const FACEBOOK_URL = "https://www.facebook.com/rollingdents1/";

export function whatsappUrl(message = "Hi Rolling Dents, I would like a vehicle repair assessment.") {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function pageMetadata(
  title: string,
  description: string,
  path: string,
  image = "/og.png",
): Metadata {
  const canonical = `${SITE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      type: "website",
      url: canonical,
      siteName: "Rolling Dents",
      locale: "en_ZA",
      images: [{ url: image, alt: title }],
    },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

export type Service = {
  slug: string;
  shortTitle: string;
  title: string;
  kicker: string;
  summary: string;
  description: string;
  image: string;
  imageAlt: string;
  idealFor: string[];
  process: { title: string; copy: string }[];
  faqs: { question: string; answer: string }[];
};

export const services: Service[] = [
  {
    slug: "accident-repair",
    shortTitle: "Accident Repair",
    title: "Accident & Autobody Repair",
    kicker: "COLLISION REPAIR",
    summary: "Complete body repair for accident damage, from assessment and panel work to paint and final inspection.",
    description: "Accident damage can affect more than the panel you can see. Rolling Dents assesses the visible damage, identifies the repair requirements and restores the bodywork through a controlled repair and refinishing process.",
    image: "/media/mercedes-paint-booth.webp",
    imageAlt: "Mercedes-Benz receiving professional refinishing inside the Rolling Dents paint booth",
    idealFor: ["Bumper, fender and door damage", "Collision and impact damage", "Insurance and private repairs", "Multiple damaged body panels"],
    process: [
      { title: "Damage assessment", copy: "We inspect the affected panels and establish the repair scope." },
      { title: "Repair planning", copy: "Bodywork, parts and paint requirements are prepared before work begins." },
      { title: "Body & paint", copy: "Panels are repaired or replaced, prepared and refinished." },
      { title: "Final inspection", copy: "Fit, finish and presentation are checked before collection." },
    ],
    faqs: [
      { question: "Do you handle private and insurance repairs?", answer: "Yes. Rolling Dents handles both private repairs and insurance-related accident repairs. Send the damage details first and the workshop will guide the next step." },
      { question: "Can I send photographs before visiting?", answer: "Yes. WhatsApp clear photographs of the damaged area together with your vehicle make, model and registration details." },
      { question: "Will I receive a quotation from photographs alone?", answer: "Photographs help the workshop understand the damage, but a physical assessment may still be required before a final repair quotation can be confirmed." },
    ],
  },
  {
    slug: "dent-repair",
    shortTitle: "Dent Repair",
    title: "Dent & Panel Repair",
    kicker: "DENTS, CREASES & PANELS",
    summary: "Targeted repair for dents, creases and panel damage, with paintless methods used where the damage allows.",
    description: "Every dent is different. Its position, depth, paint condition and access behind the panel determine the right repair method. Rolling Dents assesses the panel first, then recommends paintless dent removal or conventional repair and refinishing.",
    image: "/media/black-gtr-finish.webp",
    imageAlt: "Finished black performance vehicle after professional bodywork at Rolling Dents",
    idealFor: ["Parking dents and door dings", "Minor panel creases", "Hail-related dents", "Dents with or without paint damage"],
    process: [
      { title: "Panel inspection", copy: "The dent, paint and access behind the panel are checked." },
      { title: "Method selection", copy: "We choose paintless removal or conventional panel repair." },
      { title: "Shape restoration", copy: "The panel is carefully returned to its intended form." },
      { title: "Finish check", copy: "Reflections, alignment and paint condition are inspected." },
    ],
    faqs: [
      { question: "Can every dent be repaired without painting?", answer: "No. Paintless dent removal is suitable only when the paint is intact and the dent can be accessed and reshaped safely." },
      { question: "How do I know which repair I need?", answer: "Send photographs from a few angles. Rolling Dents will advise whether the vehicle should come in for a closer assessment." },
      { question: "Do you repair dents on all vehicle makes?", answer: "Rolling Dents works on a wide range of passenger and performance vehicles. The repair decision is based on the panel and damage, not only the vehicle badge." },
    ],
  },
  {
    slug: "spray-painting",
    shortTitle: "Spray Painting",
    title: "Automotive Spray Painting",
    kicker: "COLOUR. COVERAGE. FINISH.",
    summary: "Professional preparation, colour matching and refinishing for repaired panels or full respray projects.",
    description: "Good paintwork begins long before colour is applied. Rolling Dents prepares each surface, controls the refinishing environment and checks the final result for coverage, colour consistency and finish.",
    image: "/media/volkswagen-spray-booth.webp",
    imageAlt: "Volkswagen prepared for refinishing inside the Rolling Dents spray booth",
    idealFor: ["Repaired body panels", "Scratched or damaged paint", "Faded and uneven finishes", "Panel or full-vehicle resprays"],
    process: [
      { title: "Surface preparation", copy: "The panel is repaired, cleaned, levelled and prepared for coating." },
      { title: "Colour matching", copy: "The finish is matched to the vehicle and repair area." },
      { title: "Controlled application", copy: "Paint and clear coat are applied in the spray booth." },
      { title: "Cure & finish", copy: "The surface is cured, checked and refined before handover." },
    ],
    faqs: [
      { question: "Can you match the existing vehicle colour?", answer: "Colour matching is part of the refinishing process. Age, previous repairs and paint condition are considered when preparing the match." },
      { question: "Do you repaint individual panels?", answer: "Yes. Rolling Dents can refinish individual repaired panels as well as larger multi-panel or full-respray projects." },
      { question: "Why is preparation important?", answer: "Paint follows the surface beneath it. Correct preparation supports adhesion, smoothness and a more consistent final finish." },
    ],
  },
  {
    slug: "paint-correction",
    shortTitle: "Paint Correction",
    title: "Paint Correction & Finish Restoration",
    kicker: "BRING BACK THE DEPTH",
    summary: "Refinement for dull, marked or imperfect paintwork where the existing finish can be safely restored.",
    description: "Paint correction improves the appearance of suitable existing paint by reducing visible surface defects and restoring gloss. The paint condition is inspected first so the right level of correction can be recommended.",
    image: "/media/white-gtr-finish.webp",
    imageAlt: "White performance vehicle with a refined exterior finish at Rolling Dents",
    idealFor: ["Swirl marks and light scratches", "Dull or oxidised paint", "Haze and surface imperfections", "Pre-sale or post-repair finishing"],
    process: [
      { title: "Paint inspection", copy: "We assess the condition, defects and safe correction level." },
      { title: "Wash & decontaminate", copy: "The surface is prepared before machine correction begins." },
      { title: "Correction", copy: "Suitable defects are progressively refined from the finish." },
      { title: "Protection", copy: "The corrected surface is cleaned and prepared for protection." },
    ],
    faqs: [
      { question: "Does paint correction remove every scratch?", answer: "No. Deep scratches that have passed through the paint layers may require panel repair and refinishing instead." },
      { question: "Is correction the same as polishing?", answer: "Correction is a measured refinishing process aimed at reducing visible defects. A simple polish may improve gloss without addressing the same depth of imperfections." },
      { question: "Can you inspect the paint first?", answer: "Yes. Bring the vehicle to Laser Park or send photographs so the workshop can advise the most suitable starting point." },
    ],
  },
  {
    slug: "parts-replacement",
    shortTitle: "Parts Replacement",
    title: "Body Parts Replacement",
    kicker: "WHEN REPAIR IS NOT ENOUGH",
    summary: "Assessment and replacement of damaged exterior body components when a sound repair is not the right solution.",
    description: "Some components are better replaced than repaired. Rolling Dents identifies damaged body parts, confirms fitment requirements and integrates replacement parts into the repair and refinishing plan.",
    image: "/media/toyota-finish.webp",
    imageAlt: "Toyota front bodywork and components at Rolling Dents",
    idealFor: ["Bumpers and exterior trim", "Damaged bolt-on panels", "Lights, grilles and body fittings", "Accident-related component damage"],
    process: [
      { title: "Component assessment", copy: "We confirm which parts can be repaired and which require replacement." },
      { title: "Parts planning", copy: "Correct component and fitment requirements are identified." },
      { title: "Fit & alignment", copy: "Replacement parts are installed and aligned with surrounding panels." },
      { title: "Refinish & check", copy: "Where required, the component is refinished and inspected." },
    ],
    faqs: [
      { question: "Can you source the required parts?", answer: "Parts requirements are confirmed during assessment. The workshop will advise availability, options and how they affect the repair timeline." },
      { question: "Can a damaged bumper be repaired?", answer: "Many bumpers can be repaired, but the damage location, material and structural condition determine whether repair or replacement is safer." },
      { question: "Will replacement parts be colour matched?", answer: "Painted exterior components are prepared and refinished to suit the vehicle as part of the repair plan." },
    ],
  },
  {
    slug: "vehicle-detailing",
    shortTitle: "Vehicle Detailing",
    title: "Professional Vehicle Detailing",
    kicker: "THE FINISHING STANDARD",
    summary: "Exterior and interior presentation that completes a repair or restores pride in a well-kept vehicle.",
    description: "Detailing brings attention back to the surfaces, trim and presentation of the vehicle. It can complete a body repair, prepare a car for sale or simply restore the standard you expect from it.",
    image: "/media/black-gtr-finish.webp",
    imageAlt: "Detailed black performance vehicle at Rolling Dents",
    idealFor: ["Post-repair finishing", "Pre-sale vehicle preparation", "Exterior gloss restoration", "General vehicle presentation"],
    process: [
      { title: "Condition review", copy: "The vehicle is inspected and the detailing scope is agreed." },
      { title: "Deep clean", copy: "Selected exterior and interior areas are carefully cleaned." },
      { title: "Surface refinement", copy: "Paint, trim and visible finishes receive the agreed treatment." },
      { title: "Final presentation", copy: "The vehicle is checked and prepared for collection." },
    ],
    faqs: [
      { question: "Can detailing be booked without a body repair?", answer: "Yes. Professional detailing is available as a standalone service as well as the finishing stage of a repair." },
      { question: "Does detailing include paint correction?", answer: "Paint correction is a separate, more intensive process. The workshop will recommend it if the paint defects require more than detailing." },
      { question: "How long does detailing take?", answer: "Timing depends on the vehicle condition and agreed scope. Contact the workshop with photographs for initial guidance." },
    ],
  },
  {
    slug: "classic-restoration",
    shortTitle: "Vehicle Restoration",
    title: "Classic & Project Vehicle Restoration",
    kicker: "RESTORE THE CAR. KEEP THE CHARACTER.",
    summary: "Body and paint restoration for classic, collector and personal project vehicles that require a considered plan.",
    description: "Restoration work is shaped by the condition of the vehicle and the owner’s intended result. Rolling Dents begins with an inspection, defines the body and paint scope, and builds the work around the project rather than forcing a standard repair package.",
    image: "/media/mercedes-paint-booth.webp",
    imageAlt: "Professional vehicle refinishing environment at Rolling Dents",
    idealFor: ["Classic vehicle bodywork", "Project-car paint restoration", "Multi-panel refinishing", "Collector vehicle presentation"],
    process: [
      { title: "Project inspection", copy: "The body, paint and visible repair history are assessed." },
      { title: "Scope agreement", copy: "Priorities, finish expectations and repair stages are defined." },
      { title: "Restoration work", copy: "Bodywork and refinishing progress through the agreed stages." },
      { title: "Finish & handover", copy: "The completed work is inspected with the owner." },
    ],
    faqs: [
      { question: "Do restoration projects need an in-person inspection?", answer: "Yes. Photographs are a useful start, but a detailed physical inspection is important before the scope and quotation can be confirmed." },
      { question: "Can the project be completed in stages?", answer: "That depends on the vehicle and work required. The workshop can discuss a practical sequence after inspection." },
      { question: "Do you handle custom project vehicles?", answer: "Rolling Dents can assess individual project requirements. Contact the workshop with the vehicle details and the finish you want to achieve." },
    ],
  },
];

export const serviceAreas = [
  "Laser Park", "Honeydew", "Roodepoort", "Ruimsig", "Little Falls", "Wilgeheuwel",
  "Strubens Valley", "Weltevreden Park", "Constantia Kloof", "Florida", "Northcliff",
  "Cresta", "Randpark Ridge", "Randburg", "Northgate", "Fourways", "Douglasdale",
  "Bryanston", "Sandton", "Rosebank", "Melville", "Auckland Park", "Krugersdorp",
  "Muldersdrift", "Lanseria", "Midrand", "Kyalami", "Johannesburg West",
];

export const navigation = [
  { label: "Services", href: "/services" },
  { label: "Our Work", href: "/our-work" },
  { label: "Insurance Repairs", href: "/insurance-repairs" },
  { label: "About", href: "/about" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
];
