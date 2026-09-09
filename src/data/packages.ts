export type Package = {
  name: string;
  price: string;
  priceNote?: string;
  popular?: boolean;
  features: string[];
};

export const packages: Package[] = [
  {
    name: "Basic",
    price: "₹4,999",
    features: [
      "Domain + Hosting (1 Year)",
      "Mobile Friendly Design",
      "WhatsApp Chat Integration",
      "Basic SEO Setup",
    ],
  },
  {
    name: "Standard",
    price: "₹5,999",
    popular: true,
    features: [
      "Domain + Hosting (1 Year)",
      "Business Email Setup",
      "Mobile Friendly Design",
      "WhatsApp Chat Integration",
      "Enquiry Form",
      "Basic SEO Setup",
    ],
  },
  {
    name: "Premium",
    price: "₹7,499",
    features: [
      "Domain + Hosting (1 Year)",
      "Business Email Setup",
      "Mobile Friendly Design",
      "WhatsApp Chat Integration",
      "Enquiry Form + Lead Management",
      "Advanced SEO Setup",
      "Speed Optimization + Security",
    ],
  },
];
