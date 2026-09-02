import { ArrowRight, Check, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBanner } from "@/components/rolling-dents/cta-banner";
import { PageHero } from "@/components/rolling-dents/page-hero";
import { Service, services, whatsappUrl } from "@/lib/rolling-dents";

export function ServiceDetail({ service }: { service: Service }) {
  const related = services.filter((item) => item.slug !== service.slug).slice(0, 3);
  return (
    <main>
      <PageHero eyebrow={service.kicker} title={service.title} description={service.summary} image={service.image} imageAlt={service.imageAlt} />

      <section className="service-intro section-light">
        <div><p className="section-kicker">THE RIGHT REPAIR STARTS WITH THE PANEL</p><h2>Repair the damage. Restore the finish.</h2></div>
        <div><p>{service.description}</p><Button asChild className="orange-button content-button"><a href={whatsappUrl(`Hi Rolling Dents, I need help with ${service.shortTitle.toLowerCase()}.`)} target="_blank" rel="noreferrer"><MessageCircle /> Ask about this repair</a></Button></div>
      </section>

      <section className="ideal-section">
        <div className="ideal-image"><img src={service.image} alt={service.imageAlt} /></div>
        <div className="ideal-copy"><p className="section-kicker orange-kicker">WHEN TO CONTACT US</p><h2>This service may be right for:</h2><div className="check-list">{service.idealFor.map((item) => <span key={item}><Check />{item}</span>)}</div><p>Not sure which service fits the damage? Send photographs on WhatsApp and the workshop will point you in the right direction.</p></div>
      </section>

      <section className="process-section section-light">
        <div className="section-heading center-heading"><p className="section-kicker">HOW THE WORK MOVES</p><h2>A controlled process from assessment to handover.</h2></div>
        <div className="process-grid">{service.process.map((step, index) => <article key={step.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{step.title}</h3><p>{step.copy}</p>{index < service.process.length - 1 && <ArrowRight aria-hidden="true" />}</article>)}</div>
      </section>

      <section className="faq-section">
        <div><p className="section-kicker orange-kicker">GOOD TO KNOW</p><h2>Questions before you book.</h2></div>
        <div className="faq-list">{service.faqs.map((faq) => <details key={faq.question}><summary>{faq.question}<span>+</span></summary><p>{faq.answer}</p></details>)}</div>
      </section>

      <section className="related-section section-light">
        <div className="section-heading split-heading"><div><p className="section-kicker">RELATED SERVICES</p><h2>Complete the repair properly.</h2></div><a className="text-link dark-text-link" href="/services">View all services <ArrowRight /></a></div>
        <div className="related-grid">{related.map((item) => <a key={item.slug} href={`/services/${item.slug}`}><img src={item.image} alt={item.imageAlt} /><span><small>{item.kicker}</small><strong>{item.title}</strong><em>Explore service <ArrowRight /></em></span></a>)}</div>
      </section>

      <CtaBanner title={`Need ${service.shortTitle.toLowerCase()}?`} copy="Send the vehicle details and clear damage photographs. Rolling Dents will advise the next assessment step." />
    </main>
  );
}
