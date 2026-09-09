"use client";

import React from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function LoadingSpinner({ className }: { className?: string }) {
  return <Loader2 className={cn("h-5 w-5 animate-spin", className)} />;
}

export function PageLoader() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center" role="status" aria-label="Loading">
      <LoadingSpinner className="h-8 w-8 text-xora-500" />
    </div>
  );
}

export function ProgressBar({ value, className }: { value: number; className?: string }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-navy-100">
        <div
          className="h-full rounded-full bg-xora-gradient transition-all duration-700"
          style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
        />
      </div>
      <span className="w-12 text-right text-xs font-semibold text-navy-600">{value}%</span>
    </div>
  );
}