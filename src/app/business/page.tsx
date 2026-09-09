import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/data/services";
import { packages } from "@/data/packages";
import {
  Phone,
  CheckCircle2,
  Star,
  FileSearch,
  MessageSquare,
  Sparkles,
  Cpu,
  ShieldCheck,
  Rocket,
  LifeBuoy,
  ArrowRight,
} from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Business & Digital Services",
  description:
    "Comprehensive digital solutions for businesses — websites, web applications, AI solutions, SEO, UI/UX, and cloud packages from Xora Technologies.",
};

const stats = [
  { value: "10+", label: "Specialized Services" },
  { value: "3", label: "Website Packages" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "24/7", label: "Active Support" },
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

export default function BusinessPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="absolute inset-0 grid-light opacity-40" />
        <div className="container-x relative">
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-label">
              Business & Services
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold text-navy-950 sm:text-5xl lg:text-6xl">
              Digital Solutions & Services for{" "}
              <span className="bg-xora-gradient bg-clip-text text-transparent">
                Growing Businesses
              </span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-navy-600">
              From high-converting websites and cloud applications to AI systems and branding — everything you need to build, scale, and automate your business.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button href="#services" variant="primary">
                Explore Services
              </Button>
              <Button href="#packages" variant="outline">
                View Packages
              </Button>
              <Button href="/business/contact" variant="navy">
                Request a Quote
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-navy-100 bg-white/80 p-4 shadow-sm backdrop-blur-md">
                  <p className="font-display text-2xl font-bold text-xora-600 sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs font-semibold text-navy-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="scroll-mt-20 py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="What We Do"
            title="Our Digital Services"
            subtitle="End-to-end technology and design services tailored to meet your business goals."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.slug}
                id={service.slug}
                className="group flex flex-col justify-between rounded-3xl border border-navy-100 bg-white/85 p-6 shadow-card backdrop-blur-md transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 hover:border-xora-300"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-xora-50 text-xora-600 transition-colors group-hover:bg-xora-gradient group-hover:text-white">
                      <service.icon className="h-6 w-6" />
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-navy-400">
                      Service
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-navy-950 group-hover:text-xora-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-600">
                    {service.description}
                  </p>
                  <ul className="mt-5 space-y-2 border-t border-navy-50 pt-4">
                    {service.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-center gap-2 text-xs font-medium text-navy-700"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-xora-500" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 pt-4 border-t border-navy-50">
                  <Button
                    href={`/business/contact?service=${service.slug}`}
                    variant="outline"
                    className="w-full !py-2 !text-xs justify-center"
                  >
                    Enquire for {service.title}
                    <ArrowRight className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Website Packages Section */}
      <section id="packages" className="scroll-mt-20 py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Pricing & Packages"
            title="Website & Development Packages"
            subtitle="Transparent packages designed to fit businesses of any size."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3 md:items-stretch">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative flex flex-col overflow-hidden rounded-3xl border bg-white/85 p-7 shadow-card backdrop-blur-md transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 sm:p-8 ${
                  pkg.popular
                    ? "border-xora-400 ring-2 ring-xora-400/30"
                    : "border-navy-100"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-xora-gradient px-3 py-1 text-xs font-bold text-white shadow-glow">
                    <Star className="h-3 w-3" />
                    Most Popular
                  </div>
                )}
                <h3 className="font-display text-xl font-bold text-navy-950">
                  {pkg.name}
                </h3>
                <div className="mt-3">
                  <span className="font-display text-4xl font-bold text-navy-950">
                    {pkg.price}
                  </span>
                </div>
                <ul className="mt-6 flex flex-1 flex-col gap-3">
                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm text-navy-700"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-xora-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-col gap-3">
                  <Button
                    href={`/business/contact?package=${encodeURIComponent(pkg.name)}`}
                    variant={pkg.popular ? "primary" : "navy"}
                    className="w-full"
                  >
                    Choose {pkg.name}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Process */}
      <section id="process" className="scroll-mt-20 py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our Process"
            title="How We Deliver Results"
            subtitle="A structured 7-step process from concept to deployment and beyond."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-7">
            {businessWorkflow.map((item) => (
              <div
                key={item.title}
                className="relative flex flex-col items-center rounded-2xl border border-navy-100 bg-white/85 p-5 text-center shadow-card backdrop-blur-md transition-all duration-200 hover:shadow-card-hover hover:-translate-y-0.5"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-950 text-xora-400">
                  <item.icon className="h-5 w-5" />
                </span>
                <span className="mt-3 text-xs font-bold text-xora-600">{item.step}</span>
                <h3 className="mt-1 text-sm font-semibold text-navy-900">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20">
        <div className="container-x">
          <div className="overflow-hidden rounded-3xl bg-navy-gradient p-10 text-center sm:p-14 shadow-card">
            <h2 className="mx-auto max-w-xl font-display text-2xl font-bold text-white sm:text-3xl">
              Ready to Build Your Digital Presence?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-navy-200">
              Get in touch with us today and let&apos;s discuss your project requirement.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/business/contact" variant="white">
                Request a Custom Quote
              </Button>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:border-green-400 hover:bg-white/20"
              >
                <Phone className="h-4 w-4 text-green-400" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}