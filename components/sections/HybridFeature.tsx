import { Sun, PanelsTopLeft, Cpu, Home, BatteryCharging, Zap } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";

const flow = [
  { label: "Sun", icon: Sun },
  { label: "Solar Panels", icon: PanelsTopLeft },
  { label: "Hybrid Inverter", icon: Cpu },
  { label: "Home / Business Load", icon: Home },
];

export default function HybridFeature() {
  return (
    <section className="bg-navy py-20 md:py-28 text-white">
      <div className="container-vayani">
        <SectionHeading
          eyebrow="Hybrid Solar Systems"
          title="Solar savings. Battery backup. One smart system."
          description="A hybrid solar system combines solar generation with battery storage and available grid electricity — so you use solar during the day and keep selected loads running when grid power is unavailable."
          tone="light"
        />

        <div className="mt-14 overflow-x-auto">
          <div className="flex min-w-[640px] items-center justify-between gap-2 md:min-w-0">
            {flow.map((step, i) => (
              <div key={step.label} className="flex flex-1 items-center">
                <div className="flex flex-1 flex-col items-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/15 bg-white/5">
                    <step.icon className="h-7 w-7 text-green" aria-hidden strokeWidth={1.5} />
                  </div>
                  <p className="mt-3 text-xs md:text-sm font-medium text-white/80">{step.label}</p>
                </div>
                {i < flow.length - 1 && (
                  <svg width="48" height="8" viewBox="0 0 48 8" className="mx-1 shrink-0 md:mx-2" aria-hidden>
                    <line
                      x1="0"
                      y1="4"
                      x2="42"
                      y2="4"
                      stroke="#68A72F"
                      strokeWidth="2"
                      className="energy-line"
                    />
                    <path d="M38 0 L46 4 L38 8 Z" fill="#68A72F" />
                  </svg>
                )}
              </div>
            ))}
          </div>
          <div className="mt-4 flex min-w-[640px] items-center justify-center gap-8 md:min-w-0">
            <div className="flex items-center gap-2 text-xs md:text-sm text-white/60">
              <BatteryCharging className="h-4 w-4 text-green" aria-hidden />
              Lithium Battery
            </div>
            <div className="flex items-center gap-2 text-xs md:text-sm text-white/60">
              <Zap className="h-4 w-4 text-green" aria-hidden />
              Grid Supply
            </div>
          </div>
        </div>

        <div className="mt-12">
          <Button href="/hybrid-solar-systems" variant="primary" data-cta="hybrid-feature-cta">
            Explore Hybrid Systems
          </Button>
        </div>
      </div>
    </section>
  );
}
