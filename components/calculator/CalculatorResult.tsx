import { CheckCircle2 } from "lucide-react";
import Button from "@/components/ui/Button";
import { calculatorDisclaimer, type CalculatorResult as ResultType } from "@/data/solarCalculator";
import { buildWhatsAppLink, whatsappMessages } from "@/data/site";

type Props = {
  result: ResultType;
  billInput: string;
  propertyType: string;
};

function pkr(n: number) {
  return `Rs. ${n.toLocaleString("en-PK")}`;
}

export default function CalculatorResult({ result, billInput, propertyType }: Props) {
  const waMessage = whatsappMessages.calculator(billInput, result.recommendedLabel, propertyType);

  return (
    <div aria-live="polite">
      <p className="flex items-center gap-1.5 text-xs font-semibold tracking-[0.16em] uppercase text-green">
        <CheckCircle2 className="h-3.5 w-3.5 shrink-0" aria-hidden />
        Recommended Solution
      </p>
      <p className="mt-2 text-2xl md:text-[28px] font-medium tracking-tight text-white">
        {result.recommendedLabel}
      </p>

      <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-5">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-wide text-white/45">Monthly Savings</p>
          <p className="mt-1 text-base font-medium text-white">
            {pkr(result.estimatedMonthlySavingsLow)}–{pkr(result.estimatedMonthlySavingsHigh)}
          </p>
        </div>
        <div>
          <p className="text-[11px] font-medium uppercase tracking-wide text-white/45">Annual Savings</p>
          <p className="mt-1 text-base font-medium text-white">
            {pkr(result.estimatedAnnualSavingsLow)}–{pkr(result.estimatedAnnualSavingsHigh)}
          </p>
        </div>
        <div>
          <p className="text-[11px] font-medium uppercase tracking-wide text-white/45">Monthly Units</p>
          <p className="mt-1 text-base font-medium text-white">{result.monthlyUnits.toLocaleString("en-PK")}</p>
        </div>
        <div>
          <p className="text-[11px] font-medium uppercase tracking-wide text-white/45">System Size</p>
          <p className="mt-1 text-base font-medium text-white">{result.recommendedSizeKw}KW</p>
        </div>
      </div>

      <p className="mt-6 text-xs leading-relaxed text-white/40">{calculatorDisclaimer}</p>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Button href="/contact#quote" variant="primary" data-cta="calculator-get-quote">
          Get Exact Quotation
        </Button>
        <Button href={buildWhatsAppLink(waMessage)} variant="ghost-light" data-cta="calculator-whatsapp">
          Send on WhatsApp
        </Button>
      </div>
    </div>
  );
}
