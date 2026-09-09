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
    <section className="min-h-screen bg-transparent pt-20 pb-12">
      <div className="container-x">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-xora-500 dark:text-xora-400">Student Dashboard</p>
            <h1 className="mt-1 font-display text-2xl font-bold text-navy-950 dark:text-white">
              Welcome, Student
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/verify-certificate"
              className="inline-flex items-center gap-1.5 rounded-xl border border-navy-100 dark:border-navy-800 bg-white/80 dark:bg-navy-900/80 px-3.5 py-2 text-sm font-medium text-navy-700 dark:text-navy-300 transition-colors hover:bg-white dark:hover:bg-navy-800 shadow-sm"
            >
              <Award className="h-4 w-4 text-xora-500" />
              Verify Certificate
            </Link>
            <button className="inline-flex items-center gap-1.5 rounded-xl border border-red-200 dark:border-red-900/50 bg-red-50/80 dark:bg-red-950/40 px-3.5 py-2 text-sm font-medium text-red-600 dark:text-red-400 transition-colors hover:bg-red-100 dark:hover:bg-red-950/80 shadow-sm">
              <LogOut className="h-4 w-4" />
              Logout
            </button>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-4">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <nav className="sticky top-24 flex flex-col gap-1 rounded-3xl border border-navy-100 dark:border-navy-800 bg-white/80 dark:bg-navy-900/80 backdrop-blur-md p-3 shadow-card">
              {sidebarItems.map((item) => {
                const active = activeTab === item.label;
                return (
                  <button
                    key={item.label}
                    onClick={() => setActiveTab(item.label)}
                    className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-colors text-left ${
                      active
                        ? "bg-xora-50 dark:bg-xora-950/60 text-xora-600 dark:text-xora-400 font-semibold"
                        : "text-navy-600 dark:text-navy-300 hover:bg-navy-50 dark:hover:bg-navy-800/60"
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
          <div className="lg:col-span-3 space-y-6">
            {/* Progress */}
            <div className="rounded-3xl border border-navy-100 dark:border-navy-800 bg-white/80 dark:bg-navy-900/80 backdrop-blur-md p-6 shadow-card">
              <h2 className="font-display text-lg font-bold text-navy-950 dark:text-white">Internship Progress</h2>
              <div className="mt-4">
                <ProgressBar value={65} />
                <p className="mt-2 text-xs text-navy-500 dark:text-navy-400">
                  You&apos;ve completed 65% of your internship. Keep going!
                </p>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid gap-4 sm:grid-cols-2">
              {quickStats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-3.5 rounded-3xl border border-navy-100 dark:border-navy-800 bg-white/80 dark:bg-navy-900/80 backdrop-blur-md p-5 shadow-card">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-xora-50 dark:bg-xora-950/60 text-xora-600 dark:text-xora-400">
                    <stat.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-medium text-navy-400 dark:text-navy-500">{stat.label}</p>
                    <p className="text-sm font-semibold text-navy-900 dark:text-white">{stat.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Recent Tasks */}
            <div className="rounded-3xl border border-navy-100 dark:border-navy-800 bg-white/80 dark:bg-navy-900/80 backdrop-blur-md p-6 shadow-card">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-lg font-bold text-navy-950 dark:text-white">Recent Tasks</h3>
                <button className="text-xs font-semibold text-xora-600 dark:text-xora-400 hover:underline">View All</button>
              </div>
              <div className="mt-4 divide-y divide-navy-100 dark:divide-navy-800">
                {recentTasks.map((task) => (
                  <div key={task.title} className="flex items-center justify-between py-3.5">
                    <div className="flex items-center gap-3">
                      <span
                        className={`h-2.5 w-2.5 rounded-full ${
                          task.status === "completed"
                            ? "bg-green-500"
                            : task.status === "in_progress"
                            ? "bg-xora-500"
                            : "bg-navy-300 dark:bg-navy-700"
                        }`}
                      />
                      <div>
                        <p className="text-sm font-medium text-navy-900 dark:text-white">{task.title}</p>
                        <p className="text-xs text-navy-400 dark:text-navy-500">{task.due}</p>
                      </div>
                    </div>
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                        task.status === "completed"
                          ? "bg-green-50 dark:bg-green-950/60 text-green-600 dark:text-green-400 border border-green-200 dark:border-green-800/50"
                          : task.status === "in_progress"
                          ? "bg-xora-50 dark:bg-xora-950/60 text-xora-600 dark:text-xora-400 border border-xora-200 dark:border-xora-800/50"
                          : "bg-navy-50 dark:bg-navy-800 text-navy-600 dark:text-navy-300 border border-navy-200 dark:border-navy-700"
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
            <div className="rounded-3xl border border-navy-100 dark:border-navy-800 bg-white/80 dark:bg-navy-900/80 backdrop-blur-md p-6 shadow-card">
              <h3 className="font-display text-lg font-bold text-navy-950 dark:text-white">Your Mentor</h3>
              <div className="mt-4 flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-950 dark:bg-navy-800 text-white dark:text-xora-400 shadow-sm">
                  <Users className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-navy-900 dark:text-white">Web Development Mentor</p>
                  <p className="text-xs text-navy-400 dark:text-navy-500">Assigned to your domain</p>
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