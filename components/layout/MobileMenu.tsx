"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, Phone, MessageCircle } from "lucide-react";
import { mainNav } from "@/data/nav";
import { buildWhatsAppLink, site, whatsappMessages } from "@/data/site";
import Logo from "@/components/ui/Logo";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({ open, onClose }: Props) {
  const pathname = usePathname();

  useEffect(() => {
    onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div
      className={`fixed inset-0 z-50 md:hidden transition-opacity duration-200 ${
        open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
    >
      <button
        className="absolute inset-0 bg-navy-dark/70"
        aria-label="Close menu"
        onClick={onClose}
      />
      <div
        className={`absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white shadow-2xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-border-brand px-5 py-4">
          <Logo />
          <button onClick={onClose} aria-label="Close menu" className="p-2 -mr-2 focus-ring">
            <X className="h-6 w-6 text-navy" aria-hidden />
          </button>
        </div>

        <nav className="flex flex-col px-5 py-4">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="border-b border-border-brand py-4 text-base font-medium text-navy focus-ring"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-3 px-5 py-6">
          <Link
            href="/contact#quote"
            data-cta="mobile-menu-quote"
            className="w-full rounded-sm bg-green px-5 py-3.5 text-center text-[15px] font-semibold text-navy focus-ring"
          >
            Get Free Estimate
          </Link>
          <a
            href={buildWhatsAppLink(whatsappMessages.general)}
            target="_blank"
            rel="noopener noreferrer"
            data-cta="mobile-menu-whatsapp"
            className="flex w-full items-center justify-center gap-2 rounded-sm border border-navy/20 px-5 py-3.5 text-[15px] font-medium text-navy focus-ring"
          >
            <MessageCircle className="h-4 w-4" aria-hidden />
            WhatsApp Us
          </a>
          <a
            href={site.phoneHref}
            data-cta="mobile-menu-call"
            className="flex items-center justify-center gap-2 py-2 text-sm font-medium text-muted focus-ring"
          >
            <Phone className="h-4 w-4" aria-hidden />
            {site.phoneDisplay}
          </a>
        </div>
      </div>
    </div>
  );
}
