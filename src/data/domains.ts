import {
  Code2,
  Smartphone,
  BrainCircuit,
  BarChart3,
  PenTool,
  ShieldCheck,
  Cloud,
  Megaphone,
  Briefcase,
  Palette,
  type LucideIcon,
} from "lucide-react";

export type Domain = {
  slug: string;
  title: string;
  emoji: string;
  image: string;
  icon: LucideIcon;
  description: string;
  skills: string[];
  duration: string;
};

export const domains: Domain[] = [
  {
    slug: "web-development",
    title: "Web Development",
    emoji: "💻",
    image: "/domains/web-development.jpg",
    icon: Code2,
    description:
      "Build modern, responsive websites and web applications using the latest front-end and back-end technologies, working on real client-style projects.",
    skills: ["HTML, CSS, JavaScript", "React", "Node.js", "Tailwind CSS"],
    duration: "4–8 Weeks",
  },
  {
    slug: "app-development",
    title: "App Development",
    emoji: "📱",
    image: "/domains/app-development.jpg",
    icon: Smartphone,
    description:
      "Design and develop mobile applications for Android and iOS, learning the full app lifecycle from idea to deployment.",
    skills: ["Flutter", "React Native", "UI components", "App deployment"],
    duration: "6–12 Weeks",
  },
  {
    slug: "ai-machine-learning",
    title: "AI & Machine Learning",
    emoji: "🤖",
    image: "/domains/ai-machine-learning.jpg",
    icon: BrainCircuit,
    description:
      "Learn machine learning fundamentals and build practical AI models and automation projects with hands-on guidance.",
    skills: ["Python", "Machine Learning", "Data Modelling", "LLMs"], 
    duration: "8–12 Weeks",
  },
  {
    slug: "data-science",
    title: "Data Science & Analytics",
    emoji: "📊",
    image: "/domains/data-science.jpg",
    icon: BarChart3,
    description:
      "Work with real datasets to analyse, visualise and draw insights that help make data-driven decisions.",
    skills: ["Python", "Pandas", "Power BI", "Data Visualisation"],
    duration: "6–10 Weeks",
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    emoji: "🎨",
    image: "/domains/ui-ux-design.jpg",
    icon: PenTool,
    description:
      "Create clean, user-centred designs with a focus on usability, prototyping and modern design tools.",
    skills: ["Figma", "Wireframing", "Prototyping", "Design Systems"],
    duration: "4–8 Weeks",
  },
  {
    slug: "cyber-security",
    title: "Cyber Security",
    emoji: "🛡️",
    image: "/domains/cyber-security.jpg",
    icon: ShieldCheck,
    description:
      "Explore security fundamentals, ethical hacking and best practices to protect systems and data.",
    skills: ["Network Security", "Ethical Hacking", "Vulnerability", "Security Tools"],
    duration: "6–12 Weeks",
  },
  {
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    emoji: "☁️",
    image: "/domains/cloud-devops.jpg",
    icon: Cloud,
    description:
      "Learn cloud platforms, CI/CD pipelines and deployment workflows used by modern development teams.",
    skills: ["AWS / Azure", "Docker", "CI/CD", "Deployment"],
    duration: "6–10 Weeks",
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    emoji: "📣",
    image: "/domains/digital-marketing.jpg",
    icon: Megaphone,
    description:
      "Learn SEO, social media and campaign management to grow brands and reach the right audience online.",
    skills: ["SEO", "Social Media", "Content Marketing", "Analytics"],
    duration: "4–8 Weeks",
  },
  {
    slug: "business-hr",
    title: "Business & HR",
    emoji: "💼",
    image: "/domains/business-hr.jpg",
    icon: Briefcase,
    description:
      "Understand business operations, human resource processes and management with practical corporate exposure.",
    skills: ["Business Operations", "HR Processes", "Communication", "Recruitment"],
    duration: "4–8 Weeks",
  },
  {
    slug: "content-creative",
    title: "Content & Creative",
    emoji: "✨",
    image: "/domains/content-creative.jpg",
    icon: Palette,
    description:
      "Develop content writing, copywriting and creative skills to produce engaging material across platforms.",
    skills: ["Writing", "Copywriting", "Editing", "Creative Design"],
    duration: "4–8 Weeks",
  },
];
