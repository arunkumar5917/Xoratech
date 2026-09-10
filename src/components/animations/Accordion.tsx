"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type AccordionItem = {
  id: string;
  question: string;
  answer: string;
};

type FAQAccordionProps = {
  items: AccordionItem[];
  className?: string;
};

export function FAQAccordion({ items, className = "" }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id || null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className={cn("grid gap-3.5", className)}>
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className={cn(
              "overflow-hidden rounded-2xl border transition-colors duration-200",
              isOpen
                ? "border-xora-200 bg-white/90 shadow-card dark:border-navy-700 dark:bg-navy-900/90"
                : "border-navy-50 bg-white/70 hover:border-navy-100 hover:bg-white/85 dark:border-navy-800/80 dark:bg-navy-900/60 dark:hover:border-navy-700"
            )}
          >
            <button
              type="button"
              onClick={() => toggle(item.id)}
              className="flex w-full items-center justify-between gap-4 p-5 text-left font-display text-base font-semibold text-navy-950 transition-colors dark:text-white sm:p-6"
              aria-expanded={isOpen}
            >
              <span>{item.question}</span>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-navy-50 text-navy-600 dark:bg-navy-800 dark:text-navy-300"
              >
                <ChevronDown className="h-4 w-4" />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                >
                  <div className="border-t border-navy-50/80 px-5 pb-5 pt-3 text-sm leading-relaxed text-navy-600 dark:border-navy-800/60 dark:text-navy-300 sm:px-6 sm:pb-6">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
