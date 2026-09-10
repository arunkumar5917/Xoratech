"use client";

import React from "react";
import { Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
  light,
}: SectionHeadingProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <span className={cn("section-label", light && "!bg-white/10 !text-xora-300")}>
            <Sparkles className="h-3.5 w-3.5" />
            {eyebrow}
          </span>
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 0.5, delay: eyebrow ? 0.08 : 0, ease: "easeOut" }}
        className={cn(
          "mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl",
          light ? "text-white" : "text-navy-950 dark:text-white"
        )}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.55, delay: eyebrow ? 0.16 : 0.08, ease: "easeOut" }}
          className={cn(
            "mt-4 text-base leading-relaxed",
            light ? "text-navy-200" : "text-navy-500 dark:text-navy-400"
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}