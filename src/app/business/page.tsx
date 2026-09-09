import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/data/services";
import { packages } from "@/data/packages";
import {
  Phone,
  CheckCircle2,
  Star,
} from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Business Solutions",
  description:
    "Digital solutions for businesses — websites, applications, AI solutions, SEO and more from Xora Technologies.",
};

const stats = [
  { value: "10+", label: "Services" },
  { value: "3", label: "Website Packages" },
  { value: "24/7", label: "Support" },
];

export default function BusinessPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="absolute inset-0 grid-light opacity-40 dark:opacity-10" />
        <div className="container-x relative">
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-label">
              For Businesses
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold text-navy-950 dark:text-white sm:text-5xl">
              Digital Solutions That Help{" "}
              <span className="bg-xora-gradient bg-clip-text text-transparent">
                Businesses Grow
              </span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-navy-500 dark:text-navy-400">
              Professional websites, web applications, AI solutions and digital
              services — built to grow your business.
            </p>
            <div className="mt-8 flex justify-center gap-3">
              <Button href="/business/packages" variant="primary">
                View Packages
              </Button>
              <Button href="/business/contact" variant="outline">
                Request a Quote
              </Button>
            </div>
            <div className="mt-10 flex items-center justify-center gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-display text-2xl font-bold text-xora-600 dark:text-xora-400">
                    {stat.value}
                  </p>
                  <p className="text-xs font-medium text-navy-500 dark:text-navy-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="What We Do"
            title="Our Services"
            subtitle="End-to-end digital solutions tailored for your business."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.slug}
                className="group flex flex-col rounded-2xl border border-navy-50 bg-white/80 p-6 shadow-card backdrop-blur-md transition-all duration-200 hover:shadow-card-hover hover:-translate-y-0.5 dark:border-navy-800/80 dark:bg-navy-900/80"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-xora-50 text-xora-600 transition-colors group-hover:bg-xora-gradient group-hover:text-white dark:bg-navy-800 dark:text-xora-400">
                  <service.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-navy-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-500 dark:text-navy-400">
                  {service.description}
                </p>
                <ul className="mt-4 flex flex-col gap-1.5">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-2 text-xs text-navy-600 dark:text-navy-300"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-xora-500" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Pricing"
            title="Website Packages"
            subtitle="Clear, upfront pricing with no hidden charges."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3 md:items-stretch">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative flex flex-col overflow-hidden rounded-3xl border bg-white/80 p-7 shadow-card backdrop-blur-md transition-all duration-200 hover:shadow-card-hover dark:bg-navy-900/80 sm:p-8 ${
                  pkg.popular
                    ? "border-xora-300 ring-1 ring-xora-200 dark:border-xora-500 dark:ring-xora-500/30"
                    : "border-navy-50 dark:border-navy-800/80"
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
                <ul className="mt-6 flex flex-1 flex-col gap-3">
                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm text-navy-700 dark:text-navy-300"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-xora-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-col gap-3">
                  <Button
                    href="/business/contact"
                    variant={pkg.popular ? "primary" : "navy"}
                    className="w-full"
                  >
                    Get Started
                  </Button>
                  <Button
                    href="/business/contact"
                    variant="outline"
                    className="w-full"
                  >
                    Request a Quote
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container-x">
          <div className="overflow-hidden rounded-3xl bg-navy-gradient p-10 text-center sm:p-14">
            <h2 className="mx-auto max-w-xl font-display text-2xl font-bold text-white sm:text-3xl">
              Ready to Build Your Digital Presence?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-navy-200">
              Get in touch with us today and let&apos;s discuss your project.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/business/contact" variant="white">
                Request a Quote
              </Button>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:border-green-400 hover:bg-white/20"
              >
                <Phone className="h-4 w-4" />
                Call / WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}