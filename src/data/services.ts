import {
  Globe,
  ShoppingCart,
  LayoutDashboard,
  Smartphone,
  Brain,
  PenTool,
  Search,
  Megaphone,
  Mail,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  icon: LucideIcon;
  description: string;
  points: string[];
};

export const services: Service[] = [
  {
    slug: "website-development",
    title: "Business Website Development",
    icon: Globe,
    description:
      "Professional, fast and mobile-friendly websites that give your business a strong online presence and build customer trust.",
    points: ["Responsive design", "Fast loading", "SEO-ready structure", "Contact integration"],
  },
  {
    slug: "ecommerce",
    title: "E-Commerce Development",
    icon: ShoppingCart,
    description:
      "Powerful online stores with secure payments, product management and a smooth shopping experience for your customers.",
    points: ["Product catalog", "Cart & checkout", "Payment gateway", "Order management"],
  },
  {
    slug: "web-applications",
    title: "Web Application Development",
    icon: LayoutDashboard,
    description:
      "Custom web applications and portals built to streamline your business operations and workflows.",
    points: ["Custom features", "Dashboards", "Data management", "Integrations"],
  },
  {
    slug: "mobile-apps",
    title: "Mobile App Development",
    icon: Smartphone,
    description:
      "Cross-platform mobile apps that let you connect with customers anytime, anywhere on their devices.",
    points: ["iOS & Android", "Modern UI", "Push notifications", "App store-ready"],
  },
  {
    slug: "ai-solutions",
    title: "AI & Machine Learning Solutions",
    icon: Brain,
    description:
      "Intelligent automation, chat assistants and data-driven solutions that make your business smarter.",
    points: ["AI chatbots", "Process automation", "Analytics insights", "Smart decision tools"],
  },
  {
    slug: "uiux-design",
    title: "UI/UX Design",
    icon: PenTool,
    description:
      "Clean, user-friendly interfaces designed around your customers for better engagement and conversions.",
    points: ["Wireframes", "Prototypes", "Brand-aligned design", "Usability focus"],
  },
  {
    slug: "seo",
    title: "SEO Optimization",
    icon: Search,
    description:
      "Improve your website's search rankings and get found by more customers looking for your services.",
    points: ["Keyword strategy", "On-page SEO", "Performance tuning", "Search visibility"],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    icon: Megaphone,
    description:
      "Reach your audience through search, social media and content marketing that drives real results.",
    points: ["Social media", "Content strategy", "Ads management", "Campaign tracking"],
  },
  {
    slug: "business-email",
    title: "Business Email Setup",
    icon: Mail,
    description:
      "Professional email addresses with your business domain for a credible and trustworthy brand image.",
    points: ["Domain email", "Secure setup", "Easy management", "Spam protection"],
  },
  {
    slug: "website-maintenance",
    title: "Website Maintenance",
    icon: Wrench,
    description:
      "Keep your website secure, updated and running smoothly with reliable ongoing maintenance support.",
    points: ["Security updates", "Backups", "Content updates", "Performance checks"],
  },
];
