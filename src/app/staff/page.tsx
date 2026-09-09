"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { FormField } from "@/components/ui/Form";
import { LoadingSpinner } from "@/components/ui/Loading";
import { Lock, Eye, EyeOff } from "lucide-react";

export default function StaffPage() {
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

    if (!formData.get("email")?.toString().trim()) errs.email = "Email is required.";
    if (!formData.get("password")?.toString().trim()) errs.password = "Password is required.";

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
      const { error } = await supabase.auth.signInWithPassword({
        email: formData.get("email")!.toString(),
        password: formData.get("password")!.toString(),
      });

      if (error) {
        setGeneralError("Invalid credentials. Access denied.");
      } else {
        window.location.href = "/staff/dashboard";
      }
    } catch {
      setGeneralError("Unable to sign in. Please try again.");
    }
    setLoading(false);
  };

  return (
    <section className="flex min-h-screen items-center justify-center bg-transparent px-4">
      <div className="w-full max-w-md">
        <div className="rounded-3xl border border-navy-100 dark:border-navy-800 bg-white/80 dark:bg-navy-900/80 backdrop-blur-md p-8 shadow-card">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-100 dark:bg-navy-800 text-navy-700 dark:text-xora-400 border border-navy-200 dark:border-navy-700 shadow-sm">
            <Lock className="h-7 w-7" />
          </div>
          <h1 className="mt-5 text-center font-display text-2xl font-bold text-navy-950 dark:text-white">
            Staff Login
          </h1>
          <p className="mt-2 text-center text-sm text-navy-600 dark:text-navy-400">
            Access staff dashboard
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            {generalError && (
              <div className="rounded-xl border border-red-200 dark:border-red-900/50 bg-red-50 dark:bg-red-950/40 px-4 py-3 text-sm font-medium text-red-600 dark:text-red-400">
                {generalError}
              </div>
            )}
            <FormField
              label="Email"
              name="email"
              type="email"
              placeholder="staff@xoratechnologies.in"
              required
              error={errors.email}
            />
            <div className="relative">
              <FormField
                label="Password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
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
            <Button type="submit" variant="navy" className="w-full" disabled={loading}>
              {loading && <LoadingSpinner />}
              {loading ? "Signing in..." : "Sign In"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}