import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { services } from "@/data/services";
import { ServiceCard } from "@/components/business/ServiceCard";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore all digital services offered by Xora Technologies — web development, AI, SEO, marketing and more.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="absolute inset-0 grid-light opacity-60" />
        <div className="container-x relative">
          <div className="mx-auto max-w-2xl text-center">
            <span className="section-label">What We Do</span>
            <h1 className="mt-6 font-display text-4xl font-bold text-navy-950 sm:text-5xl">
              Our Digital Services
            </h1>
            <p className="mt-6 text-lg text-navy-500">
              Complete technology solutions to build, grow and maintain your digital presence.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="container-x">
          <div className="grid gap-6 lg:grid-cols-2">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <ServiceCard
                  key={service.slug}
                  service={{
                    slug: service.slug,
                    title: service.title,
                    description: service.description,
                    points: service.points,
                  }}
                  index={idx}
                  iconNode={<Icon className="h-5 w-5" />}
                />
              );
            })}
          </div>
          <div className="mt-14 text-center">
            <Button href="/business/packages" variant="navy">View Website Packages</Button>
          </div>
        </div>
      </section>
    </>
  );
}