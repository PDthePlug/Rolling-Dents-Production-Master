import { ArrowRight, Camera, Check, ExternalLink, MessageCircle, Star } from "lucide-react";
import { CtaBanner } from "@/components/rolling-dents/cta-banner";
import { PageHero } from "@/components/rolling-dents/page-hero";
import { GOOGLE_URL, pageMetadata } from "@/lib/rolling-dents";

export const metadata = pageMetadata("Rolling Dents Reviews & Customer Confidence", "Read current public Rolling Dents reviews and see the workshop, real vehicle imagery and repair standards behind the customer experience.", "/reviews", "/media/black-gtr-finish.webp");

export default function ReviewsPage() {
  return (
    <main>
      <PageHero eyebrow="CUSTOMER CONFIDENCE" title="Trust the proof. Then inspect the finish." description="Use current public reviews, real workshop imagery and the finished work to make a better repair decision." image="/media/black-gtr-finish.webp" imageAlt="Black performance vehicle with a completed Rolling Dents finish" />
      <section className="reviews-rating section-light">
        <div className="reviews-score"><Star /><strong>Google reviews</strong><p>Ratings and review counts change as new customer feedback is added, so the site links to the current public record rather than freezing a number in time.</p><a href={GOOGLE_URL} target="_blank" rel="noreferrer">Read current reviews on Google <ExternalLink /></a></div>
        <div className="reviews-copy"><p className="section-kicker">REPUTATION YOU CAN VERIFY</p><h2>Read the public record, not selected quotes.</h2><p>Customer experiences belong where they can be checked. Use the live Google results to read current feedback and see how Rolling Dents is represented publicly.</p><div className="review-proof"><span><Camera /><strong>Real workshop imagery</strong>See the facility and completed work</span><span><MessageCircle /><strong>Direct contact</strong>Speak to the Laser Park workshop</span><span><Star /><strong>Live review source</strong>Check current public feedback yourself</span></div></div>
      </section>
      <section className="review-standard">
        <div><p className="section-kicker orange-kicker">AFTER COLLECTION</p><h2>Judge the work where it matters.</h2><p>Walk around the vehicle in good light and inspect the repaired area together with the surrounding panels.</p></div>
        <div className="check-list light-check-list"><span><Check />Panel fit and alignment</span><span><Check />Colour consistency across the repair</span><span><Check />Surface clarity and final finish</span><span><Check />Reinstalled trim and components</span><span><Check />Overall vehicle presentation</span></div>
      </section>
      <section className="leave-review section-light"><div><Star /><p className="section-kicker">COLLECTED YOUR VEHICLE?</p><h2>Leave an honest Google review.</h2><p>Your experience helps the next driver choose a repairer with better information.</p></div><a href={GOOGLE_URL} target="_blank" rel="noreferrer">Open Rolling Dents on Google <ArrowRight /></a></section>
      <CtaBanner title="Ready to start your own repair?" copy="Submit the damage photographs and vehicle details to start an assessment." />
    </main>
  );
}
