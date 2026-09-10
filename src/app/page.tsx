"use client";

import React from "react";
import { LogoSvg } from "@/components/Logo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { LinkedInReviewsSection } from "@/components/ui/LinkedInReviewsSection";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  AnimatedCounter,
  HoverCard,
  FAQAccordion,
} from "@/components/animations";
import {
  Building2,
  GraduationCap,
  CheckCircle2,
  Sparkles,
  Briefcase,
  Rocket,
  MessageSquare,
  Send,
  FileSearch,
  Play,
  BookOpen,
  BadgeCheck,
  LifeBuoy,
  ShieldCheck,
  Cpu,
  Wrench,
  Target,
  Phone,
} from "lucide-react";



const businessPoints = [
  "Business Website Development",
  "E-Commerce Solutions",
  "Web Applications & Portals",
  "UI/UX Design Systems",
  "AI & Software Engineering",
  "SEO & Digital Growth",
];

const studentPoints = [
  "10 In-Demand Domains",
  "Real-World Production Projects",
  "1-on-1 Mentor Guidance",
  "Skill & Portfolio Building",
  "Verified Internship Completion",
  "Direct Certificate Verification",
];

const whyChoose = [
  { icon: Cpu, title: "Modern Technology", desc: "We build with the latest frameworks, tools and modern best practices." },
  { icon: Wrench, title: "Practical Projects", desc: "Hands-on work on real production systems that matter, not just theory." },
  { icon: GraduationCap, title: "Student-Friendly Learning", desc: "A supportive path designed for students to grow steadily and build confidence." },
  { icon: Target, title: "Professional Development", desc: "Career-focused growth for both growing enterprises and ambitious learners." },
  { icon: LifeBuoy, title: "Responsive Support", desc: "Fast, helpful technical support and guidance whenever you need it." },
  { icon: ShieldCheck, title: "Secure & Reliable", desc: "Dependable, hardened solutions you can confidently run your business on." },
];

const businessWorkflow = [
  { icon: FileSearch, step: "01", title: "Requirement" },
  { icon: MessageSquare, step: "02", title: "Consultation" },
  { icon: Sparkles, step: "03", title: "Design" },
  { icon: Cpu, step: "04", title: "Development" },
  { icon: ShieldCheck, step: "05", title: "Testing" },
  { icon: Rocket, step: "06", title: "Launch" },
  { icon: LifeBuoy, step: "07", title: "Support" },
];

const internshipWorkflow = [
  { icon: Send, step: "01", title: "Apply" },
  { icon: BadgeCheck, step: "02", title: "Selection" },
  { icon: Play, step: "03", title: "Start Internship" },
  { icon: BookOpen, step: "04", title: "Learn & Build" },
  { icon: MessageSquare, step: "05", title: "Mentor Review" },
  { icon: Target, step: "06", title: "Complete Project" },
  { icon: BadgeCheck, step: "07", title: "Certificate" },
];

const homeFaqs = [
  {
    id: "faq-1",
    question: "What types of internship programs does XORA Technologies offer?",
    answer:
      "We offer project-based internships across 10 specialized domains including Full Stack Web Development, AI & Machine Learning, Mobile App Development, Cloud Computing, UI/UX Design, Cyber Security, and Data Science. Every intern works on real-world projects with dedicated mentorship.",
  },
  {
    id: "faq-2",
    question: "How does the online certificate verification work?",
    answer:
      "Every certificate issued by XORA Technologies contains a unique Certificate ID and QR code. Anyone (including employers and universities) can instantly verify the authenticity, issue date, student name, and domain at our /verify-certificate portal.",
  },
  {
    id: "faq-3",
    question: "What technology services do you build for businesses?",
    answer:
      "We engineer enterprise web applications, high-converting corporate websites, custom e-commerce platforms, AI integration solutions, and scalable cloud architectures tailored to your business needs.",
  },
  {
    id: "faq-4",
    question: "Are the internships suitable for college students and beginners?",
    answer:
      "Yes! Our curriculum is structured with step-by-step guidance, starter templates, and active mentor checkpoints so students at various skill levels can gain practical industry experience.",
  },
];

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-xl py-6" aria-hidden="true">
      {/* Subtle ambient glow */}
      <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-tr from-xora-500/20 via-cyan-500/15 to-transparent blur-3xl" />

      {/* Clean Main Visual without bounding box/border */}
      <div className="relative flex flex-col items-center justify-center p-4">
        <LogoSvg className="mx-auto h-auto w-full max-w-md transition-transform duration-500 hover:scale-[1.02]" />
        <p className="mt-6 text-center font-display text-xs font-bold uppercase tracking-[0.3em] text-navy-400 dark:text-navy-500">
          Innovate · Build · Grow
        </p>
      </div>
    </div>
  );
}


function ExperienceCard({
  icon: Icon,
  title,
  subtitle,
  points,
  ctaLabel,
  ctaHref,
  accent,
  tint,
  badge,
  badgeIcon: BadgeIcon,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
  points: string[];
  ctaLabel: string;
  ctaHref: string;
  accent: string;
  tint: string;
  badge: string;
  badgeIcon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <HoverCard lift={-6} scale={1.01} className="h-full">
      <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-navy-50 bg-white/85 p-7 shadow-card backdrop-blur-md transition-all duration-300 dark:border-navy-800/80 dark:bg-navy-900/85 sm:p-8">
        <div className={`absolute inset-x-0 top-0 h-1.5 ${tint}`} />
        <div className="flex items-center gap-3">
          <span className={`flex h-12 w-12 items-center justify-center rounded-2xl ${tint} ${accent}`}>
            <Icon className="h-6 w-6" />
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-navy-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-navy-600 dark:bg-navy-800 dark:text-navy-300">
            <BadgeIcon className="h-3.5 w-3.5" />
            {badge}
          </span>
        </div>
        <h3 className="mt-5 font-display text-2xl font-bold text-navy-950 dark:text-white">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-navy-500 dark:text-navy-400">{subtitle}</p>
        <ul className="mt-5 grid gap-2.5 flex-1">
          {points.map((point) => (
            <li key={point} className="flex items-center gap-2.5 text-sm text-navy-700 dark:text-navy-300">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-xora-500" />
              {point}
            </li>
          ))}
        </ul>
        <div className="mt-7 pt-2">
          <Button href={ctaHref} variant="navy" className="w-full">
            {ctaLabel}
          </Button>
        </div>
      </div>
    </HoverCard>
  );
}

