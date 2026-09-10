export interface FAQItem {
  id: string;
  category: "all" | "internships" | "services" | "certificates" | "general";
  question: string;
  answer: string;
}

export const FAQ_DATA: FAQItem[] = [
  {
    id: "faq-1",
    category: "internships",
    question: "What types of internship programs does XORA Technologies offer?",
    answer:
      "We offer project-based internships across 10 specialized domains including Full Stack Web Development, AI & Machine Learning, Mobile App Development, Cloud Computing, UI/UX Design, Cyber Security, and Data Science. Every intern works on real-world projects with dedicated mentorship.",
  },
  {
    id: "faq-2",
    category: "certificates",
    question: "How does the online certificate verification work?",
    answer:
      "Every certificate issued by XORA Technologies contains a unique Certificate ID and QR code. Anyone (including employers and universities) can instantly verify the authenticity, issue date, student name, and domain at our /verify-certificate portal.",
  },
  {
    id: "faq-3",
    category: "services",
    question: "What technology services do you build for businesses?",
    answer:
      "We engineer enterprise web applications, high-converting corporate websites, custom e-commerce platforms, AI integration solutions, and scalable cloud architectures tailored to your business needs.",
  },
  {
    id: "faq-4",
    category: "internships",
    question: "Are the internships suitable for college students and beginners?",
    answer:
      "Yes! Our curriculum is structured with step-by-step guidance, starter templates, and active mentor checkpoints so students at various skill levels can gain practical industry experience.",
  },
  {
    id: "faq-5",
    category: "internships",
    question: "What is the duration of the internship programs?",
    answer:
      "Our internships typically range from 1 month (4 weeks) to 3 months, depending on the chosen track and student availability. The schedule is designed to be student-friendly and flexible alongside college coursework.",
  },
  {
    id: "faq-6",
    category: "internships",
    question: "Will I receive real-world project tasks and mentor code reviews?",
    answer:
      "Yes. You will be assigned practical tasks and milestone deliverables. Our technical mentors review your GitHub repository code, offer constructive architecture suggestions, and guide you through debugging.",
  },
  {
    id: "faq-7",
    category: "services",
    question: "How do I request a quote for my business project?",
    answer:
      "You can fill out our Business Enquiry form at /business/contact or connect with our technical consulting team via WhatsApp or phone. We will discuss your project scope and provide a detailed timeline and proposal within 24 hours.",
  },
  {
    id: "faq-8",
    category: "certificates",
    question: "Is the certificate recognized for college credits and job applications?",
    answer:
      "Yes! XORA Technologies certificates are verified corporate credentials with an online verification ID that you can attach to your resume, LinkedIn profile, and submit to university academic departments for internship credits.",
  },
  {
    id: "faq-9",
    category: "general",
    question: "How can I contact technical support or speak with a mentor?",
    answer:
      "You can reach out directly via WhatsApp at +91 98942 79003, call our office, or submit your doubt directly through this Help & FAQ modal.",
  },
];
