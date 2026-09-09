import React from "react";
import Link from "next/link";
import { Phone, Globe, ArrowUpRight } from "lucide-react";
import { LogoSvg } from "@/components/Logo";
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
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms & Conditions", href: "#" },
];

function FooterLink({ href, children, external }: { href: string; children: React.ReactNode; external?: boolean }) {
  return (
    <li>
      <Link
        href={href}
        className="group inline-flex items-center gap-1 text-sm text-navy-300 transition-colors hover:text-white"
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
        {external && <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />}
      </Link>
    </li>
  );
}

export function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="container-x py-16 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <span className="inline-flex items-center rounded-xl bg-white px-3 py-2">
              <LogoSvg className="h-9" />
            </span>
            <p className="mt-1 text-sm font-semibold text-xora-400">{APP_TAGLINE}</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-navy-300">
              Building digital solutions for businesses and creating meaningful learning
              opportunities for students.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href={TEL_LINK}
                className="inline-flex items-center gap-2 text-sm text-navy-300 transition-colors hover:text-white"
              >
                <Phone className="h-4 w-4 text-xora-400" />
                {PHONE_DISPLAY}
              </a>
              <a
                href={`https://${WEBSITE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-navy-300 transition-colors hover:text-white"
              >
                <Globe className="h-4 w-4 text-xora-400" />
                {WEBSITE}
              </a>
            </div>
          </div>

          {/* Business */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Business</h4>
            <ul className="flex flex-col gap-2.5">
              {BUSINESS_LINKS.map((link) => (
                <FooterLink key={link.href} href={link.href}>{link.label}</FooterLink>
              ))}
            </ul>
          </div>

          {/* Students */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Students</h4>
            <ul className="flex flex-col gap-2.5">
              {STUDENT_LINKS.map((link) => (
                <FooterLink key={link.href} href={link.href}>{link.label}</FooterLink>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Company</h4>
            <ul className="flex flex-col gap-2.5">
              {COMPANY_LINKS.map((link) => (
                <FooterLink key={link.label} href={link.href}>{link.label}</FooterLink>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8 text-center text-sm text-navy-400">
          <p>&copy; {new Date().getFullYear()} {APP_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
