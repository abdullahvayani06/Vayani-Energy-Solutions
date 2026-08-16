import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import PackageCard from "@/components/ui/PackageCard";
import { hybridPackages } from "@/data/packages";

export default function SystemPackages() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-vayani">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="System Packages"
            title="Hybrid solar systems for every energy need."
            description="From small homes to commercial units — every system is engineered around your actual load, not a fixed template."
          />
          <Button href="/hybrid-solar-systems" variant="text" data-cta="packages-view-all" className="shrink-0">
            View full comparison
          </Button>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {hybridPackages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} featured={pkg.id === "6kw"} />
          ))}
        </div>
      </div>
    </section>
  );
}
