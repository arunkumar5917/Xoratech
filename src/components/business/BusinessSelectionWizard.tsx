"use client";

import React, { useState } from "react";
import Image from "next/image";
import { services } from "@/data/services";
import { packages } from "@/data/packages";
import { Button } from "@/components/ui/Button";
import { FormField, FormSuccess, FormError } from "@/components/ui/Form";
import { LoadingSpinner } from "@/components/ui/Loading";
import { submitEnquiry } from "@/app/actions";
import { WHATSAPP_LINK } from "@/lib/utils";
import {
  Check,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Star,
  Package as PackageIcon,
  Sparkles,
  Phone,
} from "lucide-react";

export function BusinessSelectionWizard() {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);
  const [selectedService, setSelectedService] = useState<string>(services[0].title);
  const [selectedPackage, setSelectedPackage] = useState<string>(packages[1].name);

  // Form State
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (data: FormData) => {
    const errs: Record<string, string> = {};
    if (!data.get("name")?.toString().trim()) errs.name = "Name is required.";
    if (!data.get("email")?.toString().trim()) errs.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(data.get("email")!.toString())) errs.email = "Enter a valid email.";
    if (!data.get("phone")?.toString().trim()) errs.phone = "Phone number is required.";
    if (!data.get("message")?.toString().trim()) errs.message = "Please describe your project requirement.";
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
      service: selectedService,
      package: selectedPackage,
      budget: formData.get("budget")?.toString() || "",
      message: formData.get("message")!.toString(),
    });

    if (result.success) {
      setStatus("success");
      setMessage(result.message || "Thank you! Your enquiry has been received. We will contact you within 24 hours.");
    } else {
      setStatus("error");
      setMessage(result.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <div id="selection-flow" className="scroll-mt-24 rounded-3xl border border-navy-100 bg-white/95 p-5 shadow-xl backdrop-blur-xl sm:p-8">
      {/* Step Indicators Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between max-w-2xl mx-auto">
          {/* Step 1 */}
          <button
            type="button"
            onClick={() => setCurrentStep(1)}
            className="flex items-center gap-2.5 text-left focus:outline-none group"
          >
            <span
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-xs font-bold transition-all ${
                currentStep === 1
                  ? "bg-xora-gradient text-white shadow-glow"
                  : currentStep > 1
                  ? "bg-green-500 text-white"
                  : "bg-navy-100 text-navy-500"
              }`}
            >
              {currentStep > 1 ? <Check className="h-4 w-4" /> : "1"}
            </span>
            <div className="hidden sm:block">
              <p className="text-[10px] font-bold uppercase tracking-wider text-navy-400">Step 1</p>
              <p className="text-xs font-bold text-navy-900 group-hover:text-xora-600 transition-colors">Select Service</p>
            </div>
          </button>

          <div className="flex-1 mx-3 h-0.5 bg-navy-100 relative">
            <div
              className="h-full bg-xora-gradient transition-all duration-300"
              style={{ width: currentStep === 1 ? "0%" : currentStep === 2 ? "50%" : "100%" }}
            />
          </div>

          {/* Step 2 */}
          <button
            type="button"
            onClick={() => setCurrentStep(2)}
            className="flex items-center gap-2.5 text-left focus:outline-none group"
          >
            <span
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-xs font-bold transition-all ${
                currentStep === 2
                  ? "bg-xora-gradient text-white shadow-glow"
                  : currentStep > 2
                  ? "bg-green-500 text-white"
                  : "bg-navy-100 text-navy-500"
              }`}
            >
              {currentStep > 2 ? <Check className="h-4 w-4" /> : "2"}
            </span>
            <div className="hidden sm:block">
              <p className="text-[10px] font-bold uppercase tracking-wider text-navy-400">Step 2</p>
              <p className="text-xs font-bold text-navy-900 group-hover:text-xora-600 transition-colors">Select Package</p>
            </div>
          </button>

          <div className="flex-1 mx-3 h-0.5 bg-navy-100 relative">
            <div
              className="h-full bg-xora-gradient transition-all duration-300"
              style={{ width: currentStep === 3 ? "100%" : "0%" }}
            />
          </div>

          {/* Step 3 */}
          <button
            type="button"
            onClick={() => setCurrentStep(3)}
            className="flex items-center gap-2.5 text-left focus:outline-none group"
          >
            <span
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-xs font-bold transition-all ${
                currentStep === 3
                  ? "bg-xora-gradient text-white shadow-glow"
                  : "bg-navy-100 text-navy-500"
              }`}
            >
              3
            </span>
            <div className="hidden sm:block">
              <p className="text-[10px] font-bold uppercase tracking-wider text-navy-400">Step 3</p>
              <p className="text-xs font-bold text-navy-900 group-hover:text-xora-600 transition-colors">Enquire Now</p>
            </div>
          </button>
        </div>
      </div>

      {/* STEP 1: SELECT OUR DIGITAL SERVICES */}
      {currentStep === 1 && (
        <div className="animate-in fade-in duration-300">
          <div className="text-center mb-5">
            <span className="section-label">Step 1: Select Service</span>
            <h2 className="mt-2 font-display text-xl font-bold text-navy-950 sm:text-2xl">
              1. Select Our Digital Services
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-navy-600">
              Click on the service you want for your business.
            </p>
          </div>

          <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const isSelected = selectedService === service.title;
              return (
                <button
                  key={service.slug}
                  type="button"
                  onClick={() => {
                    setSelectedService(service.title);
                  }}
                  className={`group relative flex flex-col items-start overflow-hidden rounded-2xl border text-left transition-all duration-200 ${
                    isSelected
                      ? "border-xora-500 bg-xora-50/70 ring-2 ring-xora-500/20 shadow-md"
                      : "border-navy-100 bg-white hover:border-navy-300 hover:shadow-sm"
                  }`}
                >
                  {/* Thumbnail Image */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-navy-950">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
                    <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/20 backdrop-blur-md text-white">
                        <service.icon className="h-3.5 w-3.5" />
                      </span>
                      <span
                        className={`flex h-5 w-5 items-center justify-center rounded-full border text-[10px] font-bold transition-all ${
                          isSelected
                            ? "border-xora-500 bg-xora-500 text-white"
                            : "border-white/60 bg-black/30 text-transparent"
                        }`}
                      >
                        ✓
                      </span>
                    </div>
                  </div>

                  <div className="p-3.5 w-full">
                    <h3 className="font-display text-sm font-bold text-navy-950 group-hover:text-xora-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-navy-600">
                      {service.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-navy-100 pt-4">
            <div className="text-xs sm:text-sm text-navy-600">
              Selected Service: <span className="font-bold text-xora-600">{selectedService}</span>
            </div>
            <Button
              type="button"
              variant="primary"
              onClick={() => setCurrentStep(2)}
              className="gap-2 w-full sm:w-auto text-xs sm:text-sm"
            >
              Next: Step 2 (Package Select)
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}

      {/* STEP 2: PACKAGE SELECT */}
      {currentStep === 2 && (
        <div className="animate-in fade-in duration-300">
          <div className="text-center mb-5">
            <span className="section-label">Step 2: Package Select</span>
            <h2 className="mt-2 font-display text-xl font-bold text-navy-950 sm:text-2xl">
              2. Package Select
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-navy-600">
              Selected Service: <span className="font-bold text-xora-600">{selectedService}</span>
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {packages.map((pkg) => {
              const isSelected = selectedPackage === pkg.name;
              return (
                <button
                  key={pkg.name}
                  type="button"
                  onClick={() => setSelectedPackage(pkg.name)}
                  className={`group relative flex flex-col rounded-3xl border p-5 text-left transition-all duration-200 ${
                    isSelected
                      ? "border-xora-500 bg-xora-50/50 ring-2 ring-xora-500/30 shadow-lg -translate-y-1"
                      : "border-navy-100 bg-white hover:border-navy-300 hover:shadow-md"
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-xora-gradient px-2.5 py-0.5 text-[11px] font-bold text-white shadow-glow">
                      <Star className="h-3 w-3" />
                      Popular
                    </div>
                  )}

                  <div className="flex items-center justify-between w-full">
                    <h3 className="font-display text-base font-bold text-navy-950">
                      {pkg.name}
                    </h3>
                    <span
                      className={`flex h-5 w-5 items-center justify-center rounded-full border text-xs font-bold transition-all ${
                        isSelected
                          ? "border-xora-500 bg-xora-500 text-white"
                          : "border-navy-200 text-transparent"
                      }`}
                    >
                      ✓
                    </span>
                  </div>

                  <div className="mt-2">
                    <span className="font-display text-3xl font-bold text-navy-950">
                      {pkg.price}
                    </span>
                  </div>

                  <ul className="mt-4 space-y-1.5 border-t border-navy-100 pt-3 flex-1">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-1.5 text-xs text-navy-700">
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-xora-500 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 w-full pt-1">
                    <div
                      className={`w-full text-center py-2 rounded-xl text-xs font-bold transition-colors ${
                        isSelected
                          ? "bg-xora-gradient text-white"
                          : "bg-navy-50 text-navy-800 group-hover:bg-navy-100"
                      }`}
                    >
                      {isSelected ? "Selected Package" : "Select This Package"}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-navy-100 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setCurrentStep(1)}
              className="gap-2 w-full sm:w-auto text-xs sm:text-sm"
            >
              <ChevronLeft className="h-4 w-4" />
              Back to Services
            </Button>
            <Button
              type="button"
              variant="primary"
              onClick={() => setCurrentStep(3)}
              className="gap-2 w-full sm:w-auto text-xs sm:text-sm"
            >
              Next: Step 3 (Enquire)
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}

      {/* STEP 3: ENQUIRE */}
      {currentStep === 3 && (
        <div className="animate-in fade-in duration-300">
          <div className="text-center mb-5">
            <span className="section-label">Step 3: Enquire</span>
            <h2 className="mt-2 font-display text-xl font-bold text-navy-950 sm:text-2xl">
              3. Submit Your Enquiry
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-navy-600">
              Review your selection and send your requirement.
            </p>
          </div>

          {/* Selected Summary Card */}
          <div className="mb-5 rounded-2xl border border-xora-200 bg-xora-50/70 p-3.5">
            <div className="flex flex-wrap items-center justify-between gap-2.5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-bold text-navy-500 uppercase tracking-wider">Your Selection:</span>
                <span className="inline-flex items-center rounded-full bg-white px-2.5 py-0.5 text-xs font-bold text-navy-900 border border-navy-200 shadow-sm">
                  Service: {selectedService}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-0.5 text-xs font-bold text-xora-600 border border-xora-200 shadow-sm">
                  <PackageIcon className="h-3 w-3" />
                  Package: {selectedPackage}
                </span>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setCurrentStep(1)}
                  className="text-xs font-semibold text-xora-600 underline underline-offset-2 hover:text-xora-700"
                >
                  Change Service
                </button>
                <span className="text-navy-300">·</span>
                <button
                  type="button"
                  onClick={() => setCurrentStep(2)}
                  className="text-xs font-semibold text-xora-600 underline underline-offset-2 hover:text-xora-700"
                >
                  Change Package
                </button>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {status === "success" && <FormSuccess message={message} />}
            {status === "error" && <FormError message={message} />}

            <div className="grid gap-4 sm:grid-cols-2">
              <FormField label="Your Full Name" name="name" placeholder="e.g. Arun Kumar" required error={errors.name} />
              <FormField label="Business / Company Name" name="business_name" placeholder="e.g. Acme Enterprises" />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <FormField label="Email Address" name="email" type="email" placeholder="you@company.com" required error={errors.email} />
              <FormField label="Phone / WhatsApp Number" name="phone" type="tel" placeholder="+91 98765 43210" required error={errors.phone} />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <FormField
                label="Selected Service"
                name="service"
                options={services.map((s) => s.title)}
                value={selectedService}
                required
              />
              <FormField
                label="Selected Package"
                name="package"
                options={packages.map((p) => p.name).concat(["Custom Solution"])}
                value={selectedPackage}
              />
            </div>

            <FormField
              label="Project Details & Requirements"
              name="message"
              placeholder="Describe your project, timeline, special features, or goals..."
              required
              textarea
              error={errors.message}
            />

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-navy-100">
              <Button
                type="button"
                variant="outline"
                onClick={() => setCurrentStep(2)}
                className="gap-2 w-full sm:w-auto text-xs sm:text-sm"
              >
                <ChevronLeft className="h-4 w-4" />
                Back to Packages
              </Button>

              <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full sm:w-auto">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-green-200 bg-green-50 px-4 py-2.5 text-xs sm:text-sm font-semibold text-green-700 hover:bg-green-100 transition-colors w-full sm:w-auto"
                >
                  <Phone className="h-4 w-4" />
                  Quick WhatsApp
                </a>
                <Button
                  type="submit"
                  variant="primary"
                  className="w-full sm:w-auto text-xs sm:text-sm"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? <LoadingSpinner /> : <Sparkles className="h-4 w-4" />}
                  {status === "loading" ? "Submitting..." : "Send Final Enquiry"}
                </Button>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
