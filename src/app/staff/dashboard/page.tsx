"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import {
  Users,
  CheckCircle2,
  LogOut,
  FolderKanban,
  FileCheck,
  GraduationCap,
} from "lucide-react";

export default function StaffDashboardPage() {

  const students = [
    {
      id: "STU-001",
      name: "Rahul Verma",
      domain: "Web Development",
      progress: "75%",
      tasks: "6/8",
      status: "Active",
    },
    {
      id: "STU-002",
      name: "Sneha Patel",
      domain: "AI & Machine Learning",
      progress: "90%",
      tasks: "7/8",
      status: "Review",
    },
    {
      id: "STU-003",
      name: "Anand Kumar",
      domain: "UI/UX Design",
      progress: "50%",
      tasks: "4/8",
      status: "Active",
    },
  ];

  return (
    <section className="min-h-screen bg-transparent pt-24 pb-16">
      <div className="container-x">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-navy-100 pb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-navy-100 px-3 py-1 text-xs font-bold text-navy-800">
              <GraduationCap className="h-3.5 w-3.5 text-xora-500" />
              Staff & Mentor Portal
            </div>
            <h1 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-navy-950">
              Student Mentorship & Review
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
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-navy-100 bg-white/90 p-5 shadow-card backdrop-blur-md">
            <div className="flex items-center justify-between">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Users className="h-5 w-5" />
              </span>
              <span className="text-xs font-bold text-blue-600">Assigned</span>
            </div>
            <p className="mt-4 text-2xl font-display font-bold text-navy-950">18</p>
            <p className="text-xs font-semibold text-navy-500">Mentees Under Review</p>
          </div>

          <div className="rounded-2xl border border-navy-100 bg-white/90 p-5 shadow-card backdrop-blur-md">
            <div className="flex items-center justify-between">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
                <FolderKanban className="h-5 w-5" />
              </span>
              <span className="text-xs font-bold text-purple-600">Pending</span>
            </div>
            <p className="mt-4 text-2xl font-display font-bold text-navy-950">7</p>
            <p className="text-xs font-semibold text-navy-500">Task Submissions</p>
          </div>

          <div className="rounded-2xl border border-navy-100 bg-white/90 p-5 shadow-card backdrop-blur-md">
            <div className="flex items-center justify-between">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 text-green-600">
                <FileCheck className="h-5 w-5" />
              </span>
              <span className="text-xs font-bold text-green-600">Approved</span>
            </div>
            <p className="mt-4 text-2xl font-display font-bold text-navy-950">34</p>
            <p className="text-xs font-semibold text-navy-500">Certificates Approved</p>
          </div>
        </div>

        {/* Mentorship Table */}
        <div className="mt-8 rounded-3xl border border-navy-100 bg-white/90 p-6 shadow-card backdrop-blur-md">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display text-base font-bold text-navy-950">
              Assigned Students & Project Progress
            </h2>
            <span className="text-xs text-navy-500">Live Status</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-navy-700">
              <thead className="bg-navy-50 text-[11px] font-bold uppercase tracking-wider text-navy-500">
                <tr>
                  <th className="rounded-l-lg p-3">Student Name</th>
                  <th className="p-3">Domain</th>
                  <th className="p-3">Progress</th>
                  <th className="p-3">Tasks</th>
                  <th className="p-3">Status</th>
                  <th className="rounded-r-lg p-3">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-navy-50">
                {students.map((s) => (
                  <tr key={s.id} className="hover:bg-navy-50/50">
                    <td className="p-3 font-semibold text-navy-900">
                      {s.name}
                      <span className="block text-[11px] font-normal text-navy-400">{s.id}</span>
                    </td>
                    <td className="p-3">
                      <span className="rounded-md bg-navy-100 px-2 py-0.5 font-bold text-navy-800">
                        {s.domain}
                      </span>
                    </td>
                    <td className="p-3 font-bold text-xora-600">{s.progress}</td>
                    <td className="p-3">{s.tasks}</td>
                    <td className="p-3">
                      <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-0.5 text-[10px] font-bold text-green-700">
                        <CheckCircle2 className="h-3 w-3" /> {s.status}
                      </span>
                    </td>
                    <td className="p-3">
                      <Button href="/verify-certificate" variant="outline" className="!py-1 !px-2.5 !text-[11px]">
                        Review Tasks
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
