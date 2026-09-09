import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
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
} from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/utils";
import { BusinessSelectionWizard } from "@/components/business/BusinessSelectionWizard";

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
      <section className="relative overflow-hidden pt-24 pb-12 lg:pt-28 lg:pb-14">
        <div className="absolute inset-0 grid-light opacity-40" />
        <div className="container-x relative">
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-label">
              Business & Services
            </span>
            <h1 className="mt-4 font-display text-4xl font-bold text-navy-950 sm:text-5xl lg:text-6xl">
              Digital Solutions & Services for{" "}
              <span className="bg-xora-gradient bg-clip-text text-transparent">
                Growing Businesses
              </span>
            </h1>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-navy-600">
              From high-converting websites and cloud applications to AI systems and branding — follow our simple 3-step selection flow below to get started.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Button href="#selection-flow" variant="primary">
                Start 3-Step Selection
              </Button>
              <Button href="#packages" variant="outline">
                Website Packages
              </Button>
              <Button href="#process" variant="navy">
                Workflow Process
              </Button>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-navy-100 bg-white/80 p-3.5 shadow-sm backdrop-blur-md">
                  <p className="font-display text-2xl font-bold text-xora-600 sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-0.5 text-xs font-semibold text-navy-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3-STEP SELECTION & ENQUIRY WIZARD */}
      <section id="selection-flow" className="scroll-mt-20 py-8 lg:py-12">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <span className="section-label">Interactive Flow</span>
            <h2 className="mt-2 font-display text-2xl font-bold text-navy-950 sm:text-3xl">
              Step 1. Select Service &bull; Step 2. Select Package &bull; Step 3. Enquire
            </h2>
            <p className="mt-2 text-sm text-navy-600">
              Customize your solution in three quick steps and receive an instant quotation proposal.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <BusinessSelectionWizard />
          </div>
        </div>
      </section>

      {/* Website Packages Section */}
      <section id="packages" className="scroll-mt-20 py-10 lg:py-14">
        <div className="container-x">
          <SectionHeading
            eyebrow="Pricing & Packages"
            title="Website & Development Packages"
            subtitle="Transparent packages designed to fit businesses of any size."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-3 md:items-stretch">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative flex flex-col overflow-hidden rounded-3xl border bg-white/85 p-6 shadow-card backdrop-blur-md transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 sm:p-7 ${
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
                <ul className="mt-5 flex flex-1 flex-col gap-2.5">
                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-xs sm:text-sm text-navy-700"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-xora-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-col gap-3">
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
      <section id="process" className="scroll-mt-20 py-10 lg:py-14">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our Process"
            title="How We Deliver Results"
            subtitle="A structured 7-step process from concept to deployment and beyond."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-7">
            {businessWorkflow.map((item) => (
              <div
                key={item.title}
                className="relative flex flex-col items-center rounded-2xl border border-navy-100 bg-white/85 p-4 text-center shadow-card backdrop-blur-md transition-all duration-200 hover:shadow-card-hover hover:-translate-y-0.5"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-950 text-xora-400">
                  <item.icon className="h-5 w-5" />
                </span>
                <span className="mt-2 text-xs font-bold text-xora-600">{item.step}</span>
                <h3 className="mt-0.5 text-xs font-semibold text-navy-900">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 lg:py-14">
        <div className="container-x">
          <div className="overflow-hidden rounded-3xl bg-navy-gradient p-8 text-center sm:p-12 shadow-card">
            <h2 className="mx-auto max-w-xl font-display text-2xl font-bold text-white sm:text-3xl">
              Ready to Build Your Digital Presence?
            </h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-navy-200">
              Get in touch with us today and let&apos;s discuss your project requirement.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
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