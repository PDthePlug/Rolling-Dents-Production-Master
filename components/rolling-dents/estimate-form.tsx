"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, Camera, Check, MessageCircle, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { WHATSAPP_NUMBER } from "@/lib/rolling-dents";

export function EstimateForm() {
  const [repairType, setRepairType] = useState("");
  const [paymentRoute, setPaymentRoute] = useState("");
  const [photosReady, setPhotosReady] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      "Hi Rolling Dents, I would like a vehicle repair assessment.",
      "",
      `Name: ${data.get("name")}`,
      `Mobile: ${data.get("mobile")}`,
      `Vehicle: ${data.get("year")} ${data.get("make")} ${data.get("model")}`,
      `Registration: ${data.get("registration") || "Not provided"}`,
      `Repair type: ${repairType}`,
      `Repair route: ${paymentRoute}`,
      `Damage: ${data.get("description")}`,
      `Photos ready: ${photosReady ? "Yes" : "No"}`,
      "",
      photosReady ? "I will attach the damage photos in this chat." : "Please advise what photographs you need.",
    ].join("\n");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <form className="estimate-form" onSubmit={submit}>
      <div className="estimate-form-heading">
        <div><p className="form-step">VEHICLE ASSESSMENT</p><h2>Tell us what happened.</h2></div>
        <span><ShieldCheck /> Your details open directly in WhatsApp</span>
      </div>
      <div className="form-grid">
        <label><span>Your name</span><Input required name="name" autoComplete="name" placeholder="Full name" /></label>
        <label><span>Mobile number</span><Input required name="mobile" autoComplete="tel" inputMode="tel" placeholder="e.g. 082 123 4567" /></label>
        <label><span>Vehicle make</span><Input required name="make" placeholder="e.g. BMW" /></label>
        <label><span>Vehicle model</span><Input required name="model" placeholder="e.g. 320i" /></label>
        <label><span>Vehicle year</span><Input required name="year" inputMode="numeric" placeholder="e.g. 2021" /></label>
        <label><span>Registration (optional)</span><Input name="registration" placeholder="e.g. AB 12 CD GP" /></label>
        <label>
          <span>What needs attention?</span>
          <Select required value={repairType} onValueChange={(value) => setRepairType(value ?? "")}>
            <SelectTrigger className="form-control"><SelectValue placeholder="Select repair type" /></SelectTrigger>
            <SelectContent><SelectItem value="Accident damage">Accident damage</SelectItem><SelectItem value="Dent or panel damage">Dent or panel damage</SelectItem><SelectItem value="Paint or respray">Paint or respray</SelectItem><SelectItem value="Parts replacement">Parts replacement</SelectItem><SelectItem value="Detailing or paint correction">Detailing or paint correction</SelectItem><SelectItem value="Restoration project">Restoration project</SelectItem></SelectContent>
          </Select>
        </label>
        <label>
          <span>How will the repair be handled?</span>
          <Select required value={paymentRoute} onValueChange={(value) => setPaymentRoute(value ?? "")}>
            <SelectTrigger className="form-control"><SelectValue placeholder="Select repair route" /></SelectTrigger>
            <SelectContent><SelectItem value="Insurance repair">Insurance repair</SelectItem><SelectItem value="Private repair">Private repair</SelectItem><SelectItem value="Not sure yet">Not sure yet</SelectItem></SelectContent>
          </Select>
        </label>
      </div>
      <label className="full-field"><span>Describe the damage</span><Textarea required name="description" placeholder="Tell us where the damage is and what caused it." /></label>
      <button type="button" className={`photo-ready${photosReady ? " selected" : ""}`} onClick={() => setPhotosReady((value) => !value)} aria-pressed={photosReady}>
        <span className="photo-ready-icon">{photosReady ? <Check /> : <Camera />}</span>
        <span><strong>I have damage photos ready</strong><small>After WhatsApp opens, attach 3–6 clear images from different angles.</small></span>
      </button>
      <div className="photo-guide"><h3>For a useful first look, include:</h3><div><span><strong>01</strong>The full side of the vehicle</span><span><strong>02</strong>A straight view of the damage</span><span><strong>03</strong>Close-up detail from two angles</span></div></div>
      <Button type="submit" className="orange-button estimate-submit"><MessageCircle /> Continue in WhatsApp <ArrowRight /></Button>
      <p className="estimate-disclaimer">Photographs support an initial assessment. A physical inspection may still be required before a final quotation is confirmed.</p>
    </form>
  );
}
