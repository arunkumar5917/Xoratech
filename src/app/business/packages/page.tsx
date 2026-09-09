import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { packages } from "@/data/packages";
import { services } from "@/data/services";
import { CheckCircle2, Star, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Website Packages",
  description:
    "Affordable website packages starting at ₹4,999 — domain, hosting, design, SEO and more.",
};

export default function PackagesPage({
  searchParams,
}: {
  searchParams?: { service?: string };
}) {
  const serviceSlug = searchParams?.service || "";
  const service = services.find((s) => s.slug === serviceSlug);
  const enquiryHref = (pkgName: string) =>
    serviceSlug
      ? `/business/contact?service=${serviceSlug}&package=${encodeURIComponent(pkgName)}`
      : "/business/contact";

  return (
    <>
      <section className="relative overflow-hidden bg-white pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="absolute inset-0 grid-light opacity-60" />
        <div className="container-x relative">
          <div className="mx-auto max-w-2xl text-center">
            <span className="section-label">Pricing</span>
            <h1 className="mt-6 font-display text-4xl font-bold text-navy-950 sm:text-5xl">
              Website Packages
            </h1>
            <p className="mt-6 text-lg text-navy-500">
              Transparent pricing — choose the package that fits your business needs.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="container-x">
          {service && (
            <div className="mb-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-xora-100 bg-xora-50/60 px-6 py-5 sm:flex-row">
              <div className="text-center sm:text-left">
                <p className="text-xs font-bold uppercase tracking-wider text-xora-500">
                  Selected Service
                </p>
                <p className="mt-1 font-display text-lg font-bold text-navy-950">
                  {service.title}
                </p>
              </div>
              <Button href={`/business/services#${service.slug}`} variant="outline">
                Change Service
              </Button>
            </div>
          )}

          <div className="grid gap-6 md:grid-cols-3 md:items-stretch">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative flex flex-col overflow-hidden rounded-3xl border bg-white p-7 shadow-card transition-all duration-200 hover:shadow-card-hover sm:p-8 ${
                  pkg.popular
                    ? "border-xora-300 ring-1 ring-xora-200"
                    : "border-navy-50"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-xora-gradient px-3 py-1 text-xs font-bold text-white shadow-glow">
                    <Star className="h-3 w-3" />
                    Most Popular
                  </div>
                )}
                <h3 className="font-display text-2xl font-bold text-navy-950">
                  {pkg.name}
                </h3>
                <div className="mt-4">
                  <span className="font-display text-5xl font-bold text-navy-950">
                    {pkg.price}
                  </span>
                </div>
                <ul className="mt-7 flex flex-1 flex-col gap-3">
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
                    href={enquiryHref(pkg.name)}
                    variant={pkg.popular ? "primary" : "navy"}
                    className="w-full"
                  >
                    Select {pkg.name}
                  </Button>
                  <Button
                    href={enquiryHref(pkg.name)}
                    variant="outline"
                    className="w-full"
                  >
                    Submit Enquiry
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a
              href={serviceSlug ? `/business/services#${serviceSlug}` : "/business/services"}
              className="inline-flex items-center gap-2 text-sm font-semibold text-xora-600 underline underline-offset-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Services
            </a>
            <p className="mt-4 text-sm text-navy-500">
              Need something custom?{" "}
              <a
                href={serviceSlug ? `/business/contact?service=${serviceSlug}` : "/business/contact"}
                className="font-semibold text-xora-600 underline underline-offset-2"
              >
                Get in touch
              </a>{" "}
              for a tailored solution.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}