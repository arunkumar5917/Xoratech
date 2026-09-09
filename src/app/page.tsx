import type { Metadata } from "next";
import Image from "next/image";
import { LogoSvg } from "@/components/Logo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { domains } from "@/data/domains";
import { services } from "@/data/services";
import { APP_NAME } from "@/lib/utils";
import {
  Building2,
  GraduationCap,
  CheckCircle2,
  Sparkles,
  ArrowRight,
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
import Link from "next/link";

export const metadata: Metadata = {
  title: `${APP_NAME} — Engineering the Next Frontier of Intelligent Enterprise Software.`,
};

const businessPoints = [
  "Business Website Development",
  "E-Commerce",
  "Web Applications",
  "UI/UX Design",
  "AI & Software Solutions",
  "SEO & Digital Services",
];

const studentPoints = [
  "10 Internship Domains",
  "Real Projects",
  "Mentor Guidance",
  "Skill Development",
  "Internship Completion",
  "Certificate Verification",
];

const whyChoose = [
  { icon: Cpu, title: "Modern Technology", desc: "We build with the latest frameworks, tools and best practices." },
  { icon: Wrench, title: "Practical Projects", desc: "Hands-on work on real projects that matter, not just theory." },
  { icon: GraduationCap, title: "Student-Friendly Learning", desc: "A supportive path designed for students to grow steadily." },
  { icon: Target, title: "Professional Development", desc: "Career-focused growth for both businesses and learners." },
  { icon: LifeBuoy, title: "Responsive Support", desc: "Quick, helpful support whenever you need it." },
  { icon: ShieldCheck, title: "Secure & Reliable", desc: "Dependable, secure solutions you can build your business on." },
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

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-xl py-8" aria-hidden="true">
      <div className="absolute inset-0 -z-10 rounded-full bg-xora-500/10 blur-3xl" />
      <LogoSvg className="mx-auto w-full max-w-md h-auto" />
      <p className="mt-6 text-center font-display text-sm font-bold uppercase tracking-[0.3em] text-navy-400">
        Innovate | Build | Grow
      </p>
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
    <div
      className={`relative flex flex-col overflow-hidden rounded-3xl border border-navy-50 bg-white/80 p-7 shadow-card backdrop-blur-md transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 dark:border-navy-800/80 dark:bg-navy-900/80 sm:p-8`}
    >
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
      <ul className="mt-5 grid gap-2.5">
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
  );
}

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="absolute inset-0 grid-light opacity-40 dark:opacity-10" />
        <div className="container-x relative">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="text-center lg:text-left">
              <h1 className="font-display font-bold leading-tight text-black">
                <span className="block text-4xl sm:text-5xl lg:text-6xl text-black">
                  Start With Skills.
                </span>
                <span className="mt-2 block text-black text-4xl sm:text-5xl lg:text-6xl">
                  Finish With Success.
                </span>
                <span className="mt-2 block text-4xl sm:text-5xl lg:text-6xl text-black">
                  Your Future Starts at{" "}
                  <span className="font-black">
                    <span className="text-xora-500">X</span>
                    <span className="text-black">ORA</span>
                  </span>
                </span>
              </h1>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
                <Button href="/business" variant="primary" className="w-full sm:w-auto">
                  Explore Business Solutions
                </Button>
                <Button href="/internships" variant="outline" className="w-full sm:w-auto">
                  Explore Student Internships
                </Button>
              </div>
            </div>
            <HeroVisual />
          </div>
        </div>
      </section>

      {/* TWO EXPERIENCES */}
      <section id="journey" className="py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Two Experiences"
            title="Choose Your Journey"
            subtitle="Whether you want to grow your business or build your career, Xora has a clear path for you."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-8">
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
          </div>
        </div>
      </section>

      {/* HOW IT WORKS — BUSINESS */}
      <section className="py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="For Businesses"
            title="Our Process"
            subtitle="From your first requirement to launch and beyond — a clear, reliable journey."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-7">
            {businessWorkflow.map((item) => (
              <div key={item.title} className="relative flex flex-col items-center rounded-2xl border border-navy-50 bg-white/80 p-5 text-center shadow-card backdrop-blur-md transition-all duration-200 hover:shadow-card-hover dark:border-navy-800/80 dark:bg-navy-900/80">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-950 text-xora-400 dark:bg-navy-800">
                  <item.icon className="h-5 w-5" />
                </span>
                <span className="mt-3 text-xs font-bold text-xora-500 dark:text-xora-400">{item.step}</span>
                <h3 className="mt-1 text-sm font-semibold text-navy-900 dark:text-white">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS — INTERNSHIP */}
      <section className="py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="For Students"
            title="Your Internship Journey"
            subtitle="A guided path from application to certification."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-7">
            {internshipWorkflow.map((item) => (
              <div key={item.title} className="relative flex flex-col items-center rounded-2xl bg-navy-950 p-5 text-center shadow-card transition-transform duration-200 hover:-translate-y-1 dark:bg-navy-900/90 dark:border dark:border-navy-800/80">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-xora-400">
                  <item.icon className="h-5 w-5" />
                </span>
                <span className="mt-3 text-xs font-bold text-xora-400">{item.step}</span>
                <h3 className="mt-1 text-sm font-semibold text-white">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE XORA */}
      <section id="why" className="py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Why Xora"
            title="Why Choose Xora"
            subtitle="A technology partner focused on real results for businesses and real growth for students."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-navy-50 bg-white/80 p-6 shadow-card backdrop-blur-md transition-all duration-300 hover:shadow-card-hover dark:border-navy-800/80 dark:bg-navy-900/80"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-xora-gradient text-white shadow-glow">
                  <item.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-navy-950 dark:text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-500 dark:text-navy-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="What We Do"
            title="Digital Services for Your Business"
            subtitle="Everything you need to build, grow and manage your digital presence."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service) => (
              <Link
                key={service.slug}
                href="/business/services"
                className="group flex items-start gap-4 rounded-2xl border border-navy-50 bg-white/80 p-6 shadow-card backdrop-blur-md transition-all duration-200 hover:shadow-card-hover hover:-translate-y-0.5 dark:border-navy-800/80 dark:bg-navy-900/80"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-xora-50 text-xora-600 transition-colors group-hover:bg-xora-gradient group-hover:text-white dark:bg-navy-800 dark:text-xora-400">
                  <service.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold text-navy-900 dark:text-white">{service.title}</h3>
                  <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-navy-500 dark:text-navy-400">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/business/services" variant="outline">View All Services</Button>
          </div>
        </div>
      </section>

      {/* INTERNSHIP DOMAINS PREVIEW */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="For Students"
            title="Internship Domains"
            subtitle="Practical, project-based internships across 10 in-demand domains."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {domains.slice(0, 10).map((domain) => (
              <Link
                key={domain.slug}
                href={`/internships/${domain.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-navy-50 bg-white shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-navy-950">
                  <Image
                    src={domain.image}
                    alt={domain.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
                  <span className="absolute bottom-2 right-2 text-base" role="img" aria-hidden="true">
                    {domain.emoji}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-4 text-center">
                  <h3 className="text-sm font-bold text-navy-900 group-hover:text-xora-600 transition-colors">
                    {domain.title}
                  </h3>
                  <span className="mt-1 text-xs text-navy-400">{domain.duration}</span>
                  <span className="mt-3 inline-flex items-center justify-center gap-1 text-xs font-semibold text-xora-600 group-hover:translate-x-0.5 transition-transform">
                    View Details <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/internships/domains" variant="outline">Explore All Domains</Button>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-white py-20 lg:py-24">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-3xl bg-navy-gradient p-10 text-center sm:p-16">
            <div className="absolute inset-0 hero-grid opacity-30" />
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-xora-500/20 blur-3xl" />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl">
                Ready to Start Your Journey With Xora?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base text-navy-200">
                Grow your business with modern digital solutions, or launch your career with a
                practical internship.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Button href="/business/contact" variant="white">Request a Quote</Button>
                <Button href="/internships/apply" variant="outline-light">Apply for Internship</Button>
              </div>
              <div className="mt-8 flex items-center justify-center gap-3 text-sm text-navy-200">
                <Phone className="h-4 w-4 text-xora-400" />
                <a href="tel:+919894279003" className="hover:text-white">+91 98942 79003</a>
                <span className="text-navy-400">·</span>
                <span>www.xoratechnologies.in</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}