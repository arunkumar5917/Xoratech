"use client";

import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQ_DATA } from "@/data/faqs";
import {
  HelpCircle,
  X,
  Search,
  ChevronDown,
  MessageCircleQuestion,
  Send,
  Sparkles,
  Phone,
  MessageCircle,
  CheckCircle2,
  GraduationCap,
  Briefcase,
  ShieldCheck,
  Layers,
} from "lucide-react";
import { TEL_LINK, PHONE_DISPLAY, WHATSAPP_LINK } from "@/lib/utils";

const CATEGORIES = [
  { id: "all", label: "All Questions", icon: Layers },
  { id: "internships", label: "Internships", icon: GraduationCap },
  { id: "services", label: "Business Services", icon: Briefcase },
  { id: "certificates", label: "Certificates", icon: ShieldCheck },
  { id: "general", label: "General", icon: HelpCircle },
];

export function HelpFaqModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [openAccordionId, setOpenAccordionId] = useState<string | null>("faq-1");
  const [activeTab, setActiveTab] = useState<"faqs" | "ask">("faqs");

  // Ask form state
  const [askName, setAskName] = useState("");
  const [askContact, setAskContact] = useState("");
  const [askCategory, setAskCategory] = useState("General Query");
  const [askQuestion, setAskQuestion] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Close on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const filteredFaqs = useMemo(() => {
    return FAQ_DATA.filter((item) => {
      const matchesCategory =
        selectedCategory === "all" || item.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleAskSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!askQuestion.trim() || !askName.trim()) return;

    setSubmitting(true);
    try {
      // Send to contact API
      await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: askName,
          emailOrPhone: askContact,
          serviceOrDomain: askCategory,
          message: askQuestion,
          type: "faq_question",
        }),
      });
    } catch {
      // Graceful fallback
    } finally {
      setSubmitting(false);
      setIsSubmitted(true);
    }
  };

  const openWhatsAppWithQuestion = () => {
    const text = encodeURIComponent(
      `Hi XORA Technologies, I have a doubt/question:\n\nName: ${askName || "Student/Client"}\nCategory: ${askCategory}\nQuestion: ${askQuestion || searchQuery || "I would like more info about your programs."}`
    );
    window.open(`https://wa.me/919894279003?text=${text}`, "_blank");
  };

  return (
    <>
      {/* TRIGGER BUTTON IN NAVIGATION BAR */}
      <button
        type="button"
        onClick={() => {
          setIsOpen(true);
          setIsSubmitted(false);
        }}
        aria-label="Frequently Asked Questions and Help"
        className="relative group inline-flex items-center gap-1.5 rounded-xl border border-navy-100 bg-white/90 px-3 py-2 text-xs font-semibold text-navy-700 shadow-sm backdrop-blur-md transition-all duration-200 hover:border-xora-400 hover:bg-white hover:text-xora-600 hover:shadow-md active:scale-95 dark:border-navy-800 dark:bg-navy-900/90 dark:text-navy-200 dark:hover:border-xora-500 dark:hover:text-white"
      >
        <span className="flex h-5 w-5 items-center justify-center rounded-lg bg-xora-50 text-xora-600 dark:bg-xora-950/70 dark:text-xora-400 group-hover:bg-xora-gradient group-hover:text-white transition-colors">
          <HelpCircle className="h-3.5 w-3.5" />
        </span>
        <span className="hidden sm:inline">FAQs & Doubts</span>

        {/* Pulsing indicator dot */}
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-xora-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-xora-500" />
        </span>
      </button>

      {/* FULL MODAL OVERLAY & DRAWER */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-navy-950/70 backdrop-blur-md"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative z-10 flex flex-col w-full max-w-3xl max-h-[90vh] overflow-hidden rounded-3xl border border-navy-100 bg-white shadow-2xl dark:border-navy-800 dark:bg-navy-950"
            >
              {/* Header */}
              <div className="relative border-b border-navy-100 bg-gradient-to-r from-navy-50/80 via-white to-xora-50/40 p-5 sm:p-6 dark:border-navy-800 dark:from-navy-900 dark:via-navy-950 dark:to-xora-950/20">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-xora-gradient text-white shadow-glow">
                      <MessageCircleQuestion className="h-6 w-6" />
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-display text-lg sm:text-xl font-bold text-navy-950 dark:text-white">
                          Help & Frequently Asked Questions
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-navy-500 dark:text-navy-400">
                        Find quick answers to common queries or submit your specific doubt.
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => setIsOpen(false)}
                    aria-label="Close modal"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-navy-100/70 text-navy-500 transition-colors hover:bg-navy-200 hover:text-navy-950 dark:bg-navy-800 dark:text-navy-400 dark:hover:bg-navy-700 dark:hover:text-white"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Tabs: FAQs vs Ask Question */}
                <div className="mt-5 flex items-center gap-2 border-b border-navy-200/60 dark:border-navy-800">
                  <button
                    type="button"
                    onClick={() => setActiveTab("faqs")}
                    className={`relative pb-2.5 text-xs sm:text-sm font-semibold transition-colors ${
                      activeTab === "faqs"
                        ? "text-xora-600 dark:text-xora-400"
                        : "text-navy-500 hover:text-navy-800 dark:text-navy-400 dark:hover:text-white"
                    }`}
                  >
                    Browse FAQs ({FAQ_DATA.length})
                    {activeTab === "faqs" && (
                      <motion.div
                        layoutId="modalTabIndicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-xora-500"
                      />
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("ask")}
                    className={`relative pb-2.5 text-xs sm:text-sm font-semibold transition-colors ${
                      activeTab === "ask"
                        ? "text-xora-600 dark:text-xora-400"
                        : "text-navy-500 hover:text-navy-800 dark:text-navy-400 dark:hover:text-white"
                    }`}
                  >
                    Ask a Doubt / Query
                    {activeTab === "ask" && (
                      <motion.div
                        layoutId="modalTabIndicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-xora-500"
                      />
                    )}
                  </button>
                </div>
              </div>

              {/* Modal Body */}
              <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">
                {activeTab === "faqs" ? (
                  <>
                    {/* Search Input */}
                    <div className="relative">
                      <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-navy-400" />
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search your question (e.g. internships, certificates, duration)..."
                        className="w-full rounded-xl border border-navy-200/80 bg-navy-50/50 py-2.5 pl-10 pr-10 text-xs sm:text-sm text-navy-950 placeholder:text-navy-400 focus:border-xora-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-xora-500/20 dark:border-navy-800 dark:bg-navy-900/60 dark:text-white dark:placeholder:text-navy-500 dark:focus:bg-navy-900"
                      />
                      {searchQuery && (
                        <button
                          type="button"
                          onClick={() => setSearchQuery("")}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-navy-400 hover:text-navy-700 dark:hover:text-navy-200"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      )}
                    </div>

                    {/* Category Filter Pills */}
                    <div className="flex flex-wrap gap-1.5">
                      {CATEGORIES.map((cat) => {
                        const Icon = cat.icon;
                        const isSelected = selectedCategory === cat.id;
                        return (
                          <button
                            key={cat.id}
                            type="button"
                            onClick={() => setSelectedCategory(cat.id)}
                            className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
                              isSelected
                                ? "bg-xora-500 text-white shadow-sm"
                                : "bg-navy-50 text-navy-600 hover:bg-navy-100 dark:bg-navy-900 dark:text-navy-300 dark:hover:bg-navy-800"
                            }`}
                          >
                            <Icon className="h-3 w-3" />
                            <span>{cat.label}</span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Accordion Questions List */}
                    <div className="space-y-2.5">
                      {filteredFaqs.length > 0 ? (
                        filteredFaqs.map((faq) => {
                          const isOpenItem = openAccordionId === faq.id;
                          return (
                            <div
                              key={faq.id}
                              className="overflow-hidden rounded-xl border border-navy-100/90 bg-white dark:border-navy-800/90 dark:bg-navy-900/70 transition-all"
                            >
                              <button
                                type="button"
                                onClick={() =>
                                  setOpenAccordionId(isOpenItem ? null : faq.id)
                                }
                                className="flex w-full items-center justify-between gap-3 p-3.5 text-left transition-colors hover:bg-navy-50/50 dark:hover:bg-navy-800/40"
                              >
                                <span className="text-xs sm:text-sm font-bold text-navy-900 dark:text-white">
                                  {faq.question}
                                </span>
                                <ChevronDown
                                  className={`h-4 w-4 shrink-0 text-navy-400 transition-transform duration-200 ${
                                    isOpenItem ? "rotate-180 text-xora-500" : ""
                                  }`}
                                />
                              </button>

                              <AnimatePresence initial={false}>
                                {isOpenItem && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.2, ease: "easeInOut" }}
                                  >
                                    <div className="border-t border-navy-50 px-3.5 pt-2.5 pb-3.5 text-xs sm:text-[13px] leading-relaxed text-navy-600 dark:border-navy-800 dark:text-navy-300">
                                      {faq.answer}
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          );
                        })
                      ) : (
                        <div className="rounded-2xl border border-dashed border-navy-200 p-8 text-center dark:border-navy-800">
                          <p className="text-sm font-semibold text-navy-800 dark:text-navy-200">
                            No matching FAQs found for &ldquo;{searchQuery}&rdquo;
                          </p>
                          <p className="mt-1 text-xs text-navy-500 dark:text-navy-400">
                            Have a specific question? Ask our support team directly.
                          </p>
                          <button
                            type="button"
                            onClick={() => {
                              setAskQuestion(searchQuery);
                              setActiveTab("ask");
                            }}
                            className="mt-3.5 inline-flex items-center gap-1.5 rounded-xl bg-xora-gradient px-4 py-2 text-xs font-semibold text-white shadow-sm hover:shadow-glow"
                          >
                            <Sparkles className="h-3.5 w-3.5" />
                            <span>Ask This Doubt Directly</span>
                          </button>
                        </div>
                      )}
                    </div>
                  </>
                ) : (
                  /* ASK A QUESTION / DOUBT FORM */
                  <div>
                    {isSubmitted ? (
                      <div className="rounded-2xl bg-emerald-50/80 p-6 text-center dark:bg-emerald-950/40 border border-emerald-500/30">
                        <CheckCircle2 className="mx-auto h-10 w-10 text-emerald-500" />
                        <h4 className="mt-3 font-display text-base font-bold text-emerald-900 dark:text-emerald-200">
                          Your Question Has Been Received!
                        </h4>
                        <p className="mt-1.5 text-xs text-emerald-700 dark:text-emerald-300">
                          Our technical mentorship team will review and reply to your contact details promptly.
                        </p>
                        <div className="mt-5 flex justify-center gap-3">
                          <button
                            type="button"
                            onClick={() => {
                              setIsSubmitted(false);
                              setAskQuestion("");
                              setActiveTab("faqs");
                            }}
                            className="rounded-xl bg-white px-4 py-2 text-xs font-semibold text-navy-800 shadow-sm border border-navy-200 dark:bg-navy-900 dark:text-white dark:border-navy-700"
                          >
                            Back to FAQs
                          </button>
                          <button
                            type="button"
                            onClick={openWhatsAppWithQuestion}
                            className="inline-flex items-center gap-1.5 rounded-xl bg-green-600 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-green-700"
                          >
                            <MessageCircle className="h-3.5 w-3.5" />
                            <span>Ask on WhatsApp</span>
                          </button>
                        </div>
                      </div>
                    ) : (
                      <form onSubmit={handleAskSubmit} className="space-y-4">
                        <div className="grid gap-3.5 sm:grid-cols-2">
                          <div>
                            <label className="block text-xs font-semibold text-navy-900 dark:text-white mb-1">
                              Your Name *
                            </label>
                            <input
                              type="text"
                              required
                              value={askName}
                              onChange={(e) => setAskName(e.target.value)}
                              placeholder="e.g. Rahul Sharma"
                              className="w-full rounded-xl border border-navy-200 bg-white px-3.5 py-2 text-xs text-navy-950 placeholder:text-navy-400 focus:border-xora-500 focus:outline-none dark:border-navy-800 dark:bg-navy-900 dark:text-white"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-semibold text-navy-900 dark:text-white mb-1">
                              Email or WhatsApp Number *
                            </label>
                            <input
                              type="text"
                              required
                              value={askContact}
                              onChange={(e) => setAskContact(e.target.value)}
                              placeholder="+91 98765 43210 or name@gmail.com"
                              className="w-full rounded-xl border border-navy-200 bg-white px-3.5 py-2 text-xs text-navy-950 placeholder:text-navy-400 focus:border-xora-500 focus:outline-none dark:border-navy-800 dark:bg-navy-900 dark:text-white"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-navy-900 dark:text-white mb-1">
                            Topic / Category
                          </label>
                          <select
                            value={askCategory}
                            onChange={(e) => setAskCategory(e.target.value)}
                            className="w-full rounded-xl border border-navy-200 bg-white px-3.5 py-2 text-xs text-navy-950 focus:border-xora-500 focus:outline-none dark:border-navy-800 dark:bg-navy-900 dark:text-white"
                          >
                            <option value="Internship Domains & Application">Internship Domains & Application</option>
                            <option value="Certificate Verification & Legitimacy">Certificate Verification</option>
                            <option value="Business Software Development">Business Software Development</option>
                            <option value="Mentorship & Project Guidance">Mentorship & Project Guidance</option>
                            <option value="General Doubt">General Doubt</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-navy-900 dark:text-white mb-1">
                            Your Question / Doubt Details *
                          </label>
                          <textarea
                            rows={3}
                            required
                            value={askQuestion}
                            onChange={(e) => setAskQuestion(e.target.value)}
                            placeholder="Type your question or doubt here in detail..."
                            className="w-full rounded-xl border border-navy-200 bg-white px-3.5 py-2 text-xs text-navy-950 placeholder:text-navy-400 focus:border-xora-500 focus:outline-none dark:border-navy-800 dark:bg-navy-900 dark:text-white"
                          />
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                          <button
                            type="button"
                            onClick={openWhatsAppWithQuestion}
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 rounded-xl border border-green-500/30 bg-green-50 px-4 py-2.5 text-xs font-semibold text-green-700 hover:bg-green-100 dark:bg-green-950/40 dark:text-green-300"
                          >
                            <MessageCircle className="h-3.5 w-3.5 text-green-600" />
                            <span>Ask Instantly via WhatsApp</span>
                          </button>

                          <button
                            type="submit"
                            disabled={submitting}
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 rounded-xl bg-xora-gradient px-5 py-2.5 text-xs font-semibold text-white shadow-card hover:shadow-glow disabled:opacity-60"
                          >
                            <Send className="h-3.5 w-3.5" />
                            <span>{submitting ? "Sending..." : "Submit Question"}</span>
                          </button>
                        </div>
                      </form>
                    )}
                  </div>
                )}
              </div>

              {/* Footer Quick Reach Bar */}
              <div className="border-t border-navy-100 bg-navy-50/70 p-3.5 sm:px-6 dark:border-navy-800 dark:bg-navy-900/60 flex flex-wrap items-center justify-between gap-3 text-[11px] text-navy-500 dark:text-navy-400">
                <div className="flex items-center gap-3">
                  <span className="font-semibold text-navy-700 dark:text-navy-300">Need immediate help?</span>
                  <a href={TEL_LINK} className="inline-flex items-center gap-1 hover:text-xora-600 dark:hover:text-white">
                    <Phone className="h-3 w-3 text-xora-500" />
                    <span>{PHONE_DISPLAY}</span>
                  </a>
                  <span>•</span>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-green-600 hover:underline">
                    <MessageCircle className="h-3 w-3" />
                    <span>WhatsApp Chat</span>
                  </a>
                </div>

                <span>XORA Technologies Knowledge & Support</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
