"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { faqs } from "@/data/faqs";

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-20 md:py-28">
      <div className="container-vayani">
        <SectionHeading eyebrow="Frequently Asked Questions" title="Answers before you ask." />

        <div className="mt-10 max-w-3xl divide-y divide-border-brand border-t border-border-brand">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={faq.question}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left focus-ring"
                >
                  <span className="text-base font-medium text-navy">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-green-dark transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden
                  />
                </button>
                {isOpen && (
                  <p className="pb-5 pr-8 text-sm md:text-base leading-relaxed text-muted">{faq.answer}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
