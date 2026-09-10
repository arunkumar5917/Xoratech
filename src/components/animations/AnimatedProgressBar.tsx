"use client";

import React, { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type AnimatedProgressBarProps = {
  value: number; // 0 to 100
  max?: number;
  className?: string;
  barClassName?: string;
  duration?: number;
  showLabel?: boolean;
};

export function AnimatedProgressBar({
  value,
  max = 100,
  className = "",
  barClassName = "",
  duration = 0.8,
  showLabel = false,
}: AnimatedProgressBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });
  const shouldReduceMotion = useReducedMotion();

  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  return (
    <div ref={ref} className={cn("w-full", className)}>
      <div className="relative h-2 w-full overflow-hidden rounded-full bg-navy-100 dark:bg-navy-800">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: isInView ? `${percentage}%` : 0 }}
          transition={{
            duration: shouldReduceMotion ? 0.1 : duration,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          className={cn(
            "h-full rounded-full bg-gradient-to-r from-xora-500 to-xora-600 dark:from-xora-500 dark:to-cyan-400",
            barClassName
          )}
        />
      </div>
      {showLabel && (
        <div className="mt-1 flex justify-between text-xs text-navy-500 dark:text-navy-400">
          <span>{Math.round(percentage)}%</span>
        </div>
      )}
    </div>
  );
}
