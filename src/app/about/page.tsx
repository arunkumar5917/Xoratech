"use client";

import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";


import {
  Building2,
  GraduationCap,
  CheckCircle2,
  Users,
  Target,
  Cpu,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  HoverCard,
} from "@/components/animations";

const values = [
  {
    icon: Cpu,
    title: "Modern Technology",
    desc: "We work with the latest tools and frameworks to build reliable, future-ready solutions.",
  },
  {
    icon: Target,
    title: "Practical Approach",
    desc: "Everything we build — for clients or students — is grounded in real-world practice, not theory alone.",
  },
  {
    icon: Users,
    title: "People First",
    desc: "We believe in supporting both businesses and students with clear communication and dependable service.",
  },
  {
    icon: ShieldCheck,
    title: "Trust & Quality",
    desc: "We deliver honest work, build trust through results and maintain high standards in every project.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24">
        <div className="absolute inset-0 grid-light opacity-40 dark:opacity-10" />
        <div className="container-x relative">
          <FadeIn direction="up" className="mx-auto max-w-2xl text-center">
            <span className="section-label">
              <Sparkles className="h-3.5 w-3.5" />
              About Us
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold text-navy-950 dark:text-white sm:text-5xl">
              About Xora Technologies
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-navy-600 dark:text-navy-300">
              Xora Technologies is focused on engineering robust digital software solutions
              for businesses and creating meaningful learning opportunities for students.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-14 lg:py-20">
        <div className="container-x">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Mission */}
            <FadeIn direction="right" delay={0.1}>
              <h2 className="font-display text-3xl font-bold text-navy-950 dark:text-white">Who We Are</h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-navy-600 dark:text-navy-300">
                <p>
                  Xora Technologies is a technology company with a clear mission: help
                  businesses build their digital presence and give students a platform to
                  develop real, practical skills.
                </p>
                <p>
                  We offer end-to-end digital solutions — from websites and web applications to
                  AI integration and digital marketing — designed to meet the actual needs of
                  growing businesses.
                </p>
                <p>
                  For students, we run project-based internships across 10 technology domains,
                  providing hands-on learning, expert mentorship and verified certificates that
                  carry real value.
                </p>
              </div>
            </FadeIn>

            {/* Approach */}
            <FadeIn direction="left" delay={0.2}>
              <div className="rounded-3xl bg-navy-950 p-8 text-white shadow-card dark:border dark:border-navy-800 dark:bg-navy-900/90 sm:p-10">
                <h3 className="font-display text-xl font-bold">Our Approach</h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-200">
                  We believe in practical, results-oriented work — whether it&apos;s a website for a
                  business or a learning project for a student. Every engagement is built on
                  clarity, quality and genuine support.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  {[
                    { label: "Businesses", icon: Building2, items: ["Websites", "Applications", "AI Solutions"] },
                    { label: "Students", icon: GraduationCap, items: ["Internships", "Mentorship", "Certificates"] },
                  ].map((group) => (
                    <div key={group.label} className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                      <group.icon className="h-5 w-5 text-xora-400" />
                      <p className="mt-2 text-sm font-semibold text-white">{group.label}</p>
                      <ul className="mt-2 space-y-1">
                        {group.items.map((item) => (
                          <li key={item} className="flex items-center gap-1.5 text-xs text-navy-200">
                            <CheckCircle2 className="h-3 w-3 shrink-0 text-xora-400" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* VISION & MISSION SECTION */}
      <section className="py-14 lg:py-20 bg-navy-50/50 dark:bg-navy-900/40 border-y border-navy-100/60 dark:border-navy-800/60">
        <div className="container-x">
          <SectionHeading
            eyebrow="Purpose & Goals"
            title="Vision & Mission"
            subtitle="Guiding our efforts toward excellence, practical innovation, and continuous growth."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:gap-8 max-w-5xl mx-auto">
            {/* Vision Card - Curved shape */}
            <FadeIn direction="up" delay={0.1}>
              <HoverCard lift={-5} className="h-full">
                <div className="relative h-full overflow-hidden rounded-tl-[2.5rem] rounded-br-[2.5rem] rounded-tr-2xl rounded-bl-2xl border border-navy-100 bg-white/90 p-8 shadow-card backdrop-blur-md dark:border-navy-800 dark:bg-navy-900/90">
                  <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-rose-500 via-xora-500 to-navy-800" />
                  <div className="flex items-center gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-50 text-rose-600 dark:bg-rose-950/70 dark:text-rose-400 shadow-sm">
                      <Target className="h-6 w-6" />
                    </span>
                    <h3 className="font-display text-xl font-bold uppercase tracking-wide text-navy-950 dark:text-white sm:text-2xl">
                      Our Vision
                    </h3>
                  </div>
                  <p className="mt-4 text-base leading-relaxed text-navy-700 dark:text-navy-200">
                    To be a leading technology innovation hub that empowers individuals and businesses to transform ideas into impactful digital solutions.
                  </p>
                </div>
              </HoverCard>
            </FadeIn>

            {/* Mission Card - Curved shape */}
            <FadeIn direction="up" delay={0.2}>
              <HoverCard lift={-5} className="h-full">
                <div className="relative h-full overflow-hidden rounded-tr-[2.5rem] rounded-bl-[2.5rem] rounded-tl-2xl rounded-br-2xl border border-navy-100 bg-white/90 p-8 shadow-card backdrop-blur-md dark:border-navy-800 dark:bg-navy-900/90">
                  <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-xora-500 via-cyan-500 to-navy-900" />
                  <div className="flex items-center gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-xora-50 text-xora-600 dark:bg-xora-950/70 dark:text-xora-400 shadow-sm">
                      <Sparkles className="h-6 w-6" />
                    </span>
                    <h3 className="font-display text-xl font-bold uppercase tracking-wide text-navy-950 dark:text-white sm:text-2xl">
                      Our Mission
                    </h3>
                  </div>
                  <p className="mt-4 text-base leading-relaxed text-navy-700 dark:text-navy-200">
                    To deliver quality education, hands-on training, and real-world experience in emerging technologies, nurturing talent and driving innovation for a better tomorrow.
                  </p>
                </div>
              </HoverCard>
            </FadeIn>
          </div>
        </div>
      </section>


      {/* Values */}
      <section className="py-14 lg:py-20">

        <div className="container-x">
          <SectionHeading
            eyebrow="Our Values"
            title="What We Stand For"
            subtitle="The principles that guide how we work and build partnerships."
          />
          <StaggerContainer staggerDelay={0.08} className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((item) => (
              <StaggerItem key={item.title}>
                <HoverCard lift={-5} className="h-full">
                  <div className="h-full rounded-2xl border border-navy-50 bg-white/80 p-6 shadow-card backdrop-blur-md dark:border-navy-800/80 dark:bg-navy-900/80">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-xora-gradient text-white shadow-glow">
                      <item.icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 font-display text-lg font-semibold text-navy-950 dark:text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-navy-500 dark:text-navy-400">{item.desc}</p>
                  </div>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20">
        <div className="container-x text-center">
          <FadeIn direction="up">
            <h2 className="font-display text-2xl font-bold text-navy-950 dark:text-white sm:text-3xl">
              Let&apos;s Work Together
            </h2>
            <p className="mt-3 text-sm text-navy-600 dark:text-navy-400">
              Whether you&apos;re a business looking for digital solutions or a student ready to learn, we&apos;re here.
            </p>
            <div className="mt-6 flex justify-center gap-3">
              <Button href="/business/contact" variant="primary">Contact Us</Button>
              <Button href="/internships" variant="navy">Explore Internships</Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}