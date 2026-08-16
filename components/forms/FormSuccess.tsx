import { CheckCircle2 } from "lucide-react";
import Button from "@/components/ui/Button";
import { buildWhatsAppLink, site, whatsappMessages } from "@/data/site";

export default function FormSuccess({ onReset }: { onReset?: () => void }) {
  return (
    <div className="flex flex-col items-center rounded-sm border border-border-brand bg-green-light px-6 py-12 text-center">
      <CheckCircle2 className="h-12 w-12 text-green-dark" aria-hidden strokeWidth={1.5} />
      <h3 className="mt-5 text-2xl font-medium text-navy">Thank You.</h3>
      <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
        Our solar team has received your requirements and will get back to you shortly.
      </p>

      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
        <Button href={buildWhatsAppLink(whatsappMessages.general)} variant="primary" data-cta="form-success-whatsapp">
          Chat on WhatsApp
        </Button>
        <Button href={site.phoneHref} variant="secondary" data-cta="form-success-call">
          Call {site.phoneDisplay}
        </Button>
      </div>

      {onReset && (
        <button onClick={onReset} className="mt-6 text-sm font-medium text-navy/60 underline focus-ring">
          Submit another request
        </button>
      )}
    </div>
  );
}
