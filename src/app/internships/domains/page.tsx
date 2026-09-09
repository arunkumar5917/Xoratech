import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { domains } from "@/data/domains";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Internship Domains",
  description: "10 technology internship domains at Xora Technologies — Web, AI, Data, Design, Security & more.",
};

export default function DomainsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-transparent pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="absolute inset-0 grid-light opacity-60 dark:opacity-20 pointer-events-none" />
        <div className="container-x relative">
          <div className="mx-auto max-w-2xl text-center">
            <span className="section-label">Internships</span>
            <h1 className="mt-6 font-display text-4xl font-bold text-navy-950 dark:text-white sm:text-5xl">
              All Internship Domains
            </h1>
            <p className="mt-6 text-lg text-navy-600 dark:text-navy-300">
              Each domain offers a project-based learning experience with mentorship and a verified certificate.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-transparent py-16 lg:py-20">
        <div className="container-x">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {domains.map((domain, idx) => (
              <Link
                key={domain.slug}
                href={`/internships/${domain.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-navy-100 dark:border-navy-800 bg-white/80 dark:bg-navy-900/80 backdrop-blur-md shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 hover:border-xora-500/40"
              >
                {/* Compact Domain Thumbnail Image */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-navy-950">
                  <Image
                    src={domain.image}
                    alt={domain.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/10 to-transparent" />
                  <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between">
                    <span className="rounded-md bg-white/20 backdrop-blur-md px-2 py-0.5 text-[11px] font-semibold text-white">
                      Domain {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="text-base" role="img" aria-hidden="true">
                      {domain.emoji}
                    </span>
                  </div>
                </div>

                {/* Compact Domain Details */}
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-base font-bold text-navy-950 dark:text-white group-hover:text-xora-600 dark:group-hover:text-xora-400 transition-colors">
                    {domain.title}
                  </h3>
                  <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-navy-600 dark:text-navy-400">
                    {domain.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1">
                    {domain.skills.slice(0, 3).map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md bg-navy-50 dark:bg-navy-800 px-2 py-0.5 text-[10px] font-medium text-navy-600 dark:text-navy-300"
                      >
                        {skill}
                      </span>
                    ))}
                    {domain.skills.length > 3 && (
                      <span className="rounded-md bg-navy-50 dark:bg-navy-800 px-1.5 py-0.5 text-[10px] font-medium text-navy-400 dark:text-navy-400">
                        +{domain.skills.length - 3}
                      </span>
                    )}
                  </div>
                  <div className="mt-4 flex items-center justify-between border-t border-navy-100 dark:border-navy-800 pt-3">
                    <span className="text-xs font-medium text-navy-400 dark:text-navy-500">{domain.duration}</span>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-xora-600 dark:text-xora-400 group-hover:translate-x-0.5 transition-transform">
                      View Details <ArrowRight className="h-3 w-3" />
                    </span>
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