"use client";

import React, { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { FormField, FormSuccess, FormError } from "@/components/ui/Form";
import { LoadingSpinner } from "@/components/ui/Loading";
import { submitEnquiry } from "@/app/actions";
import { services } from "@/data/services";
import { WHATSAPP_LINK, PHONE_DISPLAY, TEL_LINK, WEBSITE } from "@/lib/utils";
import { Phone, MessageCircle, Globe, Package as PackageIcon, X } from "lucide-react";

function ContactContent() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get("service");
  const packageParam = searchParams.get("package");

  const selectedService = serviceParam
    ? services.find((s) => s.slug === serviceParam)?.title || serviceParam
    : "";
  const selectedServiceObj = serviceParam
    ? services.find((s) => s.slug === serviceParam)
    : undefined;
  const selectedPackage = packageParam || "";

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (data: FormData) => {
    const errs: Record<string, string> = {};
    if (!data.get("name")?.toString().trim()) errs.name = "Name is required.";
    if (!data.get("email")?.toString().trim()) errs.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(data.get("email")!.toString())) errs.email = "Enter a valid email.";
    if (!data.get("phone")?.toString().trim()) errs.phone = "Phone number is required.";
    if (!data.get("service")?.toString().trim()) errs.service = "Select a service.";
    if (!data.get("message")?.toString().trim()) errs.message = "Please describe your requirement.";
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const errs = validate(formData);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus("loading");
    const result = await submitEnquiry({
      name: formData.get("name")!.toString(),
      business_name: formData.get("business_name")?.toString() || "",
      email: formData.get("email")!.toString(),
      phone: formData.get("phone")!.toString(),
      service: formData.get("service")!.toString(),
      package: formData.get("package")?.toString() || "",
      budget: formData.get("budget")?.toString() || "",
      message: formData.get("message")!.toString(),
    });

    if (result.success) {
      setStatus("success");
      setMessage(result.message || "Thank you! We'll be in touch soon.");
    } else {
      setStatus("error");
      setMessage(result.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <section className="relative overflow-hidden bg-transparent pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="absolute inset-0 grid-light opacity-60 dark:opacity-20 pointer-events-none" />
        <div className="container-x relative">
          <div className="mx-auto max-w-2xl text-center">
            <span className="section-label">Get in Touch</span>
            <h1 className="mt-6 font-display text-4xl font-bold text-navy-950 dark:text-white sm:text-5xl">
              Enquire About Your Package
            </h1>
            <p className="mt-6 text-lg text-navy-600 dark:text-navy-300">
              Tell us about your project and we&apos;ll get back to you with a tailored plan.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-transparent py-20 lg:py-28">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3 rounded-3xl border border-navy-100 dark:border-navy-800 bg-white/80 dark:bg-navy-900/80 backdrop-blur-md p-6 sm:p-10 shadow-card">
              <h2 className="font-display text-2xl font-bold text-navy-950 dark:text-white">Send an Enquiry</h2>
              <p className="mt-2 text-sm text-navy-600 dark:text-navy-400">
                Fill in the details below and our team will contact you within 24 hours.
              </p>

              {(selectedService || selectedPackage) && (
                <div className="mt-6 rounded-2xl border border-xora-200 dark:border-xora-800 bg-xora-50/60 dark:bg-xora-950/40 p-4">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-2">
                      {selectedService && (
                        <span className="inline-flex items-center rounded-full bg-white dark:bg-navy-800 px-3 py-1 text-xs font-semibold text-navy-800 dark:text-navy-200 ring-1 ring-navy-200 dark:ring-navy-700">
                          Service: {selectedService}
                        </span>
                      )}
                      {selectedPackage && (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-white dark:bg-navy-800 px-3 py-1 text-xs font-semibold text-xora-600 dark:text-xora-400 ring-1 ring-xora-200 dark:ring-xora-800">
                          <PackageIcon className="h-3 w-3" />
                          Package: {selectedPackage}
                        </span>
                      )}
                    </div>
                    <a
                      href={serviceParam ? `/business/packages?service=${serviceParam}` : "/business/packages"}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-xora-600 dark:text-xora-400 underline underline-offset-2"
                    >
                      <X className="h-3 w-3" />
                      Change
                    </a>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                {status === "success" && <FormSuccess message={message} />}
                {status === "error" && <FormError message={message} />}

                <input type="hidden" name="package" value={selectedPackage} />

                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField label="Your Name" name="name" placeholder="John Doe" required error={errors.name} />
                  <FormField label="Business Name" name="business_name" placeholder="Your Business" />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField label="Email" name="email" type="email" placeholder="john@business.com" required error={errors.email} />
                  <FormField label="Phone" name="phone" type="tel" placeholder="+91 98765 43210" required error={errors.phone} />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField
                    label="Required Service"
                    name="service"
                    options={services.map((s) => s.title)}
                    value={selectedService}
                    required
                    error={errors.service}
                  />
                  {selectedServiceObj && (
                    <div className="mt-2">
                      <a
                        href={`/business/services#${selectedServiceObj.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-xora-600 dark:text-xora-400 underline underline-offset-2 hover:text-xora-700 dark:hover:text-xora-300"
                      >
                        View Details
                      </a>
                    </div>
                  )}
                  <FormField
                    label="Estimated Budget"
                    name="budget"
                    options={["Under ₹5,000", "₹5,000 – ₹10,000", "₹10,000 – ₹25,000", "₹25,000 – ₹50,000", "Above ₹50,000"]}
                  />
                </div>
                <FormField label="Tell us about your project" name="message" placeholder="Describe your requirements, goals and timeline..." required textarea error={errors.message} />

                <Button type="submit" variant="primary" className="w-full sm:w-auto" disabled={status === "loading"}>
                  {status === "loading" ? <LoadingSpinner /> : null}
                  {status === "loading" ? "Sending..." : "Send Enquiry"}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h3 className="font-display text-lg font-semibold text-navy-950 dark:text-white">Contact Details</h3>
              <div className="mt-6 space-y-5">
                <a
                  href={TEL_LINK}
                  className="flex items-center gap-3.5 rounded-2xl border border-navy-100 dark:border-navy-800 bg-white/80 dark:bg-navy-900/80 backdrop-blur-md p-4 shadow-sm transition-all hover:shadow-card"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-xora-50 dark:bg-xora-950/60 text-xora-600 dark:text-xora-400">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-bold text-navy-400 dark:text-navy-500">Call / WhatsApp</p>
                    <p className="text-sm font-semibold text-navy-900 dark:text-white">{PHONE_DISPLAY}</p>
                  </div>
                </a>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 rounded-2xl border border-navy-100 dark:border-navy-800 bg-white/80 dark:bg-navy-900/80 backdrop-blur-md p-4 shadow-sm transition-all hover:shadow-card"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-50 dark:bg-green-950/50 text-green-600 dark:text-green-400">
                    <MessageCircle className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-bold text-navy-400 dark:text-navy-500">WhatsApp</p>
                    <p className="text-sm font-semibold text-navy-900 dark:text-white">Chat with us</p>
                  </div>
                </a>
                <a
                  href={`https://${WEBSITE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 rounded-2xl border border-navy-100 dark:border-navy-800 bg-white/80 dark:bg-navy-900/80 backdrop-blur-md p-4 shadow-sm transition-all hover:shadow-card"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy-50 dark:bg-navy-800 text-navy-700 dark:text-navy-300">
                    <Globe className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-bold text-navy-400 dark:text-navy-500">Website</p>
                    <p className="text-sm font-semibold text-navy-900 dark:text-white">{WEBSITE}</p>
                  </div>
                </a>
              </div>

              <div className="mt-8 rounded-2xl bg-navy-950 border border-navy-800 p-6">
                <h4 className="text-sm font-bold text-white">Quick Response</h4>
                <p className="mt-2 text-xs leading-relaxed text-navy-200">
                  We typically respond within 24 hours on business days. For urgent queries, call or WhatsApp us directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="min-h-[60vh]" />}>
      <ContactContent />
    </Suspense>
  );
}