import { NextRequest, NextResponse } from "next/server";
import { createServerClient, isSupabaseConfigured } from "@/lib/supabase/server";
import { generateApplicationId } from "@/lib/utils";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      full_name,
      email,
      mobile,
      college,
      degree,
      department,
      year_of_study,
      domain,
      duration,
      resume_url,
      linkedin_url,
      github_url,
    } = body;

    if (!full_name || !email || !mobile || !domain) {
      return NextResponse.json(
        { success: false, error: "Full name, email, mobile number, and domain are required." },
        { status: 400 }
      );
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const applicationId = generateApplicationId();

    const applicationRecord = {
      application_id: applicationId,
      full_name: String(full_name).trim(),
      email: String(email).trim().toLowerCase(),
      mobile: String(mobile).trim(),
      college: String(college || "").trim(),
      degree: String(degree || "").trim(),
      department: String(department || "").trim(),
      year_of_study: String(year_of_study || "").trim(),
      domain: String(domain).trim(),
      duration: String(duration || "4 Weeks").trim(),
      resume_url: resume_url ? String(resume_url).trim() : null,
      linkedin_url: linkedin_url ? String(linkedin_url).trim() : null,
      github_url: github_url ? String(github_url).trim() : null,
      status: "applied",
      created_at: new Date().toISOString(),
    };

    if (isSupabaseConfigured) {
      try {
        const supabase = createServerClient();
        const { data, error } = await supabase.from("applications").insert([applicationRecord]).select().single();
        if (error) {
          console.error("Supabase applications API insert error:", error);
          return NextResponse.json(
            { success: false, error: "Failed to save application to database." },
            { status: 500 }
          );
        } else if (data) {
          return NextResponse.json(
            { success: true, message: "Application submitted successfully!", data },
            { status: 201 }
          );
        }
      } catch (dbErr) {
        console.error("Database error during application insertion:", dbErr);
        return NextResponse.json(
          { success: false, error: "Database connection error." },
          { status: 500 }
        );
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Application submitted successfully!",
        data: applicationRecord,
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("Applications POST API Error:", error);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred while processing application." },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    if (!isSupabaseConfigured) {
      return NextResponse.json(
        {
          success: true,
          message: "Database not connected. Displaying demo applications.",
          data: [
            {
              id: "demo-app-1",
              application_id: "XOR-APP-2026-0001",
              full_name: "Demo Student",
              email: "student@example.com",
              mobile: "+91 98765 43210",
              college: "Engineering College",
              degree: "B.Tech / B.E",
              department: "Computer Science",
              year_of_study: "3rd Year",
              domain: "Web Development",
              duration: "8 Weeks",
              status: "applied",
              created_at: new Date().toISOString(),
            },
          ],
        },
        { status: 200 }
      );
    }

    const { searchParams } = new URL(request.url);
    const domain = searchParams.get("domain");
    const status = searchParams.get("status");

    const supabase = createServerClient();
    let query = supabase.from("applications").select("*").order("created_at", { ascending: false });

    if (domain) query = query.eq("domain", domain);
    if (status) query = query.eq("status", status);

    const { data, error } = await query;

    if (error) {
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data: data || [] }, { status: 200 });
  } catch (error: unknown) {
    console.error("Applications GET API Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch applications." },
      { status: 500 }
    );
  }
}
