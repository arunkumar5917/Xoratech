import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  href?: string;
  showTagline?: boolean;
  size?: "sm" | "md" | "lg";
};

export function LogoMark({ className }: { className?: string }) {
  return (
    <span
      className={cn("inline-flex h-10 w-10 items-center justify-center rounded-xl bg-navy-950 shadow-card", className)}
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 5l7 7-7 7" stroke="white" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19 5l-7 7 7 7" stroke="#e23a9c" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="11" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
      </svg>
    </span>
  );
}

export function LogoSvg({ className }: { className?: string }) {
  return (
    <Image
      src="/logo.png"
      alt="XORA Technologies"
      width={800}
      height={327}
      priority
      className={cn("h-10 w-auto", className)}
      draggable={false}
    />
  );
}

export function Logo({ className, href = "/", showTagline = false, size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: "h-8",
    md: "h-10",
    lg: "h-12",
  };

  return (
    <Link
      href={href}
      className={cn("group inline-flex items-center gap-3", className)}
      aria-label="XORA Technologies — Home"
    >
      <LogoSvg className={sizeClasses[size]} />
      {showTagline && (
        <span className="hidden text-xs font-semibold text-navy-400 sm:inline-block">
          Innovate | Build | Grow
        </span>
      )}
    </Link>
  );
}
