import type { Metadata } from "next";

const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
export const SITE_URL = (configuredSiteUrl || "https://rolling-dents-proposal.pdmpofu.chatgpt.site").replace(/\/$/, "");
export const WHATSAPP_NUMBER = "27117942454";
export const PHONE_DISPLAY = "011 794 2454";
export const EMAIL = "admin@rollingdents.co.za";
export const ADDRESS = "1510 Zeiss Road, Unit 1, Block 2, Laser Park, Roodepoort";
export const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Rolling+Dents+1510+Zeiss+Road+Laser+Park+Roodepoort";
export const GOOGLE_URL = "https://www.google.com/search?q=Rolling+Dents+1510+Zeiss+Road+Roodepoort+reviews";
export const INSTAGRAM_URL = "https://www.instagram.com/rollingdents/";
export const FACEBOOK_URL = "https://www.facebook.com/search/top?q=Rolling%20Dents";

export function whatsappUrl(message = "Hi Rolling Dents, I would like a vehicle repair assessment.") {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function pageMetadata(title: string, description: string, path: string, image = "/og.png"): Metadata {
  const canonical = `${SITE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: { title, description, type: "website", url: canonical, siteName: "Rolling Dents", locale: "en_ZA", images: [{ url: image, alt: title }] },
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

export const accidentRepairService: Service = {
  slug: "accident-repair",
  shortTitle: "Accident Repair",
  title: "Accident & Autobody Repair",
  kicker: "DAMAGE ASSESSMENT",
  summary: "A customer-first route for collision and impact damage that brings the relevant panel, parts and paint services into one repair plan.",
  description: "Accident damage is a repair use case rather than a single workshop service. Rolling Dents starts with the visible damage, confirms what needs inspection, and then builds the repair around the relevant body, parts and refinishing work.",
  image: "/media/mercedes-paint-booth.webp",
  imageAlt: "Vehicle receiving professional refinishing inside the Rolling Dents paint environment",
  idealFor: ["Collision and impact damage", "Damaged bumpers and body panels", "Private repair enquiries", "Insurance-related assessment enquiries"],
  process: [
    { title: "Show the damage", copy: "Send vehicle details and clear photographs so the first assessment starts with useful context." },
    { title: "Workshop inspection", copy: "The vehicle is inspected so visible and concealed repair requirements can be confirmed." },
    { title: "Repair plan", copy: "The required panel, parts and refinishing work is assembled into one scope." },
    { title: "Repair & handover", copy: "Authorised work progresses through repair, paint, reassembly and final checks." },
  ],
  faqs: [
    { question: "Can I start with photographs?", answer: "Yes. Photographs are useful for the first conversation, but a physical assessment may still be required before the final repair scope or quotation is confirmed." },
    { question: "Can I use the same assessment for a private or insurance repair?", answer: "Yes. Start with the damage and vehicle details, then identify whether the repair is private, insurance-related or still undecided." },
    { question: "Will work begin before the repair route is approved?", answer: "The applicable scope, quotation or insurer authorisation should be confirmed before repair work begins." },
  ],
};

export const services: Service[] = [
  {
    slug: "paint-shop",
    shortTitle: "Paint Shop",
    title: "Automotive Paint Shop",
    kicker: "PREPARE. MATCH. REFINISH.",
    summary: "Professional preparation, colour matching and refinishing for repaired or damaged vehicle panels.",
    description: "A quality paint finish starts with the surface underneath it. Rolling Dents prepares the repair area, controls the refinishing process and checks the final result for coverage, colour consistency and finish.",
    image: "/media/volkswagen-spray-booth.webp",
    imageAlt: "Vehicle prepared for refinishing inside the Rolling Dents spray booth",
    idealFor: ["Repaired body panels", "Scratched or damaged paint", "Panel refinishing", "Colour restoration after body repair"],
    process: [
      { title: "Surface preparation", copy: "The repair area is cleaned, levelled and prepared for coating." },
      { title: "Colour matching", copy: "The finish is matched to the vehicle and surrounding paint condition." },
      { title: "Controlled application", copy: "Colour and clear coat are applied in the refinishing environment." },
      { title: "Cure & finish", copy: "The surface is cured, checked and refined before handover." },
    ],
    faqs: [
      { question: "Can you repaint one repaired panel?", answer: "Yes. Individual panels can be refinished where that is the correct repair scope." },
      { question: "Can photographs confirm the colour match?", answer: "No. Photographs help explain the damage, but colour and finish decisions are made from the vehicle itself." },
      { question: "Why is preparation important?", answer: "The final paint follows the surface beneath it, so preparation is central to adhesion, smoothness and presentation." },
    ],
  },
  {
    slug: "full-vehicle-resprays",
    shortTitle: "Full Resprays",
    title: "Full Vehicle Resprays",
    kicker: "A COMPLETE EXTERIOR REFINISH",
    summary: "Planned full-vehicle refinishing for projects that require a complete paint reset rather than isolated panel work.",
    description: "A full respray is a larger project with its own preparation, masking, repair and finish decisions. Rolling Dents begins with the vehicle condition and intended outcome before confirming the scope.",
    image: "/media/mercedes-paint-booth.webp",
    imageAlt: "Professional vehicle refinishing environment at Rolling Dents",
    idealFor: ["Complete colour restoration", "Widespread paint deterioration", "Multi-panel project vehicles", "Full exterior refinishing"],
    process: [
      { title: "Condition inspection", copy: "Existing paint, body condition and previous repair areas are assessed." },
      { title: "Scope agreement", copy: "Repair, preparation and finish expectations are confirmed before work starts." },
      { title: "Preparation & respray", copy: "The vehicle is prepared and refinished through the agreed paint process." },
      { title: "Final refinement", copy: "The complete exterior is checked for finish consistency and presentation." },
    ],
    faqs: [
      { question: "Do full resprays need an in-person inspection?", answer: "Yes. Photographs are useful context, but a full respray should be scoped from the vehicle itself." },
      { question: "Can body repairs be included before the respray?", answer: "Yes. Required body repairs are identified and included in the project scope before refinishing." },
      { question: "Can I request a colour change?", answer: "Discuss the intended outcome during assessment so the workshop can explain what the project would require." },
    ],
  },
  {
    slug: "paintless-dent-removal",
    shortTitle: "Paintless Dent Removal",
    title: "Paintless Dent Removal",
    kicker: "PRESERVE THE EXISTING FINISH",
    summary: "Dent correction without refinishing where the dent, paint condition and panel access make PDR suitable.",
    description: "Paintless dent removal is appropriate only for certain dents. Rolling Dents checks the dent shape, access and paint condition first, then confirms whether a non-respray repair is suitable.",
    image: "/media/black-gtr-finish.webp",
    imageAlt: "Finished black performance vehicle at Rolling Dents",
    idealFor: ["Parking dents and door dings", "Suitable shallow dents", "Dents where paint remains intact", "Panels with workable rear access"],
    process: [
      { title: "Dent inspection", copy: "The dent depth, position, paint and panel access are assessed." },
      { title: "Suitability decision", copy: "The workshop confirms whether paintless repair is appropriate." },
      { title: "Shape correction", copy: "The panel is carefully worked back toward its intended shape." },
      { title: "Reflection check", copy: "The repaired area is inspected in the surrounding panel reflections." },
    ],
    faqs: [
      { question: "Can every dent be repaired without paint?", answer: "No. Paint damage, sharp creases, stretched metal or poor access can make a conventional repair more appropriate." },
      { question: "Can I send photos first?", answer: "Yes. Send the dent from several angles, but final suitability may still need an in-person inspection." },
      { question: "Is PDR always faster than conventional repair?", answer: "It can be more direct for suitable damage, but the actual timing depends on the panel and dent." },
    ],
  },
  {
    slug: "parts-replacement",
    shortTitle: "Parts Replacement",
    title: "Body Parts Replacement",
    kicker: "WHEN REPAIR IS NOT THE RIGHT ANSWER",
    summary: "Assessment and replacement of damaged exterior components where replacement is more appropriate than repair.",
    description: "Some damaged body components are better replaced than repaired. Rolling Dents identifies the affected part, confirms fitment requirements and integrates replacement into the repair and refinishing plan.",
    image: "/media/toyota-finish.webp",
    imageAlt: "Vehicle body components and finish at Rolling Dents",
    idealFor: ["Damaged bumpers and exterior trim", "Bolt-on body panels", "Lights, grilles and body fittings", "Accident-related component damage"],
    process: [
      { title: "Component assessment", copy: "The workshop confirms whether the component should be repaired or replaced." },
      { title: "Parts planning", copy: "The correct part and fitment requirements are identified." },
      { title: "Fit & alignment", copy: "Replacement components are installed and aligned with surrounding bodywork." },
      { title: "Refinish & check", copy: "Painted components are refinished where needed and the completed fit is inspected." },
    ],
    faqs: [
      { question: "Can Rolling Dents identify what part I need?", answer: "Yes. The required component is confirmed during assessment before the repair plan is finalised." },
      { question: "Can a damaged bumper sometimes be repaired instead?", answer: "Yes. The material, location and severity of the damage determine whether repair or replacement is more appropriate." },
      { question: "Will painted parts be colour matched?", answer: "Where refinishing is required, the part is prepared and matched as part of the overall repair." },
    ],
  },
  {
    slug: "paint-correction",
    shortTitle: "Paint Correction",
    title: "Paint Correction",
    kicker: "RESTORE CLARITY AND GLOSS",
    summary: "Refinement for suitable dull, marked or imperfect paintwork where the existing finish can be safely improved.",
    description: "Paint correction targets visible surface defects and loss of gloss in suitable existing paint. The finish is inspected first so the workshop can recommend an appropriate level of correction.",
    image: "/media/white-gtr-finish.webp",
    imageAlt: "White performance vehicle with a refined exterior finish at Rolling Dents",
    idealFor: ["Swirl marks and light surface defects", "Dull or oxidised paint", "Haze and loss of gloss", "Pre-sale or post-repair finishing"],
    process: [
      { title: "Paint inspection", copy: "Condition and visible defects are assessed before correction begins." },
      { title: "Clean & prepare", copy: "The surface is washed and prepared for refinement." },
      { title: "Correction", copy: "Suitable defects are progressively refined from the finish." },
      { title: "Finish check", copy: "Gloss, clarity and overall presentation are reviewed." },
    ],
    faqs: [
      { question: "Does paint correction remove every scratch?", answer: "No. Deep damage through the paint layers may need panel repair and refinishing instead." },
      { question: "Is paint correction the same as a simple polish?", answer: "Paint correction is a more deliberate refinement process aimed at reducing visible defects rather than only increasing gloss." },
      { question: "Can you assess the paint before I book?", answer: "Yes. Photographs can start the conversation, with the final recommendation confirmed from the vehicle condition." },
    ],
  },
  {
    slug: "vehicle-detailing",
    shortTitle: "Vehicle Detailing",
    title: "Vehicle Detailing",
    kicker: "FINISH THE PRESENTATION",
    summary: "Professional presentation care that can complete a repair or refresh a vehicle as a standalone service.",
    description: "Detailing focuses on the visible presentation of the vehicle. The scope can support a completed body repair or be discussed as a dedicated appearance-care service.",
    image: "/media/black-gtr-finish.webp",
    imageAlt: "Detailed black performance vehicle at Rolling Dents",
    idealFor: ["Post-repair presentation", "Pre-sale preparation", "Exterior finish care", "General vehicle presentation"],
    process: [
      { title: "Condition review", copy: "The vehicle condition and desired detailing scope are agreed." },
      { title: "Clean", copy: "Selected exterior and interior areas are cleaned as required." },
      { title: "Refine", copy: "Visible surfaces receive the agreed treatment and attention." },
      { title: "Present", copy: "The vehicle is checked and prepared for collection." },
    ],
    faqs: [
      { question: "Can detailing be booked without body repair?", answer: "Yes. Discuss the vehicle condition and the result you want with the workshop." },
      { question: "Does detailing automatically include paint correction?", answer: "No. Paint correction is a separate refinement service and should be scoped according to the paint condition." },
      { question: "How long will detailing take?", answer: "Timing depends on the vehicle and agreed scope, so the workshop confirms it after assessment." },
    ],
  },
  {
    slug: "classic-restoration",
    shortTitle: "Classic Restorations",
    title: "Classic Vehicle Restorations",
    kicker: "RESTORE THE CAR. KEEP THE CHARACTER.",
    summary: "Body and paint restoration for classic and special-interest vehicles that need a considered project scope.",
    description: "Restoration work depends on vehicle condition and the owner's intended result. Rolling Dents begins with inspection, defines the body and paint scope, and builds the work around the project rather than forcing a standard repair package.",
    image: "/media/mercedes-paint-booth.webp",
    imageAlt: "Professional vehicle refinishing environment at Rolling Dents",
    idealFor: ["Classic vehicle bodywork", "Project-car paint restoration", "Multi-panel refinishing", "Special-interest vehicle presentation"],
    process: [
      { title: "Project inspection", copy: "Body condition, paint and visible previous repairs are assessed." },
      { title: "Scope agreement", copy: "Priorities, finish expectations and project stages are defined." },
      { title: "Restoration work", copy: "Body and refinishing work progresses through the agreed stages." },
      { title: "Finish & handover", copy: "The completed work is inspected against the agreed project outcome." },
    ],
    faqs: [
      { question: "Do restoration projects need an in-person inspection?", answer: "Yes. Photographs are useful context, but a detailed physical inspection is important before scope and quotation are confirmed." },
      { question: "Can restoration work be staged?", answer: "That depends on the vehicle and project. The workshop can discuss a practical sequence after inspection." },
      { question: "Can I start by sending photos of the project?", answer: "Yes. Send the vehicle details, current condition and the result you want to achieve before arranging the inspection." },
    ],
  },
];

export const serviceAreas = [
  "Laser Park", "Honeydew", "Roodepoort", "Ruimsig", "Little Falls", "Wilgeheuwel", "Strubens Valley", "Weltevreden Park", "Constantia Kloof", "Florida", "Northcliff", "Cresta", "Randpark Ridge", "Randburg", "Northgate", "Fourways", "Douglasdale", "Bryanston", "Sandton", "Rosebank", "Melville", "Auckland Park", "Krugersdorp", "Muldersdrift", "Lanseria", "Midrand", "Kyalami", "Johannesburg West",
];

export const navigation = [
  { label: "Services", href: "/services" },
  { label: "Our Work", href: "/our-work" },
  { label: "Repair Process", href: "/repair-process" },
  { label: "Insurance", href: "/insurance-repairs" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;
