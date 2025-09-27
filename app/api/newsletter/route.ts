import { NextRequest, NextResponse } from "next/server";

// Optional: Resend email notification
let Resend: any = null;
try {
  // Lazy import so the route works even if 'resend' isn't installed
  // npm i resend  (if you want email notifications)
  // @ts-ignore
  Resend = (await import("resend")).Resend;
} catch { /* noop */ }

function sanitize(s?: string) {
  return (s || "").trim().slice(0, 500);
}
function validEmail(e?: string) {
  return !!e && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
}

export async function POST(req: NextRequest) {
  try {
    const { email, name, source } = await req.json();
    const cleanEmail = sanitize(email);
    const cleanName = sanitize(name);
    const cleanSource = sanitize(source || "footer-newsletter");

    if (!validEmail(cleanEmail)) {
      return NextResponse.json({ error: "Please provide a valid email." }, { status: 400 });
    }

    // 1) Try Supabase insert if env is present
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    let savedToSupabase = false;
    if (supabaseUrl && supabaseKey) {
      // Assumes you have a public table 'newsletter_subscribers' with RLS disabled or a policy for service role
      const res = await fetch(`${supabaseUrl}/rest/v1/newsletter_subscribers`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "apikey": supabaseKey,
          "Authorization": `Bearer ${supabaseKey}`,
          "Prefer": "return=representation"
        },
        body: JSON.stringify({
          email: cleanEmail,
          name: cleanName || null,
          source: cleanSource,
          created_at: new Date().toISOString()
        })
      });

      // 201/200 expected for insert
      if (res.ok) savedToSupabase = true;
      else {
        const txt = await res.text().catch(() => "");
        console.warn("Supabase insert failed:", res.status, txt);
      }
    }

    // 2) If not saved to Supabase, try sending a Resend notification
    let emailed = false;
    if (!savedToSupabase && process.env.RESEND_API_KEY && Resend) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const to = process.env.SALES_EMAIL || process.env.FROM_EMAIL || "hello@dossx.com";
      try {
        await resend.emails.send({
          from: process.env.FROM_EMAIL || "no-reply@dossx.com",
          to,
          subject: "New Newsletter Subscriber",
          html: `
            <p><b>Email:</b> ${cleanEmail}</p>
            <p><b>Name:</b> ${cleanName || "-"}</p>
            <p><b>Source:</b> ${cleanSource}</p>
            <p><i>Stored via email fallback (Resend)</i></p>
          `
        });
        emailed = true;
      } catch (e: any) {
        console.warn("Resend email failed:", e?.message || e);
      }
    }

    // 3) Final response
    return NextResponse.json({
      ok: true,
      message: "You're subscribed! Thanks for joining DossX Insights.",
      stored: savedToSupabase ? "supabase" : (emailed ? "email-fallback" : "none"),
    });
  } catch (e: any) {
    console.error("Newsletter route error:", e?.message || e);
    return NextResponse.json({ error: "Unable to process your subscription right now." }, { status: 500 });
  }
}