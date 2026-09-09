import { NextRequest, NextResponse } from "next/server";
import { createServerClient, isSupabaseConfigured } from "@/lib/supabase/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const contactRecord = {
      name: String(name).trim(),
      email: String(email).trim().toLowerCase(),
      phone: String(phone || "").trim(),
      service: String(subject || "General Contact").trim(),
      business_name: "",
      package: null,
      budget: "",
      message: String(message).trim(),
      status: "new",
      created_at: new Date().toISOString(),
    };

    if (isSupabaseConfigured) {
      try {
        const supabase = createServerClient();
        await supabase.from("enquiries").insert([contactRecord]);
      } catch (err) {
        console.error("Database error saving contact record:", err);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for reaching out! We will get back to you shortly.",
        data: contactRecord,
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { success: false, error: "Unable to send message at this time." },
      { status: 500 }
    );
  }
}
