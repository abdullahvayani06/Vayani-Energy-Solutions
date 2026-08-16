export type ProjectCategory =
  | "Residential"
  | "Commercial"
  | "Hybrid"
  | "Solar Structures"
  | "DB & Electrical Work"
  | "Battery Storage";

export type Project = {
  slug: string;
  title: string;
  area: string;
  capacity: string;
  systemType: string;
  category: ProjectCategory;
  panelModel: string;
  inverter: string;
  battery: string;
  installationDate: string;
  description: string;
  /** Path to a real project photo. Leave empty to fall back to a
   * placeholder tile — replace with real photography as it becomes
   * available. Never label a stock photo as a Vayani project. */
  images: string[];
};

/**
 * CMS-ready project data. `images` is intentionally empty for every entry
 * below since no real Vayani project photography has been supplied yet —
 * the UI renders a clearly-marked placeholder tile instead. Add image paths
 * (e.g. "/projects/dha-6kw-1.jpg") as real photos are provided.
 */
export const projects: Project[] = [
  {
    slug: "dha-phase-6-residence-6kw-hybrid",
    title: "DHA Phase 6 Residence — 6KW Hybrid",
    area: "DHA Phase 6, Karachi",
    capacity: "6KW",
    systemType: "Hybrid Solar System",
    category: "Hybrid",
    panelModel: "Tier-1 bifacial solar panel",
    inverter: "Hybrid inverter, residential range",
    battery: "Lithium battery, extended capacity",
    installationDate: "2026",
    description:
      "A rooftop hybrid installation designed to cover daytime household load and keep essential circuits running during outages.",
    images: [],
  },
  {
    slug: "clifton-bungalow-4-2kw-hybrid",
    title: "Clifton Bungalow — 4.2KW Hybrid",
    area: "Clifton, Karachi",
    capacity: "4.2KW",
    systemType: "Hybrid Solar System",
    category: "Residential",
    panelModel: "Tier-1 bifacial solar panel",
    inverter: "Hybrid inverter, residential range",
    battery: "Lithium battery, standard capacity",
    installationDate: "2026",
    description: "A mid-size residential system with clean rooftop panel mounting and a neatly integrated DB.",
    images: [],
  },
  {
    slug: "gulshan-e-iqbal-retail-outlet-8kw",
    title: "Gulshan-e-Iqbal Retail Outlet — 8KW",
    area: "Gulshan-e-Iqbal, Karachi",
    capacity: "8KW",
    systemType: "Commercial Hybrid System",
    category: "Commercial",
    panelModel: "Tier-1 bifacial solar panel",
    inverter: "Hybrid inverter, commercial-capable range",
    battery: "Lithium battery, high capacity",
    installationDate: "2025",
    description: "A commercial installation designed around daytime retail load and refrigeration equipment.",
    images: [],
  },
  {
    slug: "korangi-industrial-unit-10kw",
    title: "Korangi Industrial Unit — 10KW",
    area: "Korangi Industrial Area, Karachi",
    capacity: "10KW",
    systemType: "Commercial Hybrid System",
    category: "Commercial",
    panelModel: "Tier-1 bifacial solar panel",
    inverter: "Hybrid inverter, commercial range",
    battery: "Lithium battery, high capacity, expandable",
    installationDate: "2025",
    description: "An elevated structure installation supporting production equipment during peak daytime hours.",
    images: [],
  },
  {
    slug: "north-nazimabad-elevated-structure",
    title: "North Nazimabad — Elevated Solar Structure",
    area: "North Nazimabad, Karachi",
    capacity: "3KW",
    systemType: "Solar Structure & Panel Mounting",
    category: "Solar Structures",
    panelModel: "Tier-1 bifacial solar panel",
    inverter: "Hybrid inverter, residential range",
    battery: "Lithium battery, entry capacity",
    installationDate: "2025",
    description: "An elevated mounting structure engineered for a shaded rooftop with limited flat space.",
    images: [],
  },
  {
    slug: "pechs-db-electrical-integration",
    title: "PECHS — DB & Electrical Integration",
    area: "PECHS, Karachi",
    capacity: "6KW",
    systemType: "Electrical Routing & DB Integration",
    category: "DB & Electrical Work",
    panelModel: "Tier-1 bifacial solar panel",
    inverter: "Hybrid inverter, residential range",
    battery: "Lithium battery, extended capacity",
    installationDate: "2025",
    description: "Clean AC/DC routing and DB integration with a phase selector for seamless grid-to-backup switching.",
    images: [],
  },
];
