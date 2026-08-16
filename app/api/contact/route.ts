import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/schemas";

/**
 * Stub contact-intake endpoint. Validates the submission and logs it server
 * side. Wire this up to a real destination (email service, CRM webhook,
 * database) before going to production.
 */
export async function POST(request: Request) {
  const body = await request.json();
  const parsed = contactFormSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ ok: false, errors: parsed.error.flatten() }, { status: 400 });
  }

  console.log("[contact-message]", parsed.data);

  return NextResponse.json({ ok: true });
}
