import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { serviceProcess } from "@/data/services";
import { buildWhatsAppLink, whatsappMessages } from "@/data/site";

export default function ServiceProcess() {
  return (
    <section id="process" className="bg-white py-20 md:py-28">
      <div className="container-vayani">
        <SectionHeading
          eyebrow="How It Works"
          title="From site visit to switch-on."
          description="A clear, six-step process — from the first site visit to long-term after-sales support."
        />

        <div className="mt-14 space-y-0">
          {serviceProcess.map((step, i) => (
            <div
              key={step.number}
              className={`grid gap-4 py-8 md:grid-cols-[100px_1fr] md:gap-8 ${
                i !== serviceProcess.length - 1 ? "border-b border-border-brand" : ""
              }`}
            >
              <span className="text-4xl md:text-5xl font-light text-green/50">{step.number}</span>
              <div>
                <h3 className="text-xl font-medium text-navy">{step.title}</h3>
                <p className="mt-2 max-w-2xl text-sm md:text-base leading-relaxed text-muted">
                  {step.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {step.points.map((point) => (
                    <li
                      key={point}
                      className="rounded-full border border-border-brand bg-off-white px-3 py-1 text-xs font-medium text-navy/70"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
                {step.cta && (
                  <Button
                    href={buildWhatsAppLink(whatsappMessages.siteVisit)}
                    variant="text"
                    data-cta={`process-step-${step.number}-cta`}
                    className="mt-4"
                  >
                    {step.cta.label}
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
