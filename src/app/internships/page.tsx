import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { domains } from "@/data/domains";
import { ArrowRight, Award, Users, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Student Internships",
  description:
    "Project-based internships in 10 technology domains — learn, build, get mentored and certified.",
};

const highlights = [
  { icon: BookOpen, label: "10 Domains", desc: "Web, AI, Design, Security & more" },
  { icon: Users, label: "Real Projects", desc: "Work on practical, client-style tasks" },
  { icon: Award, label: "Certified", desc: "Get a verified internship certificate" },
];

export default function InternshipsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="absolute inset-0 grid-light opacity-60" />
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-xora-500/10 blur-3xl" />
        <div className="container-x relative">
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-label">
              For Students
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold text-navy-950 sm:text-5xl">
              Start Your Internship Journey
            </h1>
            <p className="mt-3 font-display text-lg text-xora-600">
              Learn. Build. Get Mentored. Get Certified.
            </p>
            <p className="mt-4 text-base leading-relaxed text-navy-500">
              Gain practical, project-based experience in your chosen technology domain with expert mentorship
              and earn a verified certificate.
            </p>
            <div className="mt-8 flex justify-center gap-3">
              <Button href="/internships/domains" variant="primary">
                Explore Domains
              </Button>
              <Button href="/internships/apply" variant="outline">
                Apply Now
              </Button>
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {highlights.map((h) => (
                <div
                  key={h.label}
                  className="rounded-2xl border border-navy-50 bg-white p-5 shadow-card"
                >
                  <h.icon className="h-5 w-5 text-xora-600" />
                  <p className="mt-2 text-sm font-semibold text-navy-950">{h.label}</p>
                  <p className="mt-0.5 text-xs text-navy-500">{h.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Domains Grid */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Domains"
            title="Explore Internship Domains"
            subtitle="Choose from 10 in-demand technology domains."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {domains.map((domain) => (
              <Link
                key={domain.slug}
                href={`/internships/${domain.slug}`}
                className="group flex flex-col rounded-2xl border border-navy-50 bg-white p-6 shadow-card transition-all duration-200 hover:shadow-card-hover hover:-translate-y-0.5"
              >
                <span className="text-2xl" role="img" aria-hidden="true">
                  {domain.emoji}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold text-navy-900">
                  {domain.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-navy-500">
                  {domain.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {domain.skills.slice(0, 3).map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md bg-navy-50 px-2 py-0.5 text-[11px] font-medium text-navy-600"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex items-center justify-between border-t border-navy-50 pt-4">
                  <span className="text-xs font-medium text-navy-400">
                    {domain.duration}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-xora-600">
                    View Details <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container-x text-center">
          <h2 className="font-display text-2xl font-bold text-navy-950 sm:text-3xl">
            Ready to Begin?
          </h2>
          <p className="mt-3 text-sm text-navy-500">
            Apply now and start building real projects with expert guidance.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Button href="/internships/apply" variant="primary">
              Apply Now
            </Button>
            <Button href="/verify-certificate" variant="outline">
              Verify Certificate
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}