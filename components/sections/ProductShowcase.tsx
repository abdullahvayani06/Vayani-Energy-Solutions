import { PanelsTopLeft, Cpu, BatteryCharging, Layers, PlugZap } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import PlaceholderPhoto from "@/components/ui/PlaceholderPhoto";
import Button from "@/components/ui/Button";
import { productCategories } from "@/data/products";
import { buildWhatsAppLink, whatsappMessages } from "@/data/site";

const icons: Record<string, typeof PanelsTopLeft> = {
  "solar-panels": PanelsTopLeft,
  "hybrid-inverters": Cpu,
  "lithium-batteries": BatteryCharging,
  "solar-structures": Layers,
  "electrical-protection": PlugZap,
};

export default function ProductShowcase() {
  return (
    <section id="products" className="bg-white py-20 md:py-28">
      <div className="container-vayani">
        <SectionHeading
          eyebrow="Products & Equipment"
          title="Engineering-grade solar equipment."
          description="Tier-1 panels, smart hybrid inverters and lithium battery storage — selected for performance, not just price."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {productCategories.map((product) => {
            const Icon = icons[product.id];
            return (
              <div
                key={product.id}
                id={product.id}
                className="flex flex-col overflow-hidden rounded-sm border border-border-brand sm:flex-row"
              >
                <div className="h-40 sm:h-auto sm:w-44 shrink-0">
                  <PlaceholderPhoto label={`${product.title} product photography placeholder`} icon={Icon} tone="navy" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-medium text-navy">{product.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{product.summary}</p>
                  {product.brands && (
                    <p className="mt-3 text-xs font-medium tracking-wide text-green-dark">
                      {product.brands.join(" · ")}
                    </p>
                  )}
                  <Button
                    href={buildWhatsAppLink(whatsappMessages.general)}
                    variant="text"
                    data-cta={`product-${product.id}-ask`}
                    className="mt-4"
                  >
                    Ask About This Product
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
