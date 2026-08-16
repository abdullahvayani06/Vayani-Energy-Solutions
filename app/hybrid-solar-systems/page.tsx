import type { Metadata } from "next";
import { AlertTriangle, TrendingUp, BatteryCharging, Sun } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import PlaceholderPhoto from "@/components/ui/PlaceholderPhoto";
import Button from "@/components/ui/Button";
import HybridDiagram from "@/components/sections/HybridDiagram";
import PackageComparisonTable from "@/components/sections/PackageComparisonTable";
import { hybridBenefits } from "@/data/services";
import { buildWhatsAppLink, whatsappMessages } from "@/data/site";

export const metadata: Metadata = {
  title: "Hybrid Solar Systems in Karachi",
  description:
    "Hybrid solar systems combine solar generation, lithium battery storage and grid supply — designed for Karachi homes and businesses that need daytime savings and backup for essential loads.",
  alternates: { canonical: "/hybrid-solar-systems" },
};

const painPoints = [
  {
    title: "Unreliable Grid Availability",
    description: "Grid power isn't always consistent — a hybrid system keeps selected loads running when it's not.",
    icon: AlertTriangle,
  },
  {
    title: "Rising Electricity Expenses",
    description: "Solar generation during the day reduces how much grid electricity you draw.",
    icon: TrendingUp,
  },
  {
    title: "Need for Essential-Load Backup",
    description: "Battery storage keeps fridges, lights, routers and other essentials running during an outage.",
    icon: BatteryCharging,
  },
  {
    title: "Solar Utilization During Daytime",
    description: "A hybrid inverter directs solar generation to your load first, then to battery charging.",
    icon: Sun,
  },
];

export default function HybridSolarSystemsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="absolute inset-0">
          <PlaceholderPhoto label="Hybrid solar rooftop installation — photography placeholder" tone="navy" className="opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-dark via-navy/85 to-navy/40" />
        </div>
        <div className="container-vayani relative py-24 md:py-32">
          <SectionHeading
            eyebrow="Hybrid Solar Systems"
            title="Solar savings. Battery backup. One smart system."
            description="A hybrid solar system combines solar generation with battery storage and available grid electricity, allowing you to use solar during the day and maintain selected backup loads when grid power is unavailable."
            tone="light"
          />
          <div className="mt-9 flex flex-wrap gap-4">
            <Button href="/contact#quote" variant="primary" data-cta="hybrid-page-design-system">
              Design My Hybrid System
            </Button>
            <Button href={buildWhatsAppLink(whatsappMessages.hybrid)} variant="ghost-light" data-cta="hybrid-page-whatsapp">
              Ask on WhatsApp
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-off-white py-20 md:py-28">
        <div className="container-vayani">
          <SectionHeading eyebrow="Built For Karachi" title="Designed around real energy challenges." />
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {painPoints.map((point) => (
              <div key={point.title} className="flex gap-4 rounded-sm border border-border-brand bg-white p-6">
                <point.icon className="h-6 w-6 shrink-0 text-green-dark" aria-hidden strokeWidth={1.5} />
                <div>
                  <h3 className="text-base font-medium text-navy">{point.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-20 md:py-28 text-white">
        <div className="container-vayani">
          <SectionHeading
            eyebrow="How It Works"
            title="Solar, battery and grid — working together."
            tone="light"
            align="center"
          />
          <div className="mt-14">
            <HybridDiagram />
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="container-vayani">
          <SectionHeading eyebrow="Why Choose Hybrid?" title="Every benefit, built into one system." />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {hybridBenefits.map((benefit) => (
              <div key={benefit.title} className="rounded-sm border border-border-brand p-6">
                <h3 className="text-base font-medium text-navy">{benefit.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="packages" className="bg-off-white py-20 md:py-28 scroll-mt-20">
        <div className="container-vayani">
          <SectionHeading
            eyebrow="System Packages"
            title="Hybrid solar systems for every energy need."
            description="Compare capacity, equipment and backup across our standard hybrid packages, or request a fully custom design."
          />
          <div className="mt-12">
            <PackageComparisonTable />
          </div>
        </div>
      </section>

      <section className="bg-navy-dark py-16 text-white">
        <div className="container-vayani flex flex-col items-center gap-6 text-center">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight">
            Let&rsquo;s design the right hybrid system for your property.
          </h2>
          <Button href="/contact#quote" variant="primary" data-cta="hybrid-page-final-cta">
            Design My Hybrid System
          </Button>
        </div>
      </section>
    </>
  );
}
