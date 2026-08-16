import Button from "@/components/ui/Button";
import { buildWhatsAppLink, site, whatsappMessages } from "@/data/site";

export default function FinalCTA() {
  return (
    <section className="bg-navy-dark py-20 md:py-28 text-white">
      <div className="container-vayani text-center">
        <p className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-green">
          Ready to switch to smarter energy?
        </p>
        <h2 className="mx-auto mt-4 max-w-3xl text-[clamp(1.75rem,4.5vw,3.25rem)] leading-[1.1] font-medium tracking-tight">
          Let&rsquo;s build the right solar system for you.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/70">
          Tell us your electricity bill and energy requirements and our team will help design a
          suitable solar solution.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/contact#quote" variant="primary" data-cta="final-cta-estimate">
            Get a Free Estimate
          </Button>
          <Button href={buildWhatsAppLink(whatsappMessages.general)} variant="ghost-light" data-cta="final-cta-whatsapp">
            WhatsApp Us
          </Button>
        </div>

        <a href={site.phoneHref} className="mt-6 inline-block text-sm font-medium text-white/60 hover:text-green focus-ring">
          Or call {site.phoneDisplay}
        </a>
      </div>
    </section>
  );
}
