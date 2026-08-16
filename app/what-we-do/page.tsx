import type { Metadata } from "next";
import { Zap, PanelsTopLeft, Cpu, BatteryCharging, Wrench, ClipboardCheck, LifeBuoy } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import PlaceholderPhoto from "@/components/ui/PlaceholderPhoto";
import Button from "@/components/ui/Button";
import { services } from "@/data/services";
import { productCategories } from "@/data/products";
import { buildWhatsAppLink, whatsappMessages } from "@/data/site";

export const metadata: Metadata = {
  title: "What We Do — Complete Solar Energy Solutions",
  description:
    "From hybrid solar system design to installation, testing, commissioning and after-sales support — see the complete solar journey with Vayani Energy Solutions.",
  alternates: { canonical: "/what-we-do" },
};

const icons: Record<string, typeof Zap> = {
  "hybrid-systems": Zap,
  "solar-panels": PanelsTopLeft,
  "hybrid-inverters": Cpu,
  "lithium-battery": BatteryCharging,
  installation: Wrench,
  "testing-commissioning": ClipboardCheck,
  "after-sales": LifeBuoy,
};

export default function WhatWeDoPage() {
  return (
    <>
      <section className="bg-navy py-20 md:py-28 text-white">
        <div className="container-vayani">
          <SectionHeading
            eyebrow="What We Do"
            title="Complete solar energy solutions — from design to commissioning."
            description="Vayani Energy Solutions handles the complete journey: site assessment, system design, equipment supply, installation, testing and after-sales support."
            tone="light"
          />
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="container-vayani grid gap-6 md:grid-cols-2">
          {services.map((service) => {
            const Icon = icons[service.id];
            return (
              <div key={service.id} id={service.id} className="flex gap-4 rounded-sm border border-border-brand p-6 scroll-mt-24">
                <Icon className="h-6 w-6 shrink-0 text-green-dark" aria-hidden strokeWidth={1.5} />
                <div>
                  <h2 className="text-lg font-medium text-navy">{service.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-off-white py-20 md:py-28">
        <div className="container-vayani">
          <SectionHeading
            eyebrow="Products & Specifications"
            title="The equipment behind every system."
            description="Specifications shown are the ranges currently supplied. Exact model and configuration are confirmed during your site visit."
          />

          <div className="mt-12 space-y-10">
            {productCategories.map((product) => (
              <div key={product.id} id={product.id} className="grid gap-8 rounded-sm border border-border-brand bg-white p-6 scroll-mt-24 md:grid-cols-[280px_1fr] md:p-8">
                <div className="h-52 md:h-full">
                  <PlaceholderPhoto label={`${product.title} photography placeholder`} tone="navy" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-navy">{product.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{product.summary}</p>

                  <ul className="mt-4 flex flex-wrap gap-2">
                    {product.points.map((point) => (
                      <li key={point} className="rounded-full border border-border-brand bg-off-white px-3 py-1 text-xs font-medium text-navy/70">
                        {point}
                      </li>
                    ))}
                  </ul>

                  {product.specs && (
                    <dl className="mt-5 grid gap-x-8 gap-y-2 border-t border-border-brand pt-4 sm:grid-cols-2">
                      {product.specs.map((spec) => (
                        <div key={spec.label} className="flex justify-between gap-3 text-sm">
                          <dt className="text-muted">{spec.label}</dt>
                          <dd className="font-medium text-navy">{spec.value}</dd>
                        </div>
                      ))}
                    </dl>
                  )}

                  {product.brands && (
                    <p className="mt-4 text-xs font-medium tracking-wide text-green-dark">
                      {product.brands.join(" · ")}
                    </p>
                  )}

                  <Button
                    href={buildWhatsAppLink(whatsappMessages.general)}
                    variant="text"
                    data-cta={`what-we-do-${product.id}-ask`}
                    className="mt-5"
                  >
                    Ask About This Product
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-dark py-16 text-white">
        <div className="container-vayani flex flex-col items-center gap-6 text-center">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight">
            Ready to see what system fits your property?
          </h2>
          <Button href="/contact#quote" variant="primary" data-cta="what-we-do-cta">
            Get a Free Estimate
          </Button>
        </div>
      </section>
    </>
  );
}
