import type { Metadata } from "next";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import QuoteForm from "@/components/forms/QuoteForm";
import Button from "@/components/ui/Button";
import { buildWhatsAppLink, site, whatsappMessages } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Vayani Energy Solutions for a free solar estimate in Karachi. Call, WhatsApp or request a quote online.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-navy py-20 md:py-28 text-white">
        <div className="container-vayani">
          <SectionHeading
            eyebrow="Get In Touch"
            title="Let's design your solar system."
            description="Share a few details and our team will follow up to arrange a free site visit and quotation."
            tone="light"
          />
        </div>
      </section>

      <section id="quote" className="bg-white py-20 md:py-28 scroll-mt-20">
        <div className="container-vayani grid gap-14 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-medium text-navy">Get Your Free Solar Estimate</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Prefer to talk directly? Reach us by phone or WhatsApp — our team is based in
              Karachi and responds during business hours.
            </p>

            <div className="mt-8 space-y-4">
              <a href={site.phoneHref} className="flex items-center gap-3 text-navy hover:text-green-dark focus-ring">
                <Phone className="h-5 w-5 shrink-0" aria-hidden />
                <span className="font-medium">{site.phoneDisplay}</span>
              </a>
              <a href={site.emailHref} className="flex items-center gap-3 text-navy hover:text-green-dark focus-ring">
                <Mail className="h-5 w-5 shrink-0" aria-hidden />
                <span className="font-medium">{site.email}</span>
              </a>
              <div className="flex items-center gap-3 text-navy">
                <MapPin className="h-5 w-5 shrink-0" aria-hidden />
                <span className="font-medium">{site.serviceArea}</span>
              </div>
            </div>

            <Button
              href={buildWhatsAppLink(whatsappMessages.general)}
              variant="secondary"
              data-cta="contact-page-whatsapp"
              className="mt-8"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              WhatsApp Us
            </Button>

            <div className="mt-10 rounded-sm border border-border-brand bg-off-white p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted">Service Area</p>
              <p className="mt-2 text-sm leading-relaxed text-navy/80">
                We currently install residential and commercial solar systems across Karachi,
                Pakistan. An exact office address and map will be added here once confirmed.
              </p>
            </div>
          </div>

          <div className="lg:col-span-3 rounded-sm border border-border-brand p-6 md:p-10">
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}
