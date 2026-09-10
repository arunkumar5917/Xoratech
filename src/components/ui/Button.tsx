"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "outline" | "navy" | "white" | "outline-light";
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
  external?: boolean;
};

export function Button({
  children,
  href,
  variant = "primary",
  className,
  type = "button",
  disabled,
  onClick,
  external,
}: ButtonProps) {
  const base = cn(
    "group inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-xora-500 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed",
    {
      "bg-xora-gradient text-white shadow-card hover:shadow-glow hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]":
        variant === "primary",
      "border-2 border-navy-100 bg-white text-navy-900 hover:border-xora-500 hover:text-xora-600 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] dark:border-navy-700 dark:bg-navy-900/80 dark:text-navy-100 dark:hover:border-xora-400 dark:hover:text-xora-400":
        variant === "outline",
      "bg-navy-900 text-white shadow-card hover:bg-navy-800 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] dark:bg-navy-800 dark:hover:bg-navy-700":
        variant === "navy",
      "bg-white text-navy-900 shadow-card hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] dark:bg-navy-100 dark:text-navy-950":
        variant === "white",
      "border-2 border-white/30 bg-white/10 text-white hover:border-xora-400 hover:bg-white/20 backdrop-blur-sm hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] dark:border-white/20 dark:hover:bg-white/10":
        variant === "outline-light",
    },
    className
  );

  if (href) {
    return (
      <Link
        href={href}
        className={base}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        <span>{children}</span>
        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
      </Link>
    );
  }

  return (
    <button type={type} className={base} disabled={disabled} onClick={onClick}>
      <span>{children}</span>
      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
    </button>
  );
}