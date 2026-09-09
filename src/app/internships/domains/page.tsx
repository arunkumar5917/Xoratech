import type { Metadata } from "next";
import Link from "next/link";
import { domains } from "@/data/domains";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Internship Domains",
  description: "10 technology internship domains at Xora Technologies — Web, AI, Data, Design, Security & more.",
};

export default function DomainsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="absolute inset-0 grid-light opacity-60" />
        <div className="container-x relative">
          <div className="mx-auto max-w-2xl text-center">
            <span className="section-label">Internships</span>
            <h1 className="mt-6 font-display text-4xl font-bold text-navy-950 sm:text-5xl">
              All Internship Domains
            </h1>
            <p className="mt-6 text-lg text-navy-500">
              Each domain offers a project-based learning experience with mentorship and a verified certificate.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="container-x">
          <div className="grid gap-6 md:grid-cols-2">
            {domains.map((domain, idx) => (
              <Link
                key={domain.slug}
                href={`/internships/${domain.slug}`}
                className="group flex flex-col rounded-2xl border border-navy-50 bg-white p-6 shadow-card transition-all duration-200 hover:shadow-card-hover hover:-translate-y-0.5"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl" role="img" aria-hidden="true">{domain.emoji}</span>
                  <div className="flex-1">
                    <span className="text-xs font-bold text-xora-500">
                      Domain {String(idx + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-xl font-bold text-navy-950">{domain.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-navy-500">{domain.description}</p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {domain.skills.map((skill) => (
                        <span key={skill} className="rounded-md bg-navy-50 px-2 py-0.5 text-[11px] font-medium text-navy-600">
                          {skill}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xs font-medium text-navy-400">{domain.duration}</span>
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-xora-600">
                        View Details <ArrowRight className="h-3 w-3" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}