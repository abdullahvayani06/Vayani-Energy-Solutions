export type ProductCategory = {
  id: string;
  title: string;
  summary: string;
  points: string[];
  brands?: string[];
  specs?: { label: string; value: string }[];
};

export const productCategories: ProductCategory[] = [
  {
    id: "solar-panels",
    title: "Solar Panels",
    summary:
      "Tier-1 A-Grade bifacial solar panels selected for high efficiency and strong long-term performance on demanding rooftop installations.",
    points: [
      "High efficiency cells",
      "Bifacial energy generation",
      "Strong long-term performance",
      "Professional mounting and layout design",
    ],
    brands: ["LONGi Hi-MO X10", "Jinko"],
  },
  {
    id: "hybrid-inverters",
    title: "Hybrid Inverters",
    summary:
      "Smart hybrid inverters that manage solar input, battery charging, grid integration, backup switching and system monitoring.",
    points: [
      "Solar management",
      "Grid integration",
      "Battery charging",
      "Backup operation",
      "Monitoring",
    ],
    specs: [
      { label: "Power range", value: "1.2KW – 50KW" },
      { label: "Protection class", value: "IP66 / IP65 / IP20 (model dependent)" },
      { label: "PV input range", value: "2,200 – 65,000 (model dependent)" },
    ],
  },
  {
    id: "lithium-batteries",
    title: "Lithium Batteries",
    summary:
      "Lithium battery storage with BMS protection, sized to your backup requirement and expandable where compatible equipment allows.",
    points: [
      "Backup during outages",
      "Energy storage",
      "BMS integration",
      "Expandable capacity where supported",
      "Hybrid solar compatibility",
    ],
    specs: [
      { label: "Voltage range", value: "25.6V – 51.2V" },
      { label: "Capacity range", value: "100AH – 628AH" },
    ],
  },
  {
    id: "solar-structures",
    title: "Solar Structures",
    summary: "Elevated and floor-mounted structures engineered for secure, long-term panel installation.",
    points: ["Elevated mounting", "Floor-mounted structures", "Corrosion-resistant materials", "Site-specific design"],
  },
  {
    id: "electrical-protection",
    title: "Electrical & Protection",
    summary: "DB boxes, phase selectors and protection equipment integrated cleanly into your existing electrical system.",
    points: ["DB box integration", "Phase selector setup", "AC & DC protection", "Clean cable routing"],
  },
];
