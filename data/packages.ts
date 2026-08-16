export type HybridPackage = {
  id: string;
  sizeKw: number;
  name: string;
  propertyType: string;
  loadCategory: string;
  panelQuantity: string;
  panelModel: string;
  inverter: string;
  batteryCapacity: string;
  backup: string;
  monitoring: string;
  installation: string;
};

export const hybridPackages: HybridPackage[] = [
  {
    id: "3kw",
    sizeKw: 3,
    name: "3KW Hybrid",
    propertyType: "Small home / apartment",
    loadCategory: "Lights, fans, fridge, router, TV",
    panelQuantity: "6 panels (approx.)",
    panelModel: "Tier-1 bifacial solar panel",
    inverter: "Hybrid inverter, residential range",
    batteryCapacity: "Lithium battery, entry capacity",
    backup: "Essential loads",
    monitoring: "App / display monitoring",
    installation: "Structure, mounting, wiring, DB integration included",
  },
  {
    id: "4-2kw",
    sizeKw: 4.2,
    name: "4.2KW Hybrid",
    propertyType: "Mid-size home",
    loadCategory: "Multiple ACs, fridge, washing machine",
    panelQuantity: "8–9 panels (approx.)",
    panelModel: "Tier-1 bifacial solar panel",
    inverter: "Hybrid inverter, residential range",
    batteryCapacity: "Lithium battery, standard capacity",
    backup: "Essential loads",
    monitoring: "App / display monitoring",
    installation: "Structure, mounting, wiring, DB integration included",
  },
  {
    id: "6kw",
    sizeKw: 6,
    name: "6KW Hybrid",
    propertyType: "Large home / small office",
    loadCategory: "Multiple ACs, water pump, home appliances",
    panelQuantity: "12–13 panels (approx.)",
    panelModel: "Tier-1 bifacial solar panel",
    inverter: "Hybrid inverter, residential / light-commercial range",
    batteryCapacity: "Lithium battery, extended capacity",
    backup: "Essential to extended loads",
    monitoring: "App / display monitoring",
    installation: "Structure, mounting, wiring, DB integration included",
  },
  {
    id: "8kw",
    sizeKw: 8,
    name: "8KW Hybrid",
    propertyType: "Large home / commercial unit",
    loadCategory: "Heavy AC load, shop or clinic equipment",
    panelQuantity: "16–17 panels (approx.)",
    panelModel: "Tier-1 bifacial solar panel",
    inverter: "Hybrid inverter, commercial-capable range",
    batteryCapacity: "Lithium battery, high capacity",
    backup: "Extended loads",
    monitoring: "App / display monitoring",
    installation: "Structure, mounting, wiring, DB integration included",
  },
  {
    id: "10kw",
    sizeKw: 10,
    name: "10KW Hybrid",
    propertyType: "Commercial / industrial unit",
    loadCategory: "High daytime load, production equipment",
    panelQuantity: "20+ panels (approx.)",
    panelModel: "Tier-1 bifacial solar panel",
    inverter: "Hybrid inverter, commercial range",
    batteryCapacity: "Lithium battery, high capacity, expandable",
    backup: "Extended loads",
    monitoring: "App / display monitoring",
    installation: "Structure, mounting, wiring, DB integration included",
  },
];
