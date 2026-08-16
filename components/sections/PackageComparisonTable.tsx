import { CheckCircle2 } from "lucide-react";
import Button from "@/components/ui/Button";
import PackageCard from "@/components/ui/PackageCard";
import { hybridPackages } from "@/data/packages";

const rows: { label: string; key: keyof (typeof hybridPackages)[number] }[] = [
  { label: "System Capacity", key: "name" },
  { label: "Typical Application", key: "propertyType" },
  { label: "Panel Quantity", key: "panelQuantity" },
  { label: "Panel Type", key: "panelModel" },
  { label: "Hybrid Inverter", key: "inverter" },
  { label: "Lithium Storage", key: "batteryCapacity" },
  { label: "Backup", key: "backup" },
  { label: "Monitoring", key: "monitoring" },
  { label: "Installation", key: "installation" },
];

export default function PackageComparisonTable() {
  return (
    <div>
      {/* Desktop comparison table */}
      <div className="hidden overflow-x-auto rounded-sm border border-border-brand lg:block">
        <table className="w-full min-w-[900px] border-collapse text-sm">
          <thead>
            <tr className="bg-navy text-white">
              <th className="sticky left-0 bg-navy px-5 py-4 text-left font-medium w-48">Specification</th>
              {hybridPackages.map((pkg) => (
                <th key={pkg.id} className="px-5 py-4 text-left font-medium whitespace-nowrap">
                  {pkg.sizeKw}KW Hybrid
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={row.label} className={i % 2 === 0 ? "bg-white" : "bg-off-white"}>
                <td className="sticky left-0 bg-inherit px-5 py-4 font-medium text-navy">{row.label}</td>
                {hybridPackages.map((pkg) => (
                  <td key={pkg.id} className="px-5 py-4 text-navy/80 align-top">
                    {String(pkg[row.key])}
                  </td>
                ))}
              </tr>
            ))}
            <tr className="bg-white">
              <td className="sticky left-0 bg-white px-5 py-4 font-medium text-navy">After-Sales Support</td>
              {hybridPackages.map((pkg) => (
                <td key={pkg.id} className="px-5 py-4 align-top">
                  <CheckCircle2 className="h-4 w-4 text-green-dark" aria-hidden />
                </td>
              ))}
            </tr>
            <tr className="bg-off-white">
              <td className="sticky left-0 bg-off-white px-5 py-4 font-medium text-navy">Get Quote</td>
              {hybridPackages.map((pkg) => (
                <td key={pkg.id} className="px-5 py-4">
                  <Button href="/contact#quote" variant="text" data-cta={`compare-${pkg.id}-quote`}>
                    Request Price
                  </Button>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      {/* Mobile stacked selector */}
      <div className="grid gap-5 sm:grid-cols-2 lg:hidden">
        {hybridPackages.map((pkg) => (
          <PackageCard key={pkg.id} pkg={pkg} />
        ))}
      </div>
    </div>
  );
}
