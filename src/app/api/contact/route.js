import { NextResponse } from "next/server";
import { validateContact } from "@/lib/validation";

// Simple per-instance rate limit (5 requests/hour/IP). Use Upstash or similar for strict limits.
const hits = new Map();
function limited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < 3_600_000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 5;
}
const clean = (v) => String(v ?? "").replace(/[\r\n]+/g, " ").trim();

export async function POST(req) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (limited(ip)) return NextResponse.json({ error: "Too many messages. Try again later." }, { status: 429 });

  let data;
  try { data = await req.json(); } catch { return NextResponse.json({ error: "Invalid request." }, { status: 400 }); }

  if (data.website) return NextResponse.json({ ok: true }); // honeypot: silently drop bots

  const errors = validateContact(data);
  if (Object.keys(errors).length) return NextResponse.json({ error: Object.values(errors)[0], errors }, { status: 400 });

  const { RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } = process.env;
  if (!RESEND_API_KEY || !CONTACT_TO_EMAIL || !CONTACT_FROM_EMAIL) {
    return NextResponse.json({ error: "Email is not configured on the server yet." }, { status: 503 });
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: CONTACT_FROM_EMAIL, to: [CONTACT_TO_EMAIL], reply_to: clean(data.email),
        subject: `[Portfolio] ${clean(data.subject)}`,
        text: `From: ${clean(data.name)} <${clean(data.email)}>\n\n${String(data.message).trim()}`,
      }),
    });
    if (!res.ok) return NextResponse.json({ error: "The email service rejected the message. Try again later." }, { status: 502 });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Could not reach the email service." }, { status: 502 });
  }
}
