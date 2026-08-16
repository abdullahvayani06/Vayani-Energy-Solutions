"use client";

import { Phone, MessageCircle, FileText } from "lucide-react";
import { buildWhatsAppLink, site, whatsappMessages } from "@/data/site";

export default function MobileContactBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-white/10 bg-navy-dark md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <a
        href={site.phoneHref}
        data-cta="mobile-bar-call"
        className="flex flex-col items-center justify-center gap-1 py-2.5 text-white/90 active:bg-white/5"
      >
        <Phone className="h-5 w-5" aria-hidden />
        <span className="text-[11px] font-medium tracking-wide">Call</span>
      </a>
      <a
        href={buildWhatsAppLink(whatsappMessages.general)}
        target="_blank"
        rel="noopener noreferrer"
        data-cta="mobile-bar-whatsapp"
        className="flex flex-col items-center justify-center gap-1 border-x border-white/10 py-2.5 text-white/90 active:bg-white/5"
      >
        <MessageCircle className="h-5 w-5" aria-hidden />
        <span className="text-[11px] font-medium tracking-wide">WhatsApp</span>
      </a>
      <a
        href="/contact#quote"
        data-cta="mobile-bar-quote"
        className="flex flex-col items-center justify-center gap-1 bg-green py-2.5 text-navy active:bg-green-dark"
      >
        <FileText className="h-5 w-5" aria-hidden />
        <span className="text-[11px] font-semibold tracking-wide">Get Quote</span>
      </a>
    </div>
  );
}