export default function HomePage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-24 pb-12 lg:pt-28 lg:pb-16">
        <div className="absolute inset-0 grid-light opacity-40 dark:opacity-10" />
        <div className="container-x relative">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="text-center lg:text-left">
              {/* Badge */}
              <FadeIn direction="down" delay={0.1}>
                <div className="inline-flex items-center gap-2 rounded-full border border-xora-200/80 bg-xora-50/80 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-xora-600 backdrop-blur-sm dark:border-xora-900 dark:bg-xora-950/70 dark:text-xora-400">
                  <Sparkles className="h-3.5 w-3.5" />
                  Engineering Intelligent Solutions
                </div>
              </FadeIn>

              {/* Main Headline */}
              <FadeIn direction="up" delay={0.2} className="mt-4">
                <h1 className="font-display font-bold leading-tight text-navy-950 dark:text-white">
                  <span className="block text-4xl sm:text-5xl lg:text-6xl text-navy-950 dark:text-white">
                    Start With Skills.
                  </span>
                  <span className="mt-2 block text-4xl sm:text-5xl lg:text-6xl text-navy-950 dark:text-white">
                    Finish With <span className="text-xora-500">Success.</span>
                  </span>
                  <span className="mt-2 block text-3xl sm:text-4xl lg:text-5xl text-navy-800 dark:text-navy-200 font-semibold">
                    Your Future Starts at{" "}
                    <span className="font-black">
                      <span className="text-xora-500">X</span>
                      <span>ORA</span>
                    </span>
                  </span>
                </h1>
              </FadeIn>

              {/* Description */}
              <FadeIn direction="up" delay={0.3} className="mt-4">
                <p className="mx-auto max-w-xl text-base leading-relaxed text-navy-600 dark:text-navy-300 lg:mx-0">
                  Accelerating digital transformation for modern businesses and empowering aspiring engineers
                  through rigorous, project-centric internship programs.
                </p>
              </FadeIn>

              {/* CTA Buttons */}
              <FadeIn direction="up" delay={0.4} className="mt-6">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
                  <Button href="/business" variant="primary" className="w-full sm:w-auto">
                    Explore Business Solutions
                  </Button>
                  <Button href="/internships" variant="outline" className="w-full sm:w-auto">
                    Explore Student Internships
                  </Button>
                </div>
              </FadeIn>
            </div>

            {/* Hero Visual */}
            <FadeIn direction="up" delay={0.35} duration={0.8}>
              <HeroVisual />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ANIMATED STATISTICS BANNER */}
      <section className="border-y border-navy-100/70 bg-white/70 py-8 backdrop-blur-md dark:border-navy-800 dark:bg-navy-950/60">
        <div className="container-x">
          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:gap-8">
            <StaggerItem className="text-center">
              <p className="font-display text-3xl font-extrabold text-navy-950 dark:text-white sm:text-4xl">
                <AnimatedCounter value={500} suffix="+" />
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-navy-500 dark:text-navy-400">
                Students Enrolled
              </p>
            </StaggerItem>
            <StaggerItem className="text-center">
              <p className="font-display text-3xl font-extrabold text-xora-600 dark:text-xora-400 sm:text-4xl">
                <AnimatedCounter value={100} suffix="+" />
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-navy-500 dark:text-navy-400">
                Projects Completed
              </p>
            </StaggerItem>
            <StaggerItem className="text-center">
              <p className="font-display text-3xl font-extrabold text-navy-950 dark:text-white sm:text-4xl">
                <AnimatedCounter value={10} suffix=" Domains" />
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-navy-500 dark:text-navy-400">
                Specialized Tracks
              </p>
            </StaggerItem>
            <StaggerItem className="text-center">
              <p className="font-display text-3xl font-extrabold text-cyan-600 dark:text-cyan-400 sm:text-4xl">
                <AnimatedCounter value={100} suffix="%" />
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-navy-500 dark:text-navy-400">
                Verifiable Credentials
              </p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* TWO EXPERIENCES */}
      <section id="journey" className="py-12 lg:py-16">
        <div className="container-x">
          <SectionHeading
            eyebrow="Two Experiences"
            title="Choose Your Journey"
            subtitle="Whether you want to grow your business or build your career, Xora has a clear path for you."
          />
          <StaggerContainer staggerDelay={0.15} className="mt-10 grid gap-6 lg:grid-cols-2 lg:gap-8">
            <StaggerItem>
              <ExperienceCard
                icon={Building2}
                title="Business Solutions"
                subtitle="Build your digital presence with modern websites, applications and technology solutions."
                points={businessPoints}
                ctaLabel="Explore Business"
                ctaHref="/business"
                accent="text-navy-700 dark:text-navy-300"
                tint="bg-navy-50 dark:bg-navy-900/90"
                badge="For Businesses"
                badgeIcon={Briefcase}
              />
            </StaggerItem>
            <StaggerItem>
              <ExperienceCard
                icon={GraduationCap}
                title="Student Internships"
                subtitle="Learn practical skills, build projects, receive mentorship and grow your career."
                points={studentPoints}
                ctaLabel="Explore Internships"
                ctaHref="/internships"
                accent="text-xora-600 dark:text-xora-400"
                tint="bg-xora-50 dark:bg-xora-950/70"
                badge="For Students"
                badgeIcon={GraduationCap}
              />
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* HOW IT WORKS — BUSINESS */}
      <section className="py-12 lg:py-16">
        <div className="container-x">
          <SectionHeading
            eyebrow="For Businesses"
            title="Our Engineering Process"
            subtitle="From your first requirement to launch and beyond — a clear, reliable journey."
          />
          <StaggerContainer staggerDelay={0.06} className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-7">
            {businessWorkflow.map((item) => (
              <StaggerItem key={item.title}>
                <HoverCard lift={-4} className="h-full">
                  <div className="relative flex h-full flex-col items-center rounded-2xl border border-navy-50 bg-white/80 p-4 text-center shadow-card backdrop-blur-md dark:border-navy-800/80 dark:bg-navy-900/80">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-950 text-xora-400 transition-transform duration-200 group-hover:scale-110 dark:bg-navy-800">
                      <item.icon className="h-5 w-5" />
                    </span>
                    <span className="mt-2 text-xs font-bold text-xora-500 dark:text-xora-400">{item.step}</span>
                    <h3 className="mt-0.5 text-xs font-semibold text-navy-900 dark:text-white">{item.title}</h3>
                  </div>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* HOW IT WORKS — INTERNSHIP */}
      <section className="py-12 lg:py-16">
        <div className="container-x">
          <SectionHeading
            eyebrow="For Students"
            title="Your Internship Journey"
            subtitle="A structured, mentor-led path from application to verifiable certification."
          />
          <StaggerContainer staggerDelay={0.06} className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-7">
            {internshipWorkflow.map((item) => (
              <StaggerItem key={item.title}>
                <HoverCard lift={-4} className="h-full">
                  <div className="relative flex h-full flex-col items-center rounded-2xl bg-navy-950 p-4 text-center shadow-card dark:border dark:border-navy-800/80 dark:bg-navy-900/90">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-xora-400">
                      <item.icon className="h-5 w-5" />
                    </span>
                    <span className="mt-2 text-xs font-bold text-xora-400">{item.step}</span>
                    <h3 className="mt-0.5 text-xs font-semibold text-white">{item.title}</h3>
                  </div>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* WHY CHOOSE XORA */}
      <section id="why" className="py-12 lg:py-16">
        <div className="container-x">
          <SectionHeading
            eyebrow="Why Xora"
            title="Why Choose Xora"
            subtitle="A technology partner focused on real results for businesses and real growth for students."
          />
          <StaggerContainer staggerDelay={0.08} className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map((item) => (
              <StaggerItem key={item.title}>
                <HoverCard lift={-5} className="h-full">
                  <div className="group h-full rounded-2xl border border-navy-50 bg-white/80 p-6 shadow-card backdrop-blur-md transition-all duration-300 dark:border-navy-800/80 dark:bg-navy-900/80">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-xora-gradient text-white shadow-glow transition-transform duration-200 group-hover:scale-105">
                      <item.icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 font-display text-lg font-semibold text-navy-950 dark:text-white">{item.title}</h3>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-navy-500 dark:text-navy-400">{item.desc}</p>
                  </div>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* LINKEDIN REVIEWS & TESTIMONIALS */}
      <LinkedInReviewsSection />

      {/* FAQ SECTION */}
      <section className="py-12 lg:py-16">
        <div className="container-x">
          <SectionHeading
            eyebrow="Questions & Answers"
            title="Frequently Asked Questions"
            subtitle="Got questions? Here is everything you need to know about our business services and internship programs."
          />
          <FadeIn direction="up" delay={0.2} className="mx-auto mt-10 max-w-3xl">
            <FAQAccordion items={homeFaqs} />
          </FadeIn>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-12 lg:py-16">
        <div className="container-x">
          <FadeIn direction="up" distance={30}>
            <div className="relative overflow-hidden rounded-3xl bg-navy-gradient p-8 text-center sm:p-12 shadow-2xl">
              <div className="absolute inset-0 hero-grid opacity-30" />
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-xora-500/20 blur-3xl" />
              <div className="relative">
                <h2 className="mx-auto max-w-2xl font-display text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                  Ready to Start Your Journey With Xora?
                </h2>
                <p className="mx-auto mt-3 max-w-xl text-sm sm:text-base text-navy-200">
                  Grow your business with modern digital solutions, or launch your career with a
                  practical internship.
                </p>
                <div className="mt-8 flex flex-col justify-center gap-3.5 sm:flex-row">
                  <Button href="/business/contact" variant="white">
                    Request a Quote
                  </Button>
                  <Button href="/internships/apply" variant="outline-light">
                    Apply for Internship
                  </Button>
                </div>
                <div className="mt-8 flex items-center justify-center gap-3 text-xs sm:text-sm text-navy-200">
                  <Phone className="h-4 w-4 text-xora-400" />
                  <a href="tel:+919894279003" className="hover:text-white transition-colors">
                    +91 98942 79003
                  </a>
                  <span className="text-navy-400">·</span>
                  <a
                    href="https://www.xoratechnologies.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    www.xoratechnologies.in
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}