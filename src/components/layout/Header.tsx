"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Award, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "@/components/Logo";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Business & Services", href: "/business" },
  { label: "Internships", href: "/internships" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-navy-100/90 bg-white/90 shadow-sm backdrop-blur-xl dark:border-navy-800/80 dark:bg-navy-950/90"
          : "border-b border-transparent bg-white/70 backdrop-blur-md dark:bg-navy-950/70"
      )}
    >
      <div className="container-x">
        <nav className="flex h-16 items-center justify-between lg:h-18" aria-label="Main navigation">
          {/* Logo */}
          <Logo />

          {/* Desktop Nav */}
          <ul className="hidden items-center gap-1.5 lg:flex">
            {NAV_ITEMS.map((item) => {
              const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <li key={item.href} className="relative">
                  <Link
                    href={item.href}
                    className={cn(
                      "relative z-10 block rounded-lg px-3.5 py-2 text-sm font-medium transition-colors duration-200",
                      active
                        ? "text-xora-600 dark:text-xora-400 font-semibold"
                        : "text-navy-600 hover:text-navy-950 hover:bg-navy-50/80 dark:text-navy-300 dark:hover:text-white dark:hover:bg-navy-900"
                    )}
                  >
                    {item.label}
                    {active && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 -z-10 rounded-lg bg-xora-50 dark:bg-xora-950/70"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/verify-certificate"
              className="inline-flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-sm font-medium text-navy-600 transition-all duration-200 hover:bg-navy-50 hover:text-navy-900 hover:-translate-y-0.5 dark:text-navy-300 dark:hover:bg-navy-900 dark:hover:text-white"
            >
              <Award className="h-4 w-4 text-xora-500" />
              Verify Certificate
            </Link>
            <Link
              href="/internships/apply"
              className="btn-primary !px-4 !py-2.5 !text-sm group"
            >
              <span>Apply Now</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-50/80 text-navy-800 transition-transform active:scale-95 dark:bg-navy-900 dark:text-navy-200"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="overflow-hidden border-t border-navy-100/80 bg-white/95 backdrop-blur-2xl dark:border-navy-800 dark:bg-navy-950/95 lg:hidden"
          >
            <div className="container-x flex flex-col gap-1.5 py-6">
              {NAV_ITEMS.map((item, idx) => {
                const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 + 0.05, duration: 0.25 }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "block rounded-xl px-4 py-3 text-base font-medium transition-colors",
                        active
                          ? "text-xora-600 bg-xora-50 dark:bg-xora-950/70 dark:text-xora-400 font-semibold"
                          : "text-navy-700 hover:bg-navy-50 dark:text-navy-200 dark:hover:bg-navy-900"
                      )}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
              <div className="my-3 h-px bg-navy-100 dark:bg-navy-800" />
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col gap-2.5"
              >
                <Link
                  href="/verify-certificate"
                  className="flex items-center gap-2 rounded-xl px-4 py-3 text-base font-medium text-navy-700 hover:bg-navy-50 dark:text-navy-200 dark:hover:bg-navy-900"
                >
                  <Award className="h-4 w-4 text-xora-500" />
                  Verify Certificate
                </Link>
                <Link
                  href="/internships/apply"
                  className="btn-primary text-center"
                >
                  Apply Now
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

