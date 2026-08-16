import { Home as HomeIcon, Building2, Zap } from "lucide-react";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import PlaceholderPhoto from "@/components/ui/PlaceholderPhoto";
import { solutionPathways } from "@/data/services";

const icons = { home: HomeIcon, business: Building2, hybrid: Zap };

export default function SolutionsOverview() {
  return (
    <section className="bg-off-white py-20 md:py-28">
      <div className="container-vayani">
        <SectionHeading
          eyebrow="Tailored Solar Solutions"
          title="Solar built around your needs."
          align="left"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {solutionPathways.map((item) => {
            const Icon = icons[item.id as keyof typeof icons];
            return (
              <Link
                key={item.id}
                href={item.href}
                data-cta={`solutions-${item.id}`}
                className="group flex flex-col overflow-hidden rounded-sm border border-border-brand bg-white transition-shadow hover:shadow-lg"
              >
                <div className="h-48 w-full">
                  <PlaceholderPhoto label={`${item.title} photography placeholder`} icon={Icon} tone="navy" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-medium text-navy">{item.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{item.description}</p>
                  <span className="mt-4 text-sm font-medium text-green-dark group-hover:underline">
                    Learn more →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
