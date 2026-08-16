import { Cable, PanelTop, GitBranch, Cpu } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import PlaceholderPhoto from "@/components/ui/PlaceholderPhoto";
import Button from "@/components/ui/Button";

const scope = [
  "On-site assembly",
  "Elevated or floor-mounted structure installation",
  "Panel mounting",
  "AC electrical routing",
  "DC electrical routing",
  "DB box integration",
  "Phase selector setup",
  "Inverter setup",
  "Battery / BMS setup",
  "System testing",
  "Complete commissioning",
];

const gallery = [
  { label: "Solar structure installation", icon: PanelTop },
  { label: "Clean cable routing", icon: Cable },
  { label: "DB box integration", icon: GitBranch },
  { label: "Inverter & battery setup", icon: Cpu },
];

export default function InstallationSection() {
  return (
    <section id="installation" className="bg-green-light py-20 md:py-28">
      <div className="container-vayani">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Installation Craftsmanship"
              title="Professional installation, from rooftop to DB."
              description="Quality workmanship is what separates a solar system that lasts from one that doesn't. Our technicians handle every stage of the mechanical and electrical build."
            />

            <ul className="mt-8 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {scope.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-navy/80">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-dark" />
                  {item}
                </li>
              ))}
            </ul>

            <Button href="/what-we-do#installation" variant="secondary" data-cta="installation-learn-more" className="mt-8">
              See Our Installation Process
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {gallery.map((item) => (
              <div key={item.label} className="h-40 sm:h-48">
                <PlaceholderPhoto label={item.label} icon={item.icon} tone="navy" compact />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
