"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { Phone, MessageCircle, Globe, MapPin } from "lucide-react";
import { PHONE_DISPLAY, TEL_LINK, WHATSAPP_LINK, WEBSITE, ADDRESS, MAPS_URL } from "@/lib/utils";

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="absolute inset-0 grid-light opacity-60" />
        <div className="container-x relative">
          <div className="mx-auto max-w-2xl text-center">
            <span className="section-label">Get in Touch</span>
            <h1 className="mt-6 font-display text-4xl font-bold text-navy-950 sm:text-5xl">
              Contact Us
            </h1>
            <p className="mt-6 text-lg text-navy-500">
              Have a question or ready to start? Reach out and we&apos;ll respond quickly.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Cards */}
            <div>
              <h2 className="font-display text-2xl font-bold text-navy-950">Reach Us Directly</h2>
              <p className="mt-3 text-sm text-navy-500">
                The fastest way to reach us is by phone or WhatsApp.
              </p>
              <div className="mt-8 space-y-4">
                <a
                  href={TEL_LINK}
                  className="group flex items-center gap-4 rounded-2xl border border-navy-50 bg-white p-5 shadow-card transition-all hover:shadow-card-hover hover:-translate-y-0.5"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-xora-50 text-xora-600 transition-colors group-hover:bg-xora-gradient group-hover:text-white">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-navy-400">Call / WhatsApp</p>
                    <p className="mt-0.5 text-base font-semibold text-navy-900">{PHONE_DISPLAY}</p>
                  </div>
                </a>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-navy-50 bg-white p-5 shadow-card transition-all hover:shadow-card-hover hover:-translate-y-0.5"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-600 transition-colors group-hover:bg-green-500 group-hover:text-white">
                    <MessageCircle className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-navy-400">WhatsApp</p>
                    <p className="mt-0.5 text-base font-semibold text-navy-900">Chat with us directly</p>
                  </div>
                </a>
                <a
                  href={`https://${WEBSITE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-navy-50 bg-white p-5 shadow-card transition-all hover:shadow-card-hover hover:-translate-y-0.5"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-50 text-navy-700 transition-colors group-hover:bg-navy-950 group-hover:text-white">
                    <Globe className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-navy-400">Website</p>
                    <p className="mt-0.5 text-base font-semibold text-navy-900">{WEBSITE}</p>
                  </div>
                </a>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(ADDRESS)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-navy-50 bg-white p-5 shadow-card transition-all hover:shadow-card-hover hover:-translate-y-0.5"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-xora-50 text-xora-600 transition-colors group-hover:bg-xora-gradient group-hover:text-white">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-navy-400">Office Address</p>
                    <p className="mt-0.5 text-base font-semibold text-navy-900">{ADDRESS}</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Quick Enquiry */}
            <div>
              <h2 className="font-display text-2xl font-bold text-navy-950">Quick Enquiry</h2>
              <p className="mt-3 text-sm text-navy-500">
                For detailed enquiries, visit our business contact page.
              </p>
              <div className="mt-8 flex flex-col gap-3">
                <Button href="/business/contact" variant="primary" className="w-full">
                  Business Enquiry
                </Button>
                <Button href="/internships/apply" variant="navy" className="w-full">
                  Internship Application
                </Button>
              </div>

              <div className="mt-8 rounded-2xl bg-navy-950 p-6">
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
          </div>
        </div>
      </section>

      <section className="bg-white pb-20 lg:pb-28">
        <div className="container-x">
          <div className="rounded-3xl border border-navy-50 overflow-hidden shadow-card">
            <iframe
              title="XORA Technologies Location"
              src={MAPS_URL}
              className="h-[400px] w-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}