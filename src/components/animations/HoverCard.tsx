"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

type HoverCardProps = {
  children: React.ReactNode;
  className?: string;
  lift?: number;
  scale?: number;
};

export function HoverCard({
  children,
  className = "",
  lift = -5,
  scale = 1.015,
}: HoverCardProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      whileHover={{
        y: lift,
        scale,
        transition: { duration: 0.25, ease: "easeOut" },
      }}
      whileTap={{ scale: 0.99 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
