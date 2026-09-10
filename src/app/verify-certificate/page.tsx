"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { LoadingSpinner } from "@/components/ui/Loading";
import { verifyCertificate } from "@/app/actions";
import { CheckCircle, XCircle, Search, ShieldCheck, Award } from "lucide-react";
import { FadeIn } from "@/components/animations";

type CertificateData = {
  student_name: string;
  internship_domain: string;
  internship_duration: string;
  completion_status: string;
  certificate_id: string;
  issue_date: string;
};

export default function VerifyCertificatePage() {
  const [certificateId, setCertificateId] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [data, setData] = useState<CertificateData | null>(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!certificateId.trim()) return;

    setStatus("loading");
    const result = await verifyCertificate(certificateId);

    if (result.success && result.data) {
      setData(result.data);
      setStatus("success");
    } else {
      setErrorMessage(result.message || "Certificate not found.");
      setStatus("error");
    }
  };

  return (
    <>
      <section className="relative overflow-hidden pt-28 pb-14 lg:pt-36 lg:pb-20">
        <div className="absolute inset-0 grid-light opacity-60 dark:opacity-20 pointer-events-none" />
        <div className="container-x relative">
          <FadeIn direction="up" className="mx-auto max-w-2xl text-center">
            <span className="section-label">
              <Award className="h-3.5 w-3.5" />
              Certificate Verification
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold text-navy-950 dark:text-white sm:text-5xl">
              Verify Xora Internship Certificate
            </h1>
            <p className="mt-4 text-base sm:text-lg text-navy-600 dark:text-navy-300">
              Enter a certificate ID to verify its authenticity and view official credentials.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-20 lg:pb-28">
        <div className="container-x">
          <div className="mx-auto max-w-lg">
            {/* Search Form */}
            <FadeIn direction="up" delay={0.1}>
              <form onSubmit={handleVerify} className="rounded-3xl border border-navy-100 dark:border-navy-800 bg-white/80 dark:bg-navy-900/80 backdrop-blur-md p-6 sm:p-8 shadow-card">
                <div className="flex flex-col gap-3 sm:flex-row">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      value={certificateId}
                      onChange={(e) => {
                        setCertificateId(e.target.value);
                        setStatus("idle");
                        setData(null);
                      }}
                      placeholder="Enter ID (e.g. XORA-ABC123456789)"
                      className="input !pr-10 font-mono text-sm"
                    />
                    <ShieldCheck className="absolute right-3 top-3.5 h-4 w-4 text-navy-400 dark:text-navy-500" />
                  </div>
                  <Button type="submit" variant="primary" disabled={status === "loading" || !certificateId.trim()}>
                    {status === "loading" ? <LoadingSpinner /> : <Search className="h-4 w-4" />}
                    Verify
                  </Button>
                </div>
              </form>
            </FadeIn>

            {/* Results AnimatePresence */}
            <AnimatePresence mode="wait">
              {status === "success" && data && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="mt-8 overflow-hidden rounded-3xl border border-green-200 dark:border-green-800/80 bg-white/95 dark:bg-navy-900/95 backdrop-blur-md shadow-card"
                >
                  <div className="bg-green-50 dark:bg-green-950/40 px-6 py-4 border-b border-green-200 dark:border-green-800/50">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                      <span className="text-sm font-bold text-green-700 dark:text-green-300">Official Certificate Verified</span>
                    </div>
                  </div>
                  <div className="divide-y divide-navy-100 dark:divide-navy-800 px-6 py-4">
                    {[
                      ["Student Name", data.student_name],
                      ["Internship Domain", data.internship_domain],
                      ["Internship Duration", data.internship_duration],
                      ["Completion Status", data.completion_status],
                      ["Certificate ID", data.certificate_id],
                      ["Issue Date", data.issue_date],
                    ].map(([label, value]) => (
                      <div key={label} className="flex items-center justify-between py-3.5">
                        <span className="text-sm text-navy-500 dark:text-navy-400">{label}</span>
                        <span className="text-sm font-semibold text-navy-900 dark:text-white">{value}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  key="error"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: [0, -6, 6, -4, 4, 0] }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="mt-8 rounded-2xl border border-red-200 dark:border-red-900/50 bg-red-50 dark:bg-red-950/30 p-6 text-center"
                >
                  <XCircle className="mx-auto h-10 w-10 text-red-500 dark:text-red-400" />
                  <p className="mt-3 text-sm font-medium text-red-600 dark:text-red-300">{errorMessage}</p>
                  <p className="mt-1 text-xs text-red-500 dark:text-red-400">
                    Please check the certificate ID and try again.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  );
}