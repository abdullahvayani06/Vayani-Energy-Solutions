import SectionHeading from "@/components/ui/SectionHeading";
import { whyVayani } from "@/data/services";

export default function WhyVayani() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-vayani grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <SectionHeading eyebrow="Why Vayani Energy Solutions" title="Built on engineering, not guesswork." />

        <div className="divide-y divide-border-brand border-t border-border-brand">
          {whyVayani.map((item, i) => (
            <div key={item.title} className="grid grid-cols-[3rem_1fr] gap-4 py-6 sm:grid-cols-[4rem_1fr]">
              <span className="font-mono text-sm text-green-dark/70">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="text-base font-medium text-navy">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
