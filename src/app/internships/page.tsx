"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { domains } from "@/data/domains";
import { ArrowRight, Award, Users, BookOpen, Sparkles } from "lucide-react";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  HoverCard,
} from "@/components/animations";

const highlights = [
  { icon: BookOpen, label: "10 Domains", desc: "Web, AI, Design, Security & more" },
  { icon: Users, label: "Real Projects", desc: "Work on practical, client-style tasks" },
  { icon: Award, label: "Certified", desc: "Get a verified internship certificate" },
];

export default function InternshipsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-12 lg:pt-36 lg:pb-16">
        <div className="absolute inset-0 grid-light opacity-60 dark:opacity-20 pointer-events-none" />
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-xora-500/10 blur-3xl pointer-events-none" />
        <div className="container-x relative">
          <div className="mx-auto max-w-3xl text-center">
            <FadeIn direction="down">
              <span className="section-label">
                <Sparkles className="h-3.5 w-3.5" />
                For Students
              </span>
            </FadeIn>
            <FadeIn direction="up" delay={0.1}>
              <h1 className="mt-4 font-display text-4xl font-bold text-navy-950 dark:text-white sm:text-5xl">
                Start Your Internship Journey
              </h1>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <p className="mt-2 font-display text-base sm:text-lg text-xora-600 dark:text-xora-400">
                Learn. Build. Get Mentored. Get Certified.
              </p>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-navy-600 dark:text-navy-300">
                Gain practical, project-based experience in your chosen technology domain with expert mentorship
                and earn a verified certificate.
              </p>
            </FadeIn>
            <FadeIn direction="up" delay={0.3} className="mt-6 flex justify-center gap-3">
              <Button href="/internships/domains" variant="primary">
                Explore Domains
              </Button>
              <Button href="/internships/apply" variant="outline">
                Apply Now
              </Button>
            </FadeIn>

            <StaggerContainer staggerDelay={0.08} delayChildren={0.35} className="mt-8 grid gap-4 sm:grid-cols-3">
              {highlights.map((h) => (
                <StaggerItem key={h.label}>
                  <div className="rounded-2xl border border-navy-100 dark:border-navy-800 bg-white/80 dark:bg-navy-900/80 backdrop-blur-md p-4 shadow-card text-left">
                    <h.icon className="h-5 w-5 text-xora-600 dark:text-xora-400" />
                    <p className="mt-2 text-sm font-semibold text-navy-950 dark:text-white">{h.label}</p>
                    <p className="mt-0.5 text-xs text-navy-500 dark:text-navy-400">{h.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Domains Grid */}
      <section className="py-12 lg:py-16">
        <div className="container-x">
          <SectionHeading
            eyebrow="Domains"
            title="Explore Internship Domains"
            subtitle="Choose from 10 in-demand technology domains."
          />
          <StaggerContainer staggerDelay={0.06} className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {domains.map((domain) => (
              <StaggerItem key={domain.slug}>
                <HoverCard lift={-5} className="h-full">
                  <Link
                    href={`/internships/${domain.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-navy-100 dark:border-navy-800 bg-white/80 dark:bg-navy-900/80 backdrop-blur-md shadow-card transition-all duration-300 hover:border-xora-500/40"
                  >
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-navy-950">
                      <Image
                        src={domain.image}
                        alt={domain.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-950/10 to-transparent" />
                      <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between">
                        <span className="rounded-md bg-white/20 backdrop-blur-md px-2 py-0.5 text-[11px] font-semibold text-white">
                          {domain.duration}
                        </span>
                        <span className="text-lg" role="img" aria-hidden="true">
                          {domain.emoji}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col p-4 justify-between">
                      <div>
                        <h3 className="font-display text-base font-bold text-navy-950 dark:text-white group-hover:text-xora-600 dark:group-hover:text-xora-400 transition-colors">
                          {domain.title}
                        </h3>
                        <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-navy-600 dark:text-navy-400">
                          {domain.description}
                        </p>
                        <div className="mt-2.5 flex flex-wrap gap-1">
                          {domain.skills.slice(0, 3).map((skill) => (
                            <span
                              key={skill}
                              className="rounded-md bg-navy-50 dark:bg-navy-800 px-2 py-0.5 text-[10px] font-medium text-navy-600 dark:text-navy-300"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="mt-4 flex items-center justify-between border-t border-navy-100 dark:border-navy-800 pt-2.5">
                        <span className="text-xs font-medium text-navy-400 dark:text-navy-500">
                          View details
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-xora-600 dark:text-xora-400 group-hover:translate-x-0.5 transition-transform">
                          Learn More <ArrowRight className="h-3 w-3" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 lg:py-16">
        <div className="container-x text-center">
          <FadeIn direction="up">
            <div className="rounded-3xl border border-navy-100 dark:border-navy-800 bg-white/60 dark:bg-navy-900/60 backdrop-blur-md p-8 max-w-3xl mx-auto shadow-card">
              <h2 className="font-display text-2xl font-bold text-navy-950 dark:text-white sm:text-3xl">
                Ready to Begin?
              </h2>
              <p className="mt-2 text-sm text-navy-600 dark:text-navy-300">
                Apply now and start building real projects with expert guidance.
              </p>
              <div className="mt-5 flex justify-center gap-3">
                <Button href="/internships/apply" variant="primary">
                  Apply Now
                </Button>
                <Button href="/verify-certificate" variant="outline">
                  Verify Certificate
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}