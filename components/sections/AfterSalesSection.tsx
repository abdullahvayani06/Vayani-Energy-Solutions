import { LifeBuoy, Gauge, Wrench, Settings, CalendarClock } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { buildWhatsAppLink, whatsappMessages } from "@/data/site";

const support = [
  { title: "Technical Assistance", icon: LifeBuoy },
  { title: "Performance Checks", icon: Gauge },
  { title: "Troubleshooting", icon: Wrench },
  { title: "Configuration Support", icon: Settings },
  { title: "Maintenance Coordination", icon: CalendarClock },
];

export default function AfterSalesSection() {
  return (
    <section id="after-sales" className="bg-off-white py-20 md:py-28">
      <div className="container-vayani">
        <SectionHeading
          eyebrow="After-Sales Support"
          title="Solar support doesn't end after installation."
          description="Our team stays available after your system is switched on — for technical assistance, performance checks and troubleshooting support."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {support.map((item) => (
            <div key={item.title} className="rounded-sm border border-border-brand bg-white p-6 text-center">
              <item.icon className="mx-auto h-6 w-6 text-green-dark" aria-hidden strokeWidth={1.5} />
              <p className="mt-3 text-sm font-medium text-navy">{item.title}</p>
            </div>
          ))}
        </div>

        <Button
          href={buildWhatsAppLink(whatsappMessages.general)}
          variant="text"
          data-cta="after-sales-contact"
          className="mt-8"
        >
          Contact Our Support Team
        </Button>
      </div>
    </section>
  );
}
