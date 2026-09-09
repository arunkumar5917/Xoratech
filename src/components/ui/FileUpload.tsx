"use client";

import React, { useRef, useState } from "react";
import { UploadCloud, FileText, X } from "lucide-react";
import { cn } from "@/lib/utils";

type FileUploadProps = {
  label?: string;
  name?: string;
  onFileSelected?: (file: File | null) => void;
};

export function FileUpload({ label, name = "resume", onFileSelected }: FileUploadProps) {
  const [file, setFile] = useState<File | null>(null);
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = (f: File | undefined | null) => {
    if (!f) return;
    setFile(f);
    onFileSelected?.(f);
  };

  const clearFile = () => {
    setFile(null);
    onFileSelected?.(null);
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <div>
      {label && (
        <label className="mb-1.5 block text-sm font-semibold text-navy-900">
          {label}
          <span className="ml-1 text-xs font-normal text-navy-400">(PDF, DOC, DOCX — max 2MB)</span>
        </label>
      )}
      <input
        ref={inputRef}
        type="file"
        name={name}
        accept=".pdf,.doc,.docx"
        className="hidden"
        onChange={(e) => handleFile(e.target.files?.[0])}
      />
      {!file ? (
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
          onDrop={(e) => { e.preventDefault(); setDragging(false); handleFile(e.dataTransfer.files[0]); }}
          className={cn(
            "flex w-full flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed px-4 py-8 text-center transition",
            dragging
              ? "border-xora-500 bg-xora-50"
              : "border-navy-200 bg-navy-50/50 hover:border-xora-400 hover:bg-xora-50"
          )}
        >
          <UploadCloud className={cn("h-7 w-7", dragging ? "text-xora-500" : "text-navy-300")} />
          <span className="text-sm font-medium text-navy-700">
            Click to upload or drag &amp; drop
          </span>
          <span className="text-xs text-navy-400">Your resume</span>
        </button>
      ) : (
        <div className="flex items-center gap-3 rounded-xl bg-xora-50 px-4 py-3">
          <FileText className="h-5 w-5 shrink-0 text-xora-600" />
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-navy-900">{file.name}</p>
            <p className="text-xs text-navy-400">{(file.size / 1024).toFixed(0)} KB</p>
          </div>
          <button
            type="button"
            onClick={clearFile}
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-navy-400 hover:bg-xora-100 hover:text-xora-600"
            aria-label="Remove file"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  );
}