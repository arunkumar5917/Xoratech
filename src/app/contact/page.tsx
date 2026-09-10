"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { Phone, MessageCircle, Globe, MapPin, Sparkles } from "lucide-react";
import { PHONE_DISPLAY, TEL_LINK, WHATSAPP_LINK, WEBSITE, ADDRESS, MAPS_URL } from "@/lib/utils";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  HoverCard,
} from "@/components/animations";

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-28 pb-14 lg:pt-36 lg:pb-18">
        <div className="absolute inset-0 grid-light opacity-60 dark:opacity-20 pointer-events-none" />
        <div className="container-x relative">
          <FadeIn direction="up" className="mx-auto max-w-2xl text-center">
            <span className="section-label">
              <Sparkles className="h-3.5 w-3.5" />
              Get in Touch
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold text-navy-950 dark:text-white sm:text-5xl">
              Contact Us
            </h1>
            <p className="mt-4 text-base sm:text-lg text-navy-600 dark:text-navy-300">
              Have a question or ready to start? Reach out and we&apos;ll respond quickly.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Cards */}
            <div>
              <FadeIn direction="right">
                <h2 className="font-display text-2xl font-bold text-navy-950 dark:text-white">Reach Us Directly</h2>
                <p className="mt-3 text-sm text-navy-600 dark:text-navy-400">
                  The fastest way to reach us is by phone or WhatsApp.
                </p>
              </FadeIn>
              <StaggerContainer staggerDelay={0.08} className="mt-8 space-y-4">
                <StaggerItem>
                  <HoverCard lift={-3}>
                    <a
                      href={TEL_LINK}
                      className="group flex items-center gap-4 rounded-2xl border border-navy-100 dark:border-navy-800 bg-white/80 dark:bg-navy-900/80 backdrop-blur-md p-5 shadow-card transition-all"
                    >
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-xora-50 dark:bg-xora-950/60 text-xora-600 dark:text-xora-400 transition-colors group-hover:bg-xora-gradient group-hover:text-white">
                        <Phone className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-navy-400 dark:text-navy-500">Call / WhatsApp</p>
                        <p className="mt-0.5 text-base font-semibold text-navy-900 dark:text-white">{PHONE_DISPLAY}</p>
                      </div>
                    </a>
                  </HoverCard>
                </StaggerItem>
                <StaggerItem>
                  <HoverCard lift={-3}>
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 rounded-2xl border border-navy-100 dark:border-navy-800 bg-white/80 dark:bg-navy-900/80 backdrop-blur-md p-5 shadow-card transition-all"
                    >
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-50 dark:bg-green-950/50 text-green-600 dark:text-green-400 transition-colors group-hover:bg-green-500 group-hover:text-white">
                        <MessageCircle className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-navy-400 dark:text-navy-500">WhatsApp</p>
                        <p className="mt-0.5 text-base font-semibold text-navy-900 dark:text-white">Chat with us directly</p>
                      </div>
                    </a>
                  </HoverCard>
                </StaggerItem>
                <StaggerItem>
                  <HoverCard lift={-3}>
                    <a
                      href={`https://${WEBSITE}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 rounded-2xl border border-navy-100 dark:border-navy-800 bg-white/80 dark:bg-navy-900/80 backdrop-blur-md p-5 shadow-card transition-all"
                    >
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-50 dark:bg-navy-800 text-navy-700 dark:text-navy-300 transition-colors group-hover:bg-navy-950 dark:group-hover:bg-navy-700 group-hover:text-white">
                        <Globe className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-navy-400 dark:text-navy-500">Website</p>
                        <p className="mt-0.5 text-base font-semibold text-navy-900 dark:text-white">{WEBSITE}</p>
                      </div>
                    </a>
                  </HoverCard>
                </StaggerItem>
                <StaggerItem>
                  <HoverCard lift={-3}>
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(ADDRESS)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 rounded-2xl border border-navy-100 dark:border-navy-800 bg-white/80 dark:bg-navy-900/80 backdrop-blur-md p-5 shadow-card transition-all"
                    >
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-xora-50 dark:bg-xora-950/60 text-xora-600 dark:text-xora-400 transition-colors group-hover:bg-xora-gradient group-hover:text-white">
                        <MapPin className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-navy-400 dark:text-navy-500">Office Address</p>
                        <p className="mt-0.5 text-base font-semibold text-navy-900 dark:text-white">{ADDRESS}</p>
                      </div>
                    </a>
                  </HoverCard>
                </StaggerItem>
              </StaggerContainer>
            </div>

            {/* Quick Enquiry */}
            <FadeIn direction="left" delay={0.2}>
              <div>
                <h2 className="font-display text-2xl font-bold text-navy-950 dark:text-white">Quick Enquiry</h2>
                <p className="mt-3 text-sm text-navy-600 dark:text-navy-400">
                  For detailed enquiries, visit our business contact page or application portal.
                </p>
                <div className="mt-8 flex flex-col gap-3">
                  <Button href="/business/contact" variant="primary" className="w-full">
                    Business Enquiry
                  </Button>
                  <Button href="/internships/apply" variant="navy" className="w-full">
                    Internship Application
                  </Button>
                </div>

                <div className="mt-8 rounded-2xl bg-navy-950 border border-navy-800 p-6 shadow-card">
                  <h3 className="text-sm font-bold text-white">Office Hours</h3>
                  <div className="mt-3 space-y-2 text-sm text-navy-200">
                    <div className="flex justify-between">
                      <span>Monday – Friday</span>
                      <span className="font-medium text-white">9:00 AM – 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span className="font-medium text-white">10:00 AM – 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="font-medium text-xora-300">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="pb-20 lg:pb-28">
        <div className="container-x">
          <FadeIn direction="up">
            <div className="rounded-3xl border border-navy-100 dark:border-navy-800 overflow-hidden shadow-card">
              <iframe
                title="XORA Technologies Location"
                src={MAPS_URL}
                className="h-[400px] w-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}