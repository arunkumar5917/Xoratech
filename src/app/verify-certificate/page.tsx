"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { LoadingSpinner } from "@/components/ui/Loading";
import { verifyCertificate } from "@/app/actions";
import { CheckCircle, XCircle, Search, ShieldCheck } from "lucide-react";

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
      <section className="relative overflow-hidden bg-white pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="absolute inset-0 grid-light opacity-60" />
        <div className="container-x relative">
          <div className="mx-auto max-w-2xl text-center">
            <span className="section-label">
              Certificate Verification
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold text-navy-950 sm:text-5xl">
              Verify Xora Internship Certificate
            </h1>
            <p className="mt-6 text-lg text-navy-500">
              Enter a certificate ID to verify its authenticity and view details.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="container-x">
          <div className="mx-auto max-w-lg">
            {/* Search Form */}
            <form onSubmit={handleVerify} className="rounded-2xl border border-navy-50 bg-white p-6 shadow-card">
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
                    placeholder="Enter Certificate ID (e.g. XORA-ABC123456789)"
                    className="input !pr-10"
                  />
                  <ShieldCheck className="absolute right-3 top-3.5 h-4 w-4 text-navy-300" />
                </div>
                <Button type="submit" variant="primary" disabled={status === "loading" || !certificateId.trim()}>
                  {status === "loading" ? <LoadingSpinner /> : <Search className="h-4 w-4" />}
                  Verify
                </Button>
              </div>
            </form>

            {/* Result */}
            {status === "success" && data && (
              <div className="mt-8 overflow-hidden rounded-2xl border border-green-100 bg-white shadow-card">
                <div className="bg-green-50 px-6 py-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm font-bold text-green-700">Certificate Verified</span>
                  </div>
                </div>
                <div className="divide-y divide-navy-50 px-6 py-4">
                  {[
                    ["Student Name", data.student_name],
                    ["Internship Domain", data.internship_domain],
                    ["Internship Duration", data.internship_duration],
                    ["Completion Status", data.completion_status],
                    ["Certificate ID", data.certificate_id],
                    ["Issue Date", data.issue_date],
                  ].map(([label, value]) => (
                    <div key={label} className="flex items-center justify-between py-3.5">
                      <span className="text-sm text-navy-400">{label}</span>
                      <span className="text-sm font-semibold text-navy-900">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {status === "error" && (
              <div className="mt-8 rounded-2xl bg-red-50 p-6 text-center">
                <XCircle className="mx-auto h-10 w-10 text-red-400" />
                <p className="mt-3 text-sm font-medium text-red-600">{errorMessage}</p>
                <p className="mt-1 text-xs text-red-400">
                  Please check the certificate ID and try again.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}