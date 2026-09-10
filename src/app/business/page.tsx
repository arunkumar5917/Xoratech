"use client";

import React from "react";
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
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  HoverCard,
} from "@/components/animations";

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
      <section className="relative overflow-hidden pt-28 pb-14 lg:pt-36 lg:pb-18">
        <div className="absolute inset-0 grid-light opacity-40" />
        <div className="container-x relative">
          <div className="mx-auto max-w-3xl text-center">
            <FadeIn direction="down">
              <span className="section-label">
                <Sparkles className="h-3.5 w-3.5" />
                Business & Services
              </span>
            </FadeIn>
            <FadeIn direction="up" delay={0.1}>
              <h1 className="mt-4 font-display text-4xl font-bold text-navy-950 sm:text-5xl lg:text-6xl dark:text-white">
                Digital Solutions & Services for{" "}
                <span className="bg-xora-gradient bg-clip-text text-transparent">
                  Growing Businesses
                </span>
              </h1>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-navy-600 dark:text-navy-300">
                From high-converting websites and cloud applications to AI systems and branding — follow our simple 3-step selection flow below to get started.
              </p>
            </FadeIn>
            <FadeIn direction="up" delay={0.3} className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Button href="#selection-flow" variant="primary">
                Start 3-Step Selection
              </Button>
              <Button href="#packages" variant="outline">
                Website Packages
              </Button>
              <Button href="#process" variant="navy">
                Workflow Process
              </Button>
            </FadeIn>
            <StaggerContainer staggerDelay={0.06} delayChildren={0.35} className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((stat) => (
                <StaggerItem key={stat.label}>
                  <div className="rounded-2xl border border-navy-100 bg-white/80 p-3.5 shadow-sm backdrop-blur-md dark:border-navy-800 dark:bg-navy-900/80">
                    <p className="font-display text-2xl font-bold text-xora-600 dark:text-xora-400 sm:text-3xl">
                      {stat.value}
                    </p>
                    <p className="mt-0.5 text-xs font-semibold text-navy-600 dark:text-navy-300">{stat.label}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* 3-STEP SELECTION & ENQUIRY WIZARD */}
      <section id="selection-flow" className="scroll-mt-20 py-10 lg:py-16">
        <div className="container-x">
          <SectionHeading
            eyebrow="Interactive Flow"
            title="Step 1. Select Service · Step 2. Select Package · Step 3. Enquire"
            subtitle="Customize your solution in three quick steps and receive an instant quotation proposal."
          />

          <FadeIn direction="up" delay={0.2} className="mt-8 max-w-5xl mx-auto">
            <BusinessSelectionWizard />
          </FadeIn>
        </div>
      </section>

      {/* Website Packages Section */}
      <section id="packages" className="scroll-mt-20 py-12 lg:py-16">
        <div className="container-x">
          <SectionHeading
            eyebrow="Pricing & Packages"
            title="Website & Development Packages"
            subtitle="Transparent packages designed to fit businesses of any size."
          />
          <StaggerContainer staggerDelay={0.1} className="mt-10 grid gap-6 md:grid-cols-3 md:items-stretch">
            {packages.map((pkg) => (
              <StaggerItem key={pkg.name}>
                <HoverCard lift={-6} className="h-full">
                  <div
                    className={`relative flex h-full flex-col overflow-hidden rounded-3xl border bg-white/85 p-6 shadow-card backdrop-blur-md transition-all duration-300 sm:p-7 dark:bg-navy-900/85 ${
                      pkg.popular
                        ? "border-xora-400 ring-2 ring-xora-400/30 dark:border-xora-500"
                        : "border-navy-100 dark:border-navy-800"
                    }`}
                  >
                    {pkg.popular && (
                      <div className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-xora-gradient px-3 py-1 text-xs font-bold text-white shadow-glow">
                        <Star className="h-3 w-3" />
                        Most Popular
                      </div>
                    )}
                    <h3 className="font-display text-xl font-bold text-navy-950 dark:text-white">
                      {pkg.name}
                    </h3>
                    <div className="mt-3">
                      <span className="font-display text-4xl font-bold text-navy-950 dark:text-white">
                        {pkg.price}
                      </span>
                    </div>
                    <ul className="mt-5 flex flex-1 flex-col gap-2.5">
                      {pkg.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-xs sm:text-sm text-navy-700 dark:text-navy-300"
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
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Workflow Process */}
      <section id="process" className="scroll-mt-20 py-12 lg:py-16">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our Process"
            title="How We Deliver Results"
            subtitle="A structured 7-step process from concept to deployment and beyond."
          />
          <StaggerContainer staggerDelay={0.06} className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-7">
            {businessWorkflow.map((item) => (
              <StaggerItem key={item.title}>
                <HoverCard lift={-4} className="h-full">
                  <div className="relative flex h-full flex-col items-center rounded-2xl border border-navy-100 bg-white/85 p-4 text-center shadow-card backdrop-blur-md dark:border-navy-800 dark:bg-navy-900/85">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-950 text-xora-400 dark:bg-navy-800">
                      <item.icon className="h-5 w-5" />
                    </span>
                    <span className="mt-2 text-xs font-bold text-xora-600 dark:text-xora-400">{item.step}</span>
                    <h3 className="mt-0.5 text-xs font-semibold text-navy-900 dark:text-white">{item.title}</h3>
                  </div>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 lg:py-16">
        <div className="container-x">
          <FadeIn direction="up">
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
                  className="inline-flex items-center gap-2 rounded-xl border-2 border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:border-green-400 hover:bg-white/20 hover:-translate-y-0.5"
                >
                  <Phone className="h-4 w-4 text-green-400" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}