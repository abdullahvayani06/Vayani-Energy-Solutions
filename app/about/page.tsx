import type { Metadata } from "next";
import { Compass, Cpu, Users, Wrench, LifeBuoy } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import PlaceholderPhoto from "@/components/ui/PlaceholderPhoto";
import Button from "@/components/ui/Button";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Vayani Energy Solutions is a Karachi-based solar energy company focused on engineering-led hybrid solar systems and professional installation.",
  alternates: { canonical: "/about" },
};

const pillars = [
  {
    title: "Engineering-Led Design",
    description: "Every system is designed around actual load, roof conditions and backup needs — not a fixed template.",
    icon: Compass,
  },
  {
    title: "Modern Technology",
    description: "Tier-1 bifacial solar panels, smart hybrid inverters and lithium battery storage.",
    icon: Cpu,
  },
  {
    title: "Customer-Focused Process",
    description: "From the first site visit to final commissioning, every step is explained clearly.",
    icon: Users,
  },
  {
    title: "Professional Installation",
    description: "Clean mechanical and electrical workmanship, tested and commissioned before handover.",
    icon: Wrench,
  },
  {
    title: "Reliable Support",
    description: "A Karachi-based team that stays reachable after your system is switched on.",
    icon: LifeBuoy,
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="absolute inset-0">
          <PlaceholderPhoto label="Engineer inspecting a solar installation — photography placeholder" tone="navy" className="opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-dark via-navy/85 to-navy/40" />
        </div>
        <div className="container-vayani relative py-24 md:py-32">
          <SectionHeading
            eyebrow={site.statement}
            title="Renewable energy, engineered around you."
            description="Vayani Energy Solutions designs, installs and commissions hybrid solar systems for homes and businesses across Karachi — with a focus on clean engineering and long-term reliability."
            tone="light"
          />
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="container-vayani grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-navy">Our Philosophy</h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              We believe a solar system should be designed around how a property actually uses
              energy — not sold as a fixed package. That means understanding roof space, shading,
              daily consumption and backup needs before recommending a system size.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              {site.tagline} We work toward that by making solar adoption straightforward:
              transparent quotations, quality equipment, and installation work that holds up over
              time.
            </p>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-navy">
              Our Approach to Every Project
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Every project starts with a free site visit and ends with full testing and
              commissioning — with clear communication and after-sales support in between. Our
              team is based in {site.city}, so support is always local.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-off-white py-20 md:py-28">
        <div className="container-vayani">
          <SectionHeading eyebrow="What Guides Us" title="Principles behind every installation." />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="flex gap-4">
                <pillar.icon className="h-6 w-6 shrink-0 text-green-dark" aria-hidden strokeWidth={1.5} />
                <div>
                  <h3 className="text-base font-medium text-navy">{pillar.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-dark py-16 text-white">
        <div className="container-vayani flex flex-col items-center gap-6 text-center">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight">
            Ready to talk about your property?
          </h2>
          <Button href="/contact#quote" variant="primary" data-cta="about-cta">
            Get a Free Estimate
          </Button>
        </div>
      </section>
    </>
  );
}
