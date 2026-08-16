export type ServiceItem = {
  id: string;
  title: string;
  description: string;
};

export const services: ServiceItem[] = [
  {
    id: "hybrid-systems",
    title: "Hybrid Solar Systems",
    description:
      "Complete hybrid systems that combine solar generation, lithium battery storage and available grid supply, designed around your property's actual load.",
  },
  {
    id: "solar-panels",
    title: "Solar Panels",
    description:
      "Tier-1 A-grade bifacial solar panels, professionally laid out and mounted for maximum rooftop performance.",
  },
  {
    id: "hybrid-inverters",
    title: "Hybrid Inverters",
    description:
      "Smart hybrid inverters that manage solar input, battery charging, grid integration and backup switching.",
  },
  {
    id: "lithium-battery",
    title: "Lithium Battery Storage",
    description:
      "Lithium battery banks with BMS protection to store solar energy and power selected loads during outages.",
  },
  {
    id: "installation",
    title: "Solar Installation",
    description:
      "Mechanical and electrical installation covering structure assembly, panel mounting, AC/DC routing and DB integration.",
  },
  {
    id: "testing-commissioning",
    title: "Testing & Commissioning",
    description:
      "Full system testing, inverter and battery configuration, and verification before handover.",
  },
  {
    id: "after-sales",
    title: "After-Sales Support",
    description:
      "Technical assistance, performance checks and troubleshooting support after your system is switched on.",
  },
];

export const solutionPathways = [
  {
    id: "home",
    title: "Home Solar",
    description: "Reduce electricity expenses while maintaining backup for essential loads.",
    href: "/what-we-do",
  },
  {
    id: "business",
    title: "Business Solar",
    description: "Reduce operating costs and protect business continuity.",
    href: "/what-we-do",
  },
  {
    id: "hybrid",
    title: "Hybrid Solar",
    description:
      "Combine solar generation, battery storage and available grid supply for smarter energy management.",
    href: "/hybrid-solar-systems",
  },
];

export const whyVayani = [
  {
    title: "Custom Engineering",
    description: "Systems tailored around actual energy needs, not fixed packages.",
  },
  {
    title: "Quality Equipment",
    description: "Tier-1 panels and reliable hybrid inverters, lithium batteries.",
  },
  {
    title: "Clean Installation",
    description: "Professional mechanical and electrical workmanship on every site.",
  },
  {
    title: "Complete Commissioning",
    description: "Full testing and configuration before handover.",
  },
  {
    title: "Local Support",
    description: "Karachi-based team, easy to reach by phone or WhatsApp.",
  },
  {
    title: "After-Sales Care",
    description: "Support that continues after your system is switched on.",
  },
];

export const hybridBenefits = [
  {
    title: "Solar Savings",
    description: "Use solar generation to reduce grid consumption during the day.",
  },
  {
    title: "Battery Backup",
    description: "Store energy for selected loads when grid power is unavailable.",
  },
  {
    title: "Smart Energy Management",
    description: "Automatically coordinate solar, battery and available grid power.",
  },
  {
    title: "Flexible System Design",
    description: "Build around your property's actual requirements and roof space.",
  },
  {
    title: "Future Expansion",
    description: "Design scalable systems where compatible equipment allows expansion.",
  },
];

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
  points: string[];
  cta?: { label: string; type: "whatsapp" | "quote" };
};

export const serviceProcess: ProcessStep[] = [
  {
    number: "01",
    title: "Free Site Visit & Consultation",
    description: "Every project begins with a detailed site inspection.",
    points: [
      "Roof space",
      "Shading",
      "Sun exposure",
      "Existing electrical load",
      "Energy consumption",
      "Backup requirements",
    ],
    cta: { label: "Book Free Site Visit", type: "whatsapp" },
  },
  {
    number: "02",
    title: "Custom System Design & Quotation",
    description:
      "No one-size-fits-all packages. We design a system around your property requirements, energy consumption, roof conditions, desired backup and future expansion — then provide a transparent quotation.",
    points: [
      "Property requirements",
      "Energy consumption",
      "Roof conditions",
      "Desired backup",
      "Future expansion requirements",
    ],
  },
  {
    number: "03",
    title: "Equipment Procurement & Delivery",
    description: "We source and deliver the selected equipment for your system.",
    points: [
      "Tier-1 bifacial solar panels",
      "LONGi / Jinko panels",
      "Hybrid inverter",
      "Lithium battery",
      "Mounting structures",
      "Protection equipment",
      "Electrical components",
    ],
  },
  {
    number: "04",
    title: "Professional Installation",
    description: "Our technicians handle mechanical and electrical installation with clean workmanship.",
    points: [
      "Structure assembly",
      "Panel installation",
      "AC/DC routing",
      "DB integration",
      "Inverter installation",
      "Battery setup",
      "Clean cable management",
    ],
  },
  {
    number: "05",
    title: "Testing, Configuration & Handover",
    description: "Before handover, we inspect, test and configure the complete system.",
    points: [
      "Inspect installation",
      "Test electrical system",
      "Configure inverter",
      "Configure battery / BMS",
      "Verify system operation",
      "Explain monitoring & basic operation",
    ],
  },
  {
    number: "06",
    title: "After-Sales Support",
    description: "Solar support doesn't end after installation.",
    points: [
      "Technical assistance",
      "Performance checks",
      "Troubleshooting",
      "Configuration support",
      "Maintenance coordination",
    ],
  },
];
