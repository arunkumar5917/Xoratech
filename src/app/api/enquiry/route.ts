import { NextRequest, NextResponse } from "next/server";
import { createServerClient, isSupabaseConfigured } from "@/lib/supabase/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, business_name, service, package: selectedPackage, budget, message } = body;

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { success: false, error: "Name, email, phone, and project message are required." },
        { status: 400 }
      );
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const enquiryRecord = {
      name: String(name).trim(),
      business_name: String(business_name || "").trim(),
      email: String(email).trim().toLowerCase(),
      phone: String(phone).trim(),
      service: String(service || "General Inquiry").trim(),
      package: selectedPackage ? String(selectedPackage).trim() : null,
      budget: String(budget || "").trim(),
      message: String(message).trim(),
      status: "new",
      created_at: new Date().toISOString(),
    };

    if (isSupabaseConfigured) {
      try {
        const supabase = createServerClient();
        const { data, error } = await supabase.from("enquiries").insert([enquiryRecord]).select().single();
        if (error) {
          console.error("Supabase enquiry API insert error:", error);
        } else if (data) {
          return NextResponse.json(
            { success: true, message: "Enquiry submitted successfully!", data },
            { status: 201 }
          );
        }
      } catch (dbErr) {
        console.error("Database connection error during enquiry insertion:", dbErr);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Enquiry received successfully! Our team will contact you within 24 hours.",
        data: enquiryRecord,
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("Enquiry API Error:", error);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred while processing your enquiry." },
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
          message: "Database not connected. Displaying demo enquiries.",
          data: [
            {
              id: "demo-enq-1",
              name: "Demo Client",
              business_name: "Acme Corp",
              email: "client@acme.com",
              phone: "+91 98765 43210",
              service: "Business Website Development",
              package: "Business Growth",
              budget: "₹25,000",
              message: "Looking for an e-commerce website redesign.",
              status: "new",
              created_at: new Date().toISOString(),
            },
          ],
        },
        { status: 200 }
      );
    }

    const { searchParams } = new URL(request.url);
    const status = searchParams.get("status");
    const service = searchParams.get("service");

    const supabase = createServerClient();
    let query = supabase.from("enquiries").select("*").order("created_at", { ascending: false });

    if (status) query = query.eq("status", status);
    if (service) query = query.eq("service", service);

    const { data, error } = await query;

    if (error) {
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data: data || [] }, { status: 200 });
  } catch (error: unknown) {
    console.error("Enquiries GET API Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch enquiries." },
      { status: 500 }
    );
  }
}
