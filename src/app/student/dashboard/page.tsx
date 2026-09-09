"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ProgressBar } from "@/components/ui/Loading";
import { Button } from "@/components/ui/Button";
import {
  LogOut,
  BookOpen,
  Award,
  FolderOpen,
  MessageSquare,
  CheckCircle2,
  Clock,
  LayoutDashboard,
  Target,
  FileText,
  Users,
} from "lucide-react";

const sidebarItems = [
  { icon: LayoutDashboard, label: "Overview" },
  { icon: BookOpen, label: "My Internship" },
  { icon: FolderOpen, label: "Projects" },
  { icon: FileText, label: "Tasks" },
  { icon: MessageSquare, label: "Submissions" },
  { icon: Award, label: "Certificate" },
];

const quickStats = [
  { icon: Target, label: "Selected Domain", value: "Web Development" },
  { icon: Clock, label: "Duration", value: "8 Weeks" },
  { icon: CheckCircle2, label: "Tasks Completed", value: "5 / 8" },
  { icon: Award, label: "Certificate", value: "Pending" },
];

const recentTasks = [
  { title: "Setup Development Environment", status: "completed", due: "Week 1" },
  { title: "Build Landing Page Component", status: "completed", due: "Week 2" },
  { title: "API Integration Project", status: "in_progress", due: "Week 3" },
  { title: "Responsive Design Module", status: "pending", due: "Week 4" },
];

export default function StudentDashboard() {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <section className="min-h-screen bg-white pt-20 pb-12">
      <div className="container-x">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-xora-500">Student Dashboard</p>
            <h1 className="mt-1 font-display text-2xl font-bold text-navy-950">
              Welcome, Student
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/verify-certificate"
              className="inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-sm font-medium text-navy-600 transition-colors hover:bg-white"
            >
              <Award className="h-4 w-4" />
              Verify Certificate
            </Link>
            <button className="inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-sm font-medium text-red-600 transition-colors hover:bg-red-50">
              <LogOut className="h-4 w-4" />
              Logout
            </button>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-4">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <nav className="sticky top-24 flex flex-col gap-1 rounded-2xl border border-navy-50 bg-white p-3 shadow-card">
              {sidebarItems.map((item) => {
                const active = activeTab === item.label;
                return (
                  <button
                    key={item.label}
                    onClick={() => setActiveTab(item.label)}
                    className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors text-left ${
                      active
                        ? "bg-xora-50 text-xora-600"
                        : "text-navy-600 hover:bg-navy-50"
                    }`}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Progress */}
            <div className="rounded-2xl border border-navy-50 bg-white p-6 shadow-card">
              <h2 className="font-display text-lg font-bold text-navy-950">Internship Progress</h2>
              <div className="mt-4">
                <ProgressBar value={65} />
                <p className="mt-2 text-xs text-navy-400">
                  You&apos;ve completed 65% of your internship. Keep going!
                </p>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {quickStats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-3.5 rounded-2xl border border-navy-50 bg-white p-5 shadow-card">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-xora-50 text-xora-600">
                    <stat.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-medium text-navy-400">{stat.label}</p>
                    <p className="text-sm font-semibold text-navy-900">{stat.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Recent Tasks */}
            <div className="mt-6 rounded-2xl border border-navy-50 bg-white p-6 shadow-card">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-lg font-bold text-navy-950">Recent Tasks</h3>
                <button className="text-xs font-medium text-xora-600 hover:underline">View All</button>
              </div>
              <div className="mt-4 divide-y divide-navy-50">
                {recentTasks.map((task) => (
                  <div key={task.title} className="flex items-center justify-between py-3.5">
                    <div className="flex items-center gap-3">
                      <span
                        className={`h-2 w-2 rounded-full ${
                          task.status === "completed"
                            ? "bg-green-500"
                            : task.status === "in_progress"
                            ? "bg-xora-500"
                            : "bg-navy-200"
                        }`}
                      />
                      <div>
                        <p className="text-sm font-medium text-navy-900">{task.title}</p>
                        <p className="text-xs text-navy-400">{task.due}</p>
                      </div>
                    </div>
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                        task.status === "completed"
                          ? "bg-green-50 text-green-600"
                          : task.status === "in_progress"
                          ? "bg-xora-50 text-xora-600"
                          : "bg-navy-50 text-navy-500"
                      }`}
                    >
                      {task.status === "completed"
                        ? "Completed"
                        : task.status === "in_progress"
                        ? "In Progress"
                        : "Pending"}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mentors */}
            <div className="mt-6 rounded-2xl border border-navy-50 bg-white p-6 shadow-card">
              <h3 className="font-display text-lg font-bold text-navy-950">Your Mentor</h3>
              <div className="mt-4 flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-950 text-white">
                  <Users className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-navy-900">Web Development Mentor</p>
                  <p className="text-xs text-navy-400">Assigned to your domain</p>
                </div>
                <Button href="#" variant="outline" className="ml-auto !py-2">
                  Message
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}