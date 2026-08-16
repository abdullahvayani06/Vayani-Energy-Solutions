"use client";

import { useMemo, useState } from "react";
import { Sliders } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import CalculatorResult from "@/components/calculator/CalculatorResult";
import { calculateSolarEstimate, type BackupLevel } from "@/data/solarCalculator";

const MIN_BILL = 5000;
const MAX_BILL = 150000;

const propertyTypes = ["Home", "Commercial"] as const;
const backupOptions: { value: BackupLevel; label: string }[] = [
  { value: "unsure", label: "Not Sure" },
  { value: "none", label: "No Backup" },
  { value: "essential", label: "Essential" },
  { value: "extended", label: "Extended" },
];

export default function SolarSavingsCalculator() {
  const [bill, setBill] = useState(35000);
  const [propertyType, setPropertyType] = useState<(typeof propertyTypes)[number]>("Home");
  const [backup, setBackup] = useState<BackupLevel>("unsure");

  const result = useMemo(() => calculateSolarEstimate(bill, backup), [bill, backup]);
  const sliderPct = ((bill - MIN_BILL) / (MAX_BILL - MIN_BILL)) * 100;

  return (
    <section id="calculator" className="bg-off-white py-20 md:py-28">
      <div className="container-vayani">
        <SectionHeading
          eyebrow="Solar Savings Calculator"
          title="See what solar could save you every month."
          description="Move the slider to your average monthly K-Electric bill — your recommended system and savings update instantly."
        />

        <div className="mt-10 overflow-hidden rounded-sm bg-navy-dark">
          <div className="grid gap-0 lg:grid-cols-[1fr_1px_1fr]">
            <div className="p-7 md:p-10">
              <div className="flex items-center justify-between">
                <label htmlFor="bill-slider" className="flex items-center gap-2 text-sm font-medium text-white/70">
                  <Sliders className="h-4 w-4 text-green" aria-hidden />
                  Monthly K-Electric Bill
                </label>
                <span className="text-2xl font-medium tracking-tight text-white">
                  Rs. {bill.toLocaleString("en-PK")}
                </span>
              </div>

              <input
                id="bill-slider"
                type="range"
                min={MIN_BILL}
                max={MAX_BILL}
                step={1000}
                value={bill}
                onChange={(e) => setBill(Number(e.target.value))}
                className="mt-5 h-1.5 w-full cursor-pointer appearance-none rounded-full bg-white/15 accent-green"
                style={{
                  background: `linear-gradient(to right, #5FA33F ${sliderPct}%, rgba(255,255,255,0.15) ${sliderPct}%)`,
                }}
              />
              <div className="mt-2 flex justify-between text-[11px] text-white/35">
                <span>Rs. {MIN_BILL.toLocaleString("en-PK")}</span>
                <span>Rs. {MAX_BILL.toLocaleString("en-PK")}+</span>
              </div>

              <div className="mt-8">
                <p className="mb-2.5 text-xs font-medium uppercase tracking-wide text-white/45">Property Type</p>
                <div className="flex gap-2.5">
                  {propertyTypes.map((type) => (
                    <button
                      type="button"
                      key={type}
                      onClick={() => setPropertyType(type)}
                      aria-pressed={propertyType === type}
                      className={`flex-1 rounded-sm border px-4 py-2.5 text-sm font-medium transition-colors focus-ring ${
                        propertyType === type
                          ? "border-green bg-green/15 text-white"
                          : "border-white/15 text-white/60 hover:border-white/30"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <p className="mb-2.5 text-xs font-medium uppercase tracking-wide text-white/45">
                  Backup Requirement
                </p>
                <div className="flex flex-wrap gap-2">
                  {backupOptions.map((opt) => (
                    <button
                      type="button"
                      key={opt.value}
                      onClick={() => setBackup(opt.value)}
                      aria-pressed={backup === opt.value}
                      className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors focus-ring ${
                        backup === opt.value
                          ? "border-green bg-green/15 text-white"
                          : "border-white/15 text-white/60 hover:border-white/30"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="hidden bg-white/10 lg:block" aria-hidden />
            <div className="h-px w-full bg-white/10 lg:hidden" aria-hidden />

            <div className="p-7 md:p-10">
              <CalculatorResult result={result} billInput={String(bill)} propertyType={propertyType} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
