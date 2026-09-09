import type { Metadata } from "next";
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
} from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Xora Technologies — building digital solutions for businesses and creating meaningful learning opportunities for students.",
};

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
      <section className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="absolute inset-0 grid-light opacity-40 dark:opacity-10" />
        <div className="container-x relative">
          <div className="mx-auto max-w-2xl text-center">
            <span className="section-label">About Us</span>
            <h1 className="mt-6 font-display text-4xl font-bold text-navy-950 dark:text-white sm:text-5xl">
              About Xora Technologies
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-navy-500 dark:text-navy-400">
              Xora Technologies is focused on building practical digital solutions
              for businesses and creating meaningful learning opportunities for students.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container-x">
          <div className="grid items-start gap-16 lg:grid-cols-2">
            {/* Mission */}
            <div>
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
            </div>

            {/* Approach */}
            <div className="rounded-3xl bg-navy-950 p-8 text-white dark:bg-navy-900/90 dark:border dark:border-navy-800">
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
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our Values"
            title="What We Stand For"
            subtitle="The principles that guide how we work."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((item) => (
              <div key={item.title} className="rounded-2xl border border-navy-50 bg-white/80 p-6 shadow-card backdrop-blur-md dark:border-navy-800/80 dark:bg-navy-900/80">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-xora-gradient text-white shadow-glow">
                  <item.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-navy-950 dark:text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-500 dark:text-navy-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20">
        <div className="container-x text-center">
          <h2 className="font-display text-2xl font-bold text-navy-950 dark:text-white sm:text-3xl">
            Let&apos;s Work Together
          </h2>
          <p className="mt-3 text-sm text-navy-500 dark:text-navy-400">
            Whether you&apos;re a business looking for digital solutions or a student ready to learn, we&apos;re here.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Button href="/business/contact" variant="primary">Contact Us</Button>
            <Button href="/internships" variant="navy">Explore Internships</Button>
          </div>
        </div>
      </section>
    </>
  );
}