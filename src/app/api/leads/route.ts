import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    const { name, email, phone, state, source, provider_interest, budget, timeline } = body;

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    // Get UTM params from headers or body
    const utm_source = body.utm_source || request.headers.get("x-utm-source");
    const utm_medium = body.utm_medium || request.headers.get("x-utm-medium");
    const utm_campaign = body.utm_campaign || request.headers.get("x-utm-campaign");

    // Save to Supabase
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("leads")
      .insert({
        name: name || null,
        email,
        phone: phone || null,
        state: state || null,
        source: source || "website",
        provider_interest: provider_interest || null,
        budget: budget || null,
        timeline: timeline || null,
        utm_source: utm_source || null,
        utm_medium: utm_medium || null,
        utm_campaign: utm_campaign || null,
      } as any)
      .select()
      .single();

    if (error) {
      console.error("Supabase error:", error);
      // Still return success to user, but log the error
      return NextResponse.json({
        success: true,
        message: "Thank you! We'll be in touch soon.",
      });
    }

    const leadId = (data as any)?.id;
    console.log("Lead saved:", leadId);

    return NextResponse.json({
      success: true,
      message: "Thank you! We'll be in touch soon.",
      id: leadId,
    });
  } catch (error) {
    console.error("Lead capture error:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
