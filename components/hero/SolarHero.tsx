import { PanelsTopLeft, Zap, BatteryCharging, Wrench } from "lucide-react";
import Button from "@/components/ui/Button";
import { buildWhatsAppLink, whatsappMessages } from "@/data/site";

const facts = [
  { label: "Tier-1 Solar Panels", detail: "Bifacial modules from LONGi & Jinko", icon: PanelsTopLeft },
  { label: "Hybrid Energy Systems", detail: "3KW to 10KW+, homes & businesses", icon: Zap },
  { label: "Lithium Battery Backup", detail: "BMS-protected storage for essential loads", icon: BatteryCharging },
  { label: "Professional Installation", detail: "Own team, full testing & commissioning", icon: Wrench },
];

export default function SolarHero() {
  return (
    <section className="relative overflow-hidden bg-off-white">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px]"
        style={{
          background:
            "radial-gradient(ellipse 900px 420px at 15% 0%, rgba(95,163,63,0.12), transparent 65%)",
        }}
        aria-hidden
      />

      <div className="container-vayani relative grid gap-14 py-20 md:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-10">
        <div>
          <p className="mb-5 flex items-center gap-2 text-xs md:text-sm font-semibold tracking-[0.22em] uppercase text-green-dark">
            <span className="h-px w-8 bg-green-dark" aria-hidden />
            Innovation for a Sustainable Future
          </p>
          <h1 className="text-[clamp(2.5rem,5.5vw,4.25rem)] leading-[1.06] font-medium tracking-tight text-navy">
            Powering a brighter Pakistan.
          </h1>
          <p className="mt-6 max-w-xl text-base md:text-lg leading-relaxed text-muted">
            Vayani Energy Solutions designs and installs hybrid solar systems for homes and
            businesses in Karachi — Tier-1 solar panels, smart hybrid inverters and lithium
            battery storage, engineered around your actual energy use.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <Button href="/contact#quote" variant="primary" data-cta="hero-get-estimate">
              Get a Free Estimate
            </Button>
            <Button href="/hybrid-solar-systems" variant="secondary" data-cta="hero-explore-solutions">
              Explore Solar Solutions
            </Button>
          </div>

          <a
            href={buildWhatsAppLink(whatsappMessages.general)}
            target="_blank"
            rel="noopener noreferrer"
            data-cta="hero-whatsapp"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-navy/60 hover:text-green-dark focus-ring"
          >
            Or chat with us directly on WhatsApp →
          </a>
        </div>

        <div className="rounded-sm border border-border-brand bg-white p-1.5 shadow-[0_20px_60px_-25px_rgba(11,39,51,0.35)]">
          <div className="rounded-[2px] border border-border-brand">
            {facts.map((fact, i) => (
              <div
                key={fact.label}
                className={`flex items-start gap-4 px-5 py-5 ${
                  i !== facts.length - 1 ? "border-b border-border-brand" : ""
                }`}
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-light">
                  <fact.icon className="h-5 w-5 text-green-dark" aria-hidden strokeWidth={1.75} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-navy">{fact.label}</p>
                  <p className="mt-0.5 text-xs leading-relaxed text-muted">{fact.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
