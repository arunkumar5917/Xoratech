export interface LinkedInReview {
  id: string;
  name: string;
  role: string;
  companyOrCollege: string;
  avatar: string;
  avatarBg: string;
  category: "internship" | "business";
  domain: string;
  timeAgo: string;
  content: string;
  highlight: string;
  tags: string[];
  likes: number;
  comments: number;
  reposts: number;
  rating: number;
  verifiedCertificateId?: string;
  linkedinUrl: string;
}

export const linkedInReviews: LinkedInReview[] = [
  {
    id: "review-1",
    name: "Sneha Ramanathan",
    role: "Full Stack Developer Intern ➔ SDE-1",
    companyOrCollege: "Kongu Engineering College",
    avatar: "SR",
    avatarBg: "from-purple-500 to-indigo-600",
    category: "internship",
    domain: "Full Stack Web Development",
    timeAgo: "2d • 🌐",
    content:
      "Excited to share that I have successfully completed my 1-month intensive Full Stack Web Development Internship at XORA TECHNOLOGIES! 🚀\n\nDuring this tenure, I worked on real-world Next.js, Supabase, and REST API architectures under exceptional mentor guidance. The hands-on project reviews and direct code feedback elevated my technical standards significantly.\n\nBig thanks to the entire Xora tech team for this practical journey! Verified my certificate on their portal seamlessly.",
    highlight: "Hands-on project reviews and direct code feedback elevated my technical standards significantly.",
    tags: ["#XORATechnologies", "#FullStack", "#NextJS", "#InternshipCompletion", "#WebDev", "#TechCareer"],
    likes: 184,
    comments: 32,
    reposts: 14,
    rating: 5,
    verifiedCertificateId: "XORA-FS-2024-8842",
    linkedinUrl: "https://www.linkedin.com/company/xora-technologies",
  },
  {
    id: "review-2",
    name: "Karthik Vijay",
    role: "Founder & Product Lead",
    companyOrCollege: "Zenith Retail Solutions",
    avatar: "KV",
    avatarBg: "from-blue-600 to-cyan-600",
    category: "business",
    domain: "E-Commerce & Custom Web App",
    timeAgo: "5d • 🌐",
    content:
      "Partnering with XORA TECHNOLOGIES to build our business e-commerce platform and inventory sync system was one of our best operational decisions this year. 💼✨\n\nTheir engineering team delivered high-performance web applications with clean UI, sub-second load times, and flawless mobile responsiveness. Professional communication, on-time delivery, and 24/7 post-launch support. Highly recommended for any business going digital!",
    highlight: "Delivered high-performance web applications with clean UI, sub-second load times, and flawless mobile responsiveness.",
    tags: ["#BusinessGrowth", "#DigitalTransformation", "#XORATechnologies", "#WebDevelopment", "#ClientSuccess"],
    likes: 216,
    comments: 41,
    reposts: 22,
    rating: 5,
    linkedinUrl: "https://www.linkedin.com/company/xora-technologies",
  },
  {
    id: "review-3",
    name: "Aravind Swaminathan",
    role: "AI & Machine Learning Intern",
    companyOrCollege: "PSG College of Technology",
    avatar: "AS",
    avatarBg: "from-rose-500 to-orange-500",
    category: "internship",
    domain: "Artificial Intelligence & ML",
    timeAgo: "1w • 🌐",
    content:
      "Thrilled to share my experience completing the AI & Machine Learning internship at XORA TECHNOLOGIES! 🧠🤖\n\nWe didn't just study theoretical models — we built end-to-end predictive pipelines, trained vision models, and deployed inference APIs to production. The 1-on-1 mentorship made complex ML workflows approachable and industry-grade. Proud to showcase my verified certificate!",
    highlight: "We built end-to-end predictive pipelines, trained vision models, and deployed inference APIs to production.",
    tags: ["#ArtificialIntelligence", "#MachineLearning", "#Python", "#XORATech", "#DataScience"],
    likes: 156,
    comments: 28,
    reposts: 9,
    rating: 5,
    verifiedCertificateId: "XORA-AIML-2024-5109",
    linkedinUrl: "https://www.linkedin.com/company/xora-technologies",
  },
  {
    id: "review-4",
    name: "Pooja Venkatesh",
    role: "UI/UX Design Intern ➔ Product Designer",
    companyOrCollege: "Sri Krishna College of Technology",
    avatar: "PV",
    avatarBg: "from-emerald-500 to-teal-600",
    category: "internship",
    domain: "UI / UX Design",
    timeAgo: "1w • 🌐",
    content:
      "Grateful for the incredible learning curve during my UI/UX Design internship at XORA TECHNOLOGIES! 🎨✨\n\nFrom user research and wireframing in Figma to building responsive design tokens and component systems, this program gave me portfolio-ready case studies. I received continuous constructive critique on usability, micro-interactions, and accessibility.",
    highlight: "This program gave me portfolio-ready case studies and continuous constructive critique on usability.",
    tags: ["#UIDesign", "#UXResearch", "#Figma", "#XORATechnologies", "#ProductDesign"],
    likes: 198,
    comments: 36,
    reposts: 17,
    rating: 5,
    verifiedCertificateId: "XORA-UIUX-2024-3401",
    linkedinUrl: "https://www.linkedin.com/company/xora-technologies",
  },
  {
    id: "review-5",
    name: "Dinesh Kumar",
    role: "Managing Director",
    companyOrCollege: "Apex Logistics & Supply Chain",
    avatar: "DK",
    avatarBg: "from-indigo-600 to-blue-800",
    category: "business",
    domain: "Custom Business Portal & SEO",
    timeAgo: "2w • 🌐",
    content:
      "XORA TECHNOLOGIES modernized our company's corporate identity and dispatch portal. The speed and quality of their engineering exceeded our expectations. Our organic search leads jumped by 140% within the first 60 days following the SEO optimization and redesign. Kudos to the Xora team! 📈👏",
    highlight: "Our organic search leads jumped by 140% within the first 60 days following the SEO optimization and redesign.",
    tags: ["#WebDevelopment", "#BusinessGrowth", "#SEOSuccess", "#XORATechnologies"],
    likes: 142,
    comments: 19,
    reposts: 11,
    rating: 5,
    linkedinUrl: "https://www.linkedin.com/company/xora-technologies",
  },
  {
    id: "review-6",
    name: "Manojkumar S.",
    role: "Cloud & DevOps Intern",
    companyOrCollege: "Government College of Technology, Coimbatore",
    avatar: "MS",
    avatarBg: "from-cyan-500 to-blue-700",
    category: "internship",
    domain: "Cloud Computing & DevOps",
    timeAgo: "3w • 🌐",
    content:
      "A rewarding month of learning at XORA TECHNOLOGIES! ☁️⚡\n\nHands-on tasks with Docker containerization, CI/CD automated deployment pipelines, and cloud hosting architecture gave me the exact practical exposure employers look for. The certificate ID verified right away on their verification tool.",
    highlight: "Hands-on tasks with Docker containerization and CI/CD pipelines gave me the exact exposure employers look for.",
    tags: ["#DevOps", "#CloudComputing", "#Docker", "#CICD", "#XORATechnologies"],
    likes: 173,
    comments: 24,
    reposts: 13,
    rating: 5,
    verifiedCertificateId: "XORA-CLOUD-2024-1189",
    linkedinUrl: "https://www.linkedin.com/company/xora-technologies",
  },
];
