"use client";

import React from "react";
import Link from "next/link";
import { Phone, Globe, ArrowUpRight } from "lucide-react";
import { LogoSvg } from "@/components/Logo";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/Stagger";
import { APP_NAME, APP_TAGLINE, PHONE_DISPLAY, TEL_LINK, WEBSITE } from "@/lib/utils";

const BUSINESS_LINKS = [
  { label: "Digital Services", href: "/business#selection-flow" },
  { label: "Website Packages", href: "/business#packages" },
  { label: "Our Process", href: "/business#process" },
  { label: "Request a Quote", href: "/business/contact" },
];

const STUDENT_LINKS = [
  { label: "Internships", href: "/internships" },
  { label: "10 Domains", href: "/internships/domains" },
  { label: "Apply Now", href: "/internships/apply" },
  { label: "Student Login", href: "/student/login" },
  { label: "Verify Certificate", href: "/verify-certificate" },
];

const COMPANY_LINKS = [
  { label: "About", href: "/about" },
  { label: "LinkedIn Reviews", href: "/#linkedin-reviews" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms & Conditions", href: "#" },
];

function FooterLink({ href, children, external }: { href: string; children: React.ReactNode; external?: boolean }) {
  return (
    <li>
      <Link
        href={href}
        className="group inline-flex items-center gap-1 text-sm text-navy-300 transition-all duration-200 hover:text-white hover:translate-x-1"
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        <span>{children}</span>
        {external && <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />}
      </Link>
    </li>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-950 text-white">
      <div className="container-x py-16 lg:py-20">
        <StaggerContainer staggerDelay={0.08} className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <StaggerItem className="lg:col-span-2">
            <span className="inline-flex items-center rounded-xl bg-white px-3 py-2 shadow-card">
              <LogoSvg className="h-9" />
            </span>
            <p className="mt-2 text-sm font-semibold text-xora-400">{APP_TAGLINE}</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-navy-300">
              Building digital solutions for businesses and creating meaningful learning
              opportunities for students.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href={TEL_LINK}
                className="group inline-flex items-center gap-2 text-sm text-navy-300 transition-colors hover:text-white"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 transition-transform duration-200 group-hover:scale-110">
                  <Phone className="h-3.5 w-3.5 text-xora-400" />
                </span>
                {PHONE_DISPLAY}
              </a>
              <a
                href={`https://${WEBSITE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm text-navy-300 transition-colors hover:text-white"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 transition-transform duration-200 group-hover:scale-110">
                  <Globe className="h-3.5 w-3.5 text-xora-400" />
                </span>
                {WEBSITE}
              </a>
              <a
                href="https://www.linkedin.com/company/xora-technologies"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm text-navy-300 transition-colors hover:text-white"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 transition-transform duration-200 group-hover:scale-110 text-[#0A66C2]">
                  <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </span>
                LinkedIn Community
              </a>
            </div>
          </StaggerItem>

          {/* Business */}
          <StaggerItem>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Business</h4>
            <ul className="flex flex-col gap-2.5">
              {BUSINESS_LINKS.map((link) => (
                <FooterLink key={link.href} href={link.href}>{link.label}</FooterLink>
              ))}
            </ul>
          </StaggerItem>

          {/* Students */}
          <StaggerItem>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Students</h4>
            <ul className="flex flex-col gap-2.5">
              {STUDENT_LINKS.map((link) => (
                <FooterLink key={link.href} href={link.href}>{link.label}</FooterLink>
              ))}
            </ul>
          </StaggerItem>

          {/* Company */}
          <StaggerItem>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Company</h4>
            <ul className="flex flex-col gap-2.5">
              {COMPANY_LINKS.map((link) => (
                <FooterLink key={link.label} href={link.href}>{link.label}</FooterLink>
              ))}
            </ul>
          </StaggerItem>
        </StaggerContainer>

        <FadeIn delay={0.3} className="mt-14 border-t border-white/10 pt-8 text-center text-sm text-navy-400">
          <p>&copy; {new Date().getFullYear()} {APP_NAME}. All rights reserved.</p>
        </FadeIn>
      </div>
    </footer>
  );
}

