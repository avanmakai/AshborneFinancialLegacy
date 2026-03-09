import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Name, email, and message are required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Store in database
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    const { error: dbError } = await supabase
      .from("contact_submissions")
      .insert({ name, email, phone: phone || null, message });

    if (dbError) {
      console.error("DB error:", dbError);
      return new Response(
        JSON.stringify({ error: "Failed to save submission" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Send email via Resend
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY not configured");
      return new Response(
        JSON.stringify({ error: "Email service not configured" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const emailRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Ashborne Contact Form <onboarding@resend.dev>",
        to: ["info@ashborne.financial"],
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; overflow: hidden;">
            <div style="background: #1a2332; padding: 32px; text-align: center;">
              <h1 style="font-family: Georgia, serif; color: #f5f5f5; margin: 0; font-size: 24px;">
                <span style="color: #dc2626;">Ashborne</span> Financial <span style="color: #c9860a;">Legacy</span>
              </h1>
            </div>
            <div style="padding: 32px;">
              <h2 style="font-family: Georgia, serif; color: #1a2332; margin-top: 0;">New Contact Form Submission</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 14px; width: 100px;">Name</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #1a2332; font-size: 14px;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">Email</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #1a2332; font-size: 14px;"><a href="mailto:${email}" style="color: #c9860a;">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">Phone</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #1a2332; font-size: 14px;">${phone || "Not provided"}</td>
                </tr>
              </table>
              <div style="margin-top: 24px;">
                <p style="color: #6b7280; font-size: 14px; margin-bottom: 8px;">Message</p>
                <div style="background: #f9fafb; border-radius: 8px; padding: 16px; color: #1a2332; font-size: 14px; line-height: 1.6;">${message}</div>
              </div>
            </div>
          </div>
        `,
      }),
    });

    if (!emailRes.ok) {
      const errBody = await emailRes.text();
      console.error("Resend error:", errBody);
      // Still saved to DB, so return partial success
      return new Response(
        JSON.stringify({ success: true, warning: "Saved but email delivery failed" }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Error:", err);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
