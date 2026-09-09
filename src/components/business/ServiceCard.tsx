"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";
import type { Service } from "@/data/services";
import type { ReactNode } from "react";

export function ServiceCard({
  service,
  index,
  iconNode,
}: {
  service: Omit<Service, "icon">;
  index: number;
  iconNode: ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      id={service.slug}
      className="group flex flex-col rounded-2xl border border-navy-50 bg-white p-7 shadow-card transition-all duration-200 hover:shadow-card-hover"
    >
      <div className="flex items-start gap-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-xora-50 text-xora-600 transition-colors group-hover:bg-xora-gradient group-hover:text-white">
          {iconNode}
        </span>
        <div className="min-w-0">
          <span className="text-xs font-bold text-xora-500">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="font-display text-xl font-bold text-navy-950">
            {service.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-navy-500">
            {service.description}
          </p>
          {open && (
            <ul className="mt-4 grid grid-cols-2 gap-2">
              {service.points.map((point) => (
                <li key={point} className="flex items-center gap-2 text-sm text-navy-600">
                  <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-xora-500" />
                  {point}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Button variant="outline" onClick={() => setOpen(!open)} className="w-full sm:w-auto">
          {open ? (
            <>
              Hide Details
              <ChevronUp className="h-4 w-4" />
            </>
          ) : (
            <>
              View Details
              <ChevronDown className="h-4 w-4" />
            </>
          )}
        </Button>
        <Button
          href={`/business/packages?service=${service.slug}`}
          variant="navy"
          className="w-full sm:w-auto"
        >
          Select Package
        </Button>
        <Button
          href={`/business/contact?service=${service.slug}`}
          variant="primary"
          className="w-full sm:w-auto"
        >
          Submit Enquiry
        </Button>
      </div>
    </div>
  );
}