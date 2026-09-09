"use server";

import { revalidatePath } from "next/cache";
import { createServerClient, isSupabaseConfigured } from "@/lib/supabase/server";
import { generateApplicationId } from "@/lib/utils";

export type ActionResult<T = Record<string, never>> = {
  success: boolean;
  message?: string;
  error?: Record<string, string>;
  data?: T;
};

export type ApplicationInput = {
  full_name: string;
  email: string;
  mobile: string;
  college: string;
  degree: string;
  department: string;
  year_of_study: string;
  domain: string;
  duration: string;
  resume_url?: string;
  linkedin_url?: string;
  github_url?: string;
};

export type EnquiryInput = {
  name: string;
  business_name: string;
  email: string;
  phone: string;
  service: string;
  package?: string;
  budget: string;
  message: string;
};

export async function submitApplication(input: ApplicationInput): Promise<ActionResult<{ application_id: string }>> {
  const applicationId = generateApplicationId();

  if (!isSupabaseConfigured) {
    // Demo mode: return a generated ID without persistence
    return {
      success: true,
      message: "Application recorded (demo mode).",
      data: { application_id: applicationId },
    };
  }

  const client = createServerClient();
  const { error } = await client.from("applications").insert([
    {
      application_id: applicationId,
      ...input,
      status: "applied",
    },
  ]);

  if (error) {
    return { success: false, message: "Could not submit your application. Please try again.", error: { form: error.message } };
  }

  revalidatePath("/student/dashboard");
  return { success: true, message: "Application submitted successfully.", data: { application_id: applicationId } };
}

export async function submitEnquiry(input: EnquiryInput): Promise<ActionResult> {
  if (!isSupabaseConfigured) {
    return { success: true, message: "Your enquiry has been sent. We will get back to you shortly." };
  }

  const client = createServerClient();
  const { error } = await client.from("enquiries").insert([input]);
  if (error) {
    return { success: false, message: "Could not send your enquiry. Please try again.", error: { form: error.message } };
  }
  return { success: true, message: "Your enquiry has been sent. We will get back to you shortly." };
}

export type CertificateResult = {
  student_name: string;
  internship_domain: string;
  internship_duration: string;
  completion_status: string;
  certificate_id: string;
  issue_date: string;
};

export async function verifyCertificate(certificateId: string): Promise<ActionResult<CertificateResult>> {
  const trimmed = certificateId.trim();
  if (!trimmed) {
    return { success: false, message: "Please enter a certificate ID." };
  }

  if (!isSupabaseConfigured) {
    // Demo mode: return a sample certificate for any non-empty ID
    return {
      success: true,
      data: {
        student_name: "Demo Student",
        internship_domain: "Web Development",
        internship_duration: "8 Weeks",
        completion_status: "Completed",
        certificate_id: trimmed,
        issue_date: new Date().toISOString().slice(0, 10),
      },
    };
  }

  const client = createServerClient();
  const { data, error } = await client
    .from("certificates")
    .select("student_name, internship_domain, internship_duration, completion_status, certificate_id, issue_date")
    .eq("certificate_id", trimmed)
    .single();

  if (error || !data) {
    return { success: false, message: "No certificate found with this ID. Please check and try again." };
  }
  return { success: true, data: data as CertificateResult };
}
