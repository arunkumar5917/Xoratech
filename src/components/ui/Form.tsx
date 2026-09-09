"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

type FormFieldProps = {
  label?: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
  value?: string;
  options?: string[];
  textarea?: boolean;
}

export function FormError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-1.5 text-xs font-medium text-red-500">{message}</p>;
}

export function FormSuccess({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <div className="mb-4 flex items-center gap-3 rounded-xl bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
      <span className="h-2 w-2 rounded-full bg-green-500" />
      {message}
    </div>
  );
}

export function FormField({
  label,
  name,
  type = "text",
  placeholder,
  required,
  error,
  options,
  textarea,
  ...rest
}: FormFieldProps & React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
  const [value, setValue] = useState<string>((rest as { value?: string }).value ?? "");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setValue(e.target.value);
    (rest as { onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void })
      .onChange?.(e);
  };

  const baseClass = cn(
    "w-full rounded-xl border bg-white px-4 py-3 text-sm text-navy-950 placeholder-navy-300 shadow-sm transition focus:outline-none focus:ring-2 focus:ring-xora-500/30",
    error ? "border-red-300 focus:border-red-400" : "border-navy-100 focus:border-xora-500"
  );

  return (
    <div>
      {label && (
        <label htmlFor={name} className="mb-1.5 block text-sm font-semibold text-navy-900">
          {label}
          {required && <span className="ml-0.5 text-xora-600">*</span>}
        </label>
      )}
      {textarea ? (
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          className={cn(baseClass, "min-h-[110px] resize-y")}
          required={required}
          value={value}
          onChange={handleChange}
        />
      ) : options ? (
        <select
          id={name}
          name={name}
          className={cn(baseClass, value ? "" : "text-navy-400")}
          required={required}
          value={value}
          onChange={handleChange}
        >
          <option value="" disabled className="text-navy-400">{placeholder || "Select an option"}</option>
          {options.map((opt) => (
            <option key={opt} value={opt} className="text-navy-950">{opt}</option>
          ))}
        </select>
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          className={baseClass}
          required={required}
          value={value}
          onChange={handleChange}
        />
      )}
      <FormError message={error} />
    </div>
  );
}