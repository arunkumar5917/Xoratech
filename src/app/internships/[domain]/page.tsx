import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { domains } from "@/data/domains";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

type Props = {
  params: Promise<{ domain: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { domain: slug } = await params;
  const domain = domains.find((d) => d.slug === slug);
  if (!domain) return { title: "Domain Not Found" };
  return {
    title: `${domain.title} Internship`,
    description: domain.description,
  };
}

export function generateStaticParams() {
  return domains.map((d) => ({ domain: d.slug }));
}

export default async function DomainDetailPage({ params }: Props) {
  const { domain: slug } = await params;
  const domain = domains.find((d) => d.slug === slug);
  if (!domain) notFound();

  return (
    <>
      <section className="relative overflow-hidden bg-white pt-28 pb-12 lg:pt-36 lg:pb-16">
        <div className="absolute inset-0 grid-light opacity-60" />
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-xora-500/10 blur-3xl" />
        <div className="container-x relative">
          <Link
            href="/internships/domains"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-navy-500 hover:text-navy-900 transition-colors"
          >
            <ArrowRight className="h-4 w-4 rotate-180" />
            All Domains
          </Link>
          <div className="mt-6 flex items-start gap-5">
            <span className="text-5xl" role="img" aria-hidden="true">{domain.emoji}</span>
            <div>
              <span className="section-label">Internship Domain</span>
              <h1 className="mt-3 font-display text-3xl font-bold text-navy-950 sm:text-4xl">
                {domain.title}
              </h1>
              <div className="mt-3 flex items-center gap-4">
                <span className="inline-flex items-center gap-1.5 text-sm text-navy-600">
                  <Clock className="h-4 w-4 text-xora-600" />
                  {domain.duration}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pb-20 lg:pb-28">
        <div className="container-x">
          {/* Domain Featured Hero Banner */}
          <div className="relative mb-12 aspect-[21/9] w-full overflow-hidden rounded-3xl border border-navy-50 bg-navy-950 shadow-card">
            <Image
              src={domain.image}
              alt={domain.title}
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
          </div>

          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="font-display text-2xl font-bold text-navy-950">About This Domain</h2>
              <p className="mt-4 text-base leading-relaxed text-navy-600">
                {domain.description}
              </p>

              <h3 className="mt-8 font-display text-xl font-bold text-navy-950">Skills You&apos;ll Learn</h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {domain.skills.map((skill) => (
                  <div key={skill} className="flex items-center gap-2.5 rounded-xl border border-navy-50 bg-white p-3 shadow-sm">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-xora-500" />
                    <span className="text-sm font-medium text-navy-800">{skill}</span>
                  </div>
                ))}
              </div>

              <h3 className="mt-8 font-display text-xl font-bold text-navy-950">What to Expect</h3>
              <ul className="mt-4 space-y-3">
                {[
                  "Hands-on project-based learning with real-world scenarios",
                  "Guidance from experienced mentors throughout the internship",
                  "Weekly tasks and milestones to track your progress",
                  "A final project to showcase your skills",
                  "Verified internship certificate upon completion",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm text-navy-600">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-xora-500" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 rounded-2xl border border-navy-50 bg-white p-6 shadow-card">
                <h3 className="font-display text-lg font-bold text-navy-950">Quick Facts</h3>
                <div className="mt-4 space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-navy-400">Duration</span>
                    <span className="font-semibold text-navy-900">{domain.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-navy-400">Format</span>
                    <span className="font-semibold text-navy-900">Project-Based</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-navy-400">Certificate</span>
                    <span className="font-semibold text-navy-900">Included</span>
                  </div>
                </div>
                <div className="mt-6 flex flex-col gap-3">
                  <Button href="/internships/apply" variant="primary" className="w-full">
                    Apply Now
                  </Button>
                  <Button href="/internships/domains" variant="outline" className="w-full">
                    View All Domains
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}