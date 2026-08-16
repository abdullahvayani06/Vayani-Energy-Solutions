"use client";

import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink, whatsappMessages } from "@/data/site";

type Props = {
  message?: string;
  className?: string;
};

export default function WhatsAppButton({ message = whatsappMessages.general, className }: Props) {
  return (
    <a
      href={buildWhatsAppLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      data-cta="whatsapp-float"
      aria-label="Chat with Vayani Energy Solutions on WhatsApp"
      className={
        className ??
        "fixed bottom-24 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-105 focus-ring md:bottom-6 md:right-6"
      }
    >
      <MessageCircle className="h-7 w-7" fill="white" strokeWidth={0} aria-hidden />
    </a>
  );
}
