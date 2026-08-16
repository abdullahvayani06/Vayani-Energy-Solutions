export const site = {
  name: "Vayani Energy Solutions",
  shortName: "Vayani Energy",
  tagline: "Powering a Brighter Pakistan.",
  statement: "Innovation for a Sustainable Future",
  description:
    "Vayani Energy Solutions designs, installs and commissions hybrid solar systems, Tier-1 solar panels, smart inverters and lithium battery storage for homes and businesses in Karachi.",
  url: "https://www.vayanienergysolutions.com",
  phoneDisplay: "0321-2912728",
  phoneHref: "tel:+923212912728",
  whatsappNumber: "923212912728",
  email: "vayanienergysolutions@gmail.com",
  emailHref: "mailto:vayanienergysolutions@gmail.com",
  city: "Karachi",
  region: "Sindh",
  country: "Pakistan",
  serviceArea: "Karachi, Pakistan",
} as const;

export function buildWhatsAppLink(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${site.whatsappNumber}?text=${encoded}`;
}

export const whatsappMessages = {
  general: "Hi Vayani Energy Solutions, I would like to get a free solar estimate.",
  hybrid:
    "Hi Vayani Energy Solutions, I'm interested in a hybrid solar system for my property. Could you share more details?",
  siteVisit: "Hi Vayani Energy Solutions, I would like to book a free site visit.",
  project: (title: string) =>
    `Hi Vayani Energy Solutions, I saw the "${title}" project on your website and would like a similar system.`,
  package: (name: string) =>
    `Hi Vayani Energy Solutions, I would like a custom quote for the ${name} hybrid solar system.`,
  calculator: (bill: string, systemLabel: string, propertyType?: string) =>
    `Hi Vayani Energy Solutions, my monthly electricity bill is approximately Rs. ${bill}. Your website suggested a ${systemLabel}${
      propertyType ? ` for my ${propertyType.toLowerCase()}` : ""
    }. I would like an exact quotation.`,
};
