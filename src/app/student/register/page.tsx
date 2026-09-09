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
      const { createClient } = await import("@/lib/supabase/client");
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
        setGeneralError(error.message);
      } else {
        window.location.href = "/student/dashboard";
      }
    } catch {
      setGeneralError("Registration failed. Please try again.");
    }
    setLoading(false);
  };

  return (
    <section className="flex min-h-screen items-center justify-center bg-white px-4 pt-20 pb-12">
      <div className="w-full max-w-md">
        <div className="rounded-3xl border border-navy-50 bg-white p-8 shadow-card">
          <div className="flex justify-center">
            <LogoSvg className="h-8" />
          </div>
          <h1 className="mt-5 text-center font-display text-2xl font-bold text-navy-950">
            Student Registration
          </h1>
          <p className="mt-2 text-center text-sm text-navy-500">
            Create your student account
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            {generalError && (
              <div className="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
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
                className="absolute right-3 top-10 text-navy-300 hover:text-navy-600"
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

          <div className="mt-6 flex flex-col items-center gap-2 text-sm text-navy-500">
            <Link href="/student/login" className="font-medium text-xora-600 hover:underline">
              Already have an account? Sign in
            </Link>
            <Link href="/internships/apply" className="text-navy-400 hover:text-navy-600">
              Apply for an internship instead
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}