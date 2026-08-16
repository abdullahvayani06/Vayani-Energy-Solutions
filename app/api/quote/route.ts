import { NextResponse } from "next/server";
import { quoteFormSchema } from "@/lib/schemas";

/**
 * Stub lead-intake endpoint. Validates the submission and logs it server
 * side. Wire this up to a real destination (email service, CRM webhook,
 * database) before going to production — it intentionally does not claim
 * to persist data anywhere yet.
 */
export async function POST(request: Request) {
  const body = await request.json();
  const parsed = quoteFormSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ ok: false, errors: parsed.error.flatten() }, { status: 400 });
  }

  console.log("[quote-request]", parsed.data);

  return NextResponse.json({ ok: true });
}
