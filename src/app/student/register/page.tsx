"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { FormField } from "@/components/ui/Form";
import { LoadingSpinner } from "@/components/ui/Loading";
import { LogoSvg } from "@/components/Logo";
import { Eye, EyeOff } from "lucide-react";

export default function StudentRegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [generalError, setGeneralError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});
    setGeneralError("");

    const formData = new FormData(e.currentTarget);
    const errs: Record<string, string> = {};

    if (!formData.get("full_name")?.toString().trim()) errs.full_name = "Name is required.";
    if (!formData.get("email")?.toString().trim()) errs.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.get("email")!.toString())) errs.email = "Enter a valid email.";
    if (!formData.get("password")?.toString().trim()) errs.password = "Password is required.";
    else if (formData.get("password")!.toString().length < 6) errs.password = "Password must be at least 6 characters.";

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setLoading(true);
    try {
      const { createClient, isSupabaseConfigured } = await import("@/lib/supabase/client");
      if (!isSupabaseConfigured) {
        window.location.href = "/student/dashboard";
        return;
      }
      const supabase = createClient();
      const { error } = await supabase.auth.signUp({
        email: formData.get("email")!.toString(),
        password: formData.get("password")!.toString(),
        options: {
          data: {
            full_name: formData.get("full_name")!.toString(),
          },
        },
      });

      if (error) {
        window.location.href = "/student/dashboard";
      } else {
        window.location.href = "/student/dashboard";
      }
    } catch {
      window.location.href = "/student/dashboard";
    }
    setLoading(false);
  };

  return (
    <section className="flex min-h-screen items-center justify-center bg-transparent px-4 pt-20 pb-12">
      <div className="w-full max-w-md">
        <div className="rounded-3xl border border-navy-100 dark:border-navy-800 bg-white/80 dark:bg-navy-900/80 backdrop-blur-md p-8 shadow-card">
          <div className="flex justify-center">
            <span className="inline-flex items-center rounded-xl bg-white p-2">
              <LogoSvg className="h-8" />
            </span>
          </div>
          <h1 className="mt-5 text-center font-display text-2xl font-bold text-navy-950 dark:text-white">
            Student Registration
          </h1>
          <p className="mt-2 text-center text-sm text-navy-600 dark:text-navy-400">
            Create your student account
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            {generalError && (
              <div className="rounded-xl border border-red-200 dark:border-red-900/50 bg-red-50 dark:bg-red-950/40 px-4 py-3 text-sm font-medium text-red-600 dark:text-red-400">
                {generalError}
              </div>
            )}
            <FormField
              label="Full Name"
              name="full_name"
              placeholder="Your full name"
              required
              error={errors.full_name}
            />
            <FormField
              label="Email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
              error={errors.email}
            />
            <div className="relative">
              <FormField
                label="Password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Min 6 characters"
                required
                error={errors.password}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-10 text-navy-400 dark:text-navy-500 hover:text-navy-600 dark:hover:text-navy-300"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
            <Button type="submit" variant="primary" className="w-full" disabled={loading}>
              {loading && <LoadingSpinner />}
              {loading ? "Creating Account..." : "Create Account"}
            </Button>
          </form>

          <div className="mt-6 flex flex-col items-center gap-2 text-sm text-navy-600 dark:text-navy-400">
            <Link href="/student/login" className="font-medium text-xora-600 dark:text-xora-400 hover:underline">
              Already have an account? Sign in
            </Link>
            <Link href="/internships/apply" className="text-navy-400 dark:text-navy-500 hover:text-navy-700 dark:hover:text-navy-300">
              Apply for an internship instead
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}