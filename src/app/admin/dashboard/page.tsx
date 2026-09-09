"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import {
  Users,
  Briefcase,
  Award,
  TrendingUp,
  Shield,
  CheckCircle2,
  Clock,
  LogOut,
} from "lucide-react";

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState<"overview" | "enquiries" | "applications">("overview");

  return (
    <section className="min-h-screen bg-transparent pt-24 pb-16">
      <div className="container-x">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-navy-100 pb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-navy-100 px-3 py-1 text-xs font-bold text-navy-800">
              <Shield className="h-3.5 w-3.5 text-xora-500" />
              Administrator Portal
            </div>
            <h1 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-navy-950">
              Admin Overview & Management
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 rounded-xl border border-navy-200 bg-white px-4 py-2 text-xs font-semibold text-navy-700 shadow-sm hover:bg-navy-50"
            >
              <LogOut className="h-4 w-4" />
              Exit to Website
            </Link>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-navy-100 bg-white/90 p-5 shadow-card backdrop-blur-md">
            <div className="flex items-center justify-between">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-xora-50 text-xora-600">
                <Briefcase className="h-5 w-5" />
              </span>
              <span className="text-xs font-bold text-green-600">+12% this week</span>
            </div>
            <p className="mt-4 text-2xl font-display font-bold text-navy-950">24</p>
            <p className="text-xs font-semibold text-navy-500">Total Business Enquiries</p>
          </div>

          <div className="rounded-2xl border border-navy-100 bg-white/90 p-5 shadow-card backdrop-blur-md">
            <div className="flex items-center justify-between">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Users className="h-5 w-5" />
              </span>
              <span className="text-xs font-bold text-blue-600">Active</span>
            </div>
            <p className="mt-4 text-2xl font-display font-bold text-navy-950">142</p>
            <p className="text-xs font-semibold text-navy-500">Student Applications</p>
          </div>

          <div className="rounded-2xl border border-navy-100 bg-white/90 p-5 shadow-card backdrop-blur-md">
            <div className="flex items-center justify-between">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
                <Award className="h-5 w-5" />
              </span>
              <span className="text-xs font-bold text-purple-600">Verified</span>
            </div>
            <p className="mt-4 text-2xl font-display font-bold text-navy-950">98</p>
            <p className="text-xs font-semibold text-navy-500">Certificates Issued</p>
          </div>

          <div className="rounded-2xl border border-navy-100 bg-white/90 p-5 shadow-card backdrop-blur-md">
            <div className="flex items-center justify-between">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 text-green-600">
                <TrendingUp className="h-5 w-5" />
              </span>
              <span className="text-xs font-bold text-green-600">100%</span>
            </div>
            <p className="mt-4 text-2xl font-display font-bold text-navy-950">Active</p>
            <p className="text-xs font-semibold text-navy-500">System API Health</p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="mt-8 flex gap-2 border-b border-navy-100 pb-3">
          <button
            onClick={() => setActiveTab("overview")}
            className={`rounded-xl px-4 py-2 text-xs font-bold transition-colors ${
              activeTab === "overview"
                ? "bg-navy-950 text-white shadow-sm"
                : "bg-white text-navy-600 hover:bg-navy-50"
            }`}
          >
            Recent Activity
          </button>
          <button
            onClick={() => setActiveTab("enquiries")}
            className={`rounded-xl px-4 py-2 text-xs font-bold transition-colors ${
              activeTab === "enquiries"
                ? "bg-navy-950 text-white shadow-sm"
                : "bg-white text-navy-600 hover:bg-navy-50"
            }`}
          >
            Business Enquiries
          </button>
          <button
            onClick={() => setActiveTab("applications")}
            className={`rounded-xl px-4 py-2 text-xs font-bold transition-colors ${
              activeTab === "applications"
                ? "bg-navy-950 text-white shadow-sm"
                : "bg-white text-navy-600 hover:bg-navy-50"
            }`}
          >
            Student Applications
          </button>
        </div>

        {/* Content Table / Card */}
        <div className="mt-6 rounded-3xl border border-navy-100 bg-white/90 p-6 shadow-card backdrop-blur-md">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display text-base font-bold text-navy-950">
              {activeTab === "overview" && "Live Project Enquiries & Applications"}
              {activeTab === "enquiries" && "All Business Quotation Requests"}
              {activeTab === "applications" && "Student Internship Submissions"}
            </h2>
            <div className="flex items-center gap-2">
              <span className="text-xs text-navy-500">Auto-synced</span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-navy-700">
              <thead className="bg-navy-50 text-[11px] font-bold uppercase tracking-wider text-navy-500">
                <tr>
                  <th className="rounded-l-lg p-3">Name / Business</th>
                  <th className="p-3">Service / Domain</th>
                  <th className="p-3">Contact</th>
                  <th className="p-3">Status</th>
                  <th className="rounded-r-lg p-3">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-navy-50">
                <tr className="hover:bg-navy-50/50">
                  <td className="p-3 font-semibold text-navy-900">
                    Acme Retailers
                    <span className="block text-[11px] font-normal text-navy-400">Priya Sharma</span>
                  </td>
                  <td className="p-3">
                    <span className="rounded-md bg-xora-50 px-2 py-0.5 font-bold text-xora-600">
                      E-Commerce Solutions
                    </span>
                  </td>
                  <td className="p-3">+91 98765 43210</td>
                  <td className="p-3">
                    <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-0.5 text-[10px] font-bold text-green-700">
                      <CheckCircle2 className="h-3 w-3" /> New
                    </span>
                  </td>
                  <td className="p-3">
                    <Button href="/business/contact" variant="outline" className="!py-1 !px-2.5 !text-[11px]">
                      View
                    </Button>
                  </td>
                </tr>

                <tr className="hover:bg-navy-50/50">
                  <td className="p-3 font-semibold text-navy-900">
                    Kavitha R
                    <span className="block text-[11px] font-normal text-navy-400">Engineering College</span>
                  </td>
                  <td className="p-3">
                    <span className="rounded-md bg-blue-50 px-2 py-0.5 font-bold text-blue-600">
                      Web Development (8 Weeks)
                    </span>
                  </td>
                  <td className="p-3">+91 91234 56789</td>
                  <td className="p-3">
                    <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-bold text-blue-700">
                      <Clock className="h-3 w-3" /> In Review
                    </span>
                  </td>
                  <td className="p-3">
                    <Button href="/internships" variant="outline" className="!py-1 !px-2.5 !text-[11px]">
                      Review
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
