"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Award, ArrowRight } from "lucide-react";
import { Logo } from "@/components/Logo";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Business", href: "/business" },
  { label: "Internships", href: "/internships" },
  { label: "Services", href: "/business/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-navy-50 bg-white transition-all duration-300",
        scrolled && "shadow-sm"
      )}
    >
      <div className="container-x">
        <nav className="flex h-16 items-center justify-between lg:h-18" aria-label="Main navigation">
          {/* Logo */}
          <Logo />

          {/* Desktop Nav */}
          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_ITEMS.map((item) => {
              const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors",
                      active
                        ? "text-xora-600 bg-xora-50"
                        : "text-navy-600 hover:text-navy-900 hover:bg-navy-50"
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/verify-certificate"
              className="inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-sm font-medium text-navy-600 transition-colors hover:bg-navy-50"
            >
              <Award className="h-4 w-4" />
              Verify Certificate
            </Link>
            <Link
              href="/internships/apply"
              className="btn-primary !px-4 !py-2.5 !text-sm"
            >
              Apply Now
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="flex h-10 w-10 items-center justify-center rounded-lg text-navy-700 transition-colors hover:bg-navy-50 lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-x-0 top-16 bottom-0 z-40 border-t border-navy-50 bg-white transition-all duration-300 lg:hidden",
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div className="container-x flex flex-col gap-1 py-6">
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-xl px-4 py-3 text-base font-medium transition-colors",
                  active
                    ? "text-xora-600 bg-xora-50"
                    : "text-navy-700 hover:bg-navy-50"
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="my-4 h-px bg-navy-100" />
          <Link
            href="/verify-certificate"
            className="rounded-xl px-4 py-3 text-base font-medium text-navy-700 hover:bg-navy-50"
          >
            Verify Certificate
          </Link>
          <Link
            href="/internships/apply"
            className="btn-primary mt-2 text-center"
          >
            Apply Now
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </header>
  );
}
