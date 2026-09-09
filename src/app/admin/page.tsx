"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { FormField } from "@/components/ui/Form";
import { LoadingSpinner } from "@/components/ui/Loading";
import { Shield, Eye, EyeOff } from "lucide-react";

export default function AdminPage() {
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
        window.location.href = "/admin/dashboard";
      }
    } catch {
      setGeneralError("Unable to sign in. Please try again.");
    }
    setLoading(false);
  };

  return (
    <section className="flex min-h-screen items-center justify-center bg-white px-4">
      <div className="w-full max-w-md">
        <div className="rounded-3xl border border-navy-50 bg-white p-8 shadow-card">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-950 text-xora-400">
            <Shield className="h-7 w-7" />
          </div>
          <h1 className="mt-5 text-center font-display text-2xl font-bold text-navy-950">
            Admin Login
          </h1>
          <p className="mt-2 text-center text-sm text-navy-500">
            Authorized personnel only
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            {generalError && (
              <div className="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
                {generalError}
              </div>
            )}
            <FormField
              label="Email"
              name="email"
              type="email"
              placeholder="admin@xoratechnologies.in"
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
                className="absolute right-3 top-10 text-navy-300 hover:text-navy-600"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
            <Button type="submit" variant="primary" className="w-full" disabled={loading}>
              {loading && <LoadingSpinner />}
              {loading ? "Signing in..." : "Sign In"}
            </Button>
          </form>

          <p className="mt-6 text-center text-xs text-navy-400">
            This area is restricted to authorized staff only.
          </p>
        </div>
      </div>
    </section>
  );
}