"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme");
    if (stored === "dark" || (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  if (!mounted) {
    return (
      <div className={`h-9 w-9 rounded-xl border border-navy-100 bg-white dark:border-navy-800 dark:bg-navy-900 ${className}`} />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className={`relative flex h-9 w-9 items-center justify-center rounded-xl border border-navy-100 bg-white/80 text-navy-700 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-xora-500 hover:text-xora-600 hover:shadow-glow hover:scale-105 active:scale-95 dark:border-navy-800 dark:bg-navy-900/80 dark:text-navy-200 dark:hover:border-xora-400 dark:hover:text-xora-400 ${className}`}
      aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
      title={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
    >
      {theme === "light" ? (
        <Moon className="h-4 w-4 transition-transform duration-300 rotate-0 hover:-rotate-12" />
      ) : (
        <Sun className="h-4 w-4 transition-transform duration-300 rotate-0 hover:rotate-45 text-amber-400" />
      )}
    </button>
  );
}
