import { Zap } from "lucide-react";
import Button from "@/components/ui/Button";
import { buildWhatsAppLink, whatsappMessages } from "@/data/site";
import type { HybridPackage } from "@/data/packages";

export default function PackageCard({ pkg, featured }: { pkg: HybridPackage; featured?: boolean }) {
  return (
    <div
      className={`flex flex-col rounded-sm border p-6 ${
        featured ? "border-green bg-green-light" : "border-border-brand bg-white"
      }`}
    >
      <div className="flex items-center gap-2 text-green-dark">
        <Zap className="h-4 w-4" aria-hidden />
        <span className="text-xs font-semibold tracking-[0.14em] uppercase">{pkg.sizeKw}KW Hybrid</span>
      </div>
      <p className="mt-3 text-sm text-muted">{pkg.propertyType}</p>

      <dl className="mt-5 space-y-2.5 text-sm">
        <div className="flex justify-between gap-3">
          <dt className="text-muted">Panels</dt>
          <dd className="text-right font-medium text-navy">{pkg.panelQuantity}</dd>
        </div>
        <div className="flex justify-between gap-3">
          <dt className="text-muted">Battery</dt>
          <dd className="text-right font-medium text-navy">{pkg.batteryCapacity}</dd>
        </div>
        <div className="flex justify-between gap-3">
          <dt className="text-muted">Backup</dt>
          <dd className="text-right font-medium text-navy">{pkg.backup}</dd>
        </div>
      </dl>

      <div className="mt-6 flex flex-col gap-2.5">
        <Button
          href="/contact#quote"
          variant={featured ? "primary" : "secondary"}
          data-cta={`package-${pkg.id}-quote`}
          className="w-full"
        >
          Get Custom Quote
        </Button>
        <Button
          href={buildWhatsAppLink(whatsappMessages.package(pkg.name))}
          variant="text"
          data-cta={`package-${pkg.id}-whatsapp`}
          className="justify-center"
        >
          Ask on WhatsApp
        </Button>
      </div>
    </div>
  );
}
