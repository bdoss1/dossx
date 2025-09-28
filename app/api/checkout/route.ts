import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
// export const revalidate = 0; // optional: ensure no caching

function getStripe(): Stripe | null {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) return null;
  return new Stripe(key);
}

type LineItem = { price: string; quantity?: number };
type Body = {
  mode?: "subscription" | "payment";
  lineItems: LineItem[];         // [{ price: "price_XXX", quantity: 1 }]
  successUrl: string;            // e.g. `${origin}/pricing?status=success`
  cancelUrl: string;             // e.g. `${origin}/pricing?status=cancel`
  metadata?: Record<string, string>;
};

export async function POST(req: NextRequest) {
  try {
    const stripe = getStripe();
    if (!stripe) {
      // Don’t throw during build—return a clear 500 at request time
      return NextResponse.json(
        { error: "Server misconfigured: STRIPE_SECRET_KEY is not set." },
        { status: 500 }
      );
    }

    const body = (await req.json()) as Body;

    if (!body?.lineItems?.length || !body.successUrl || !body.cancelUrl) {
      return NextResponse.json(
        { error: "Missing required fields: lineItems, successUrl, cancelUrl." },
        { status: 400 }
      );
    }

    const session = await stripe.checkout.sessions.create({
      mode: body.mode ?? "subscription",
      line_items: body.lineItems.map(li => ({
        price: li.price,
        quantity: li.quantity ?? 1,
      })),
      success_url: body.successUrl,
      cancel_url: body.cancelUrl,
      metadata: body.metadata,
      automatic_tax: { enabled: true },
    });

    return NextResponse.json({ id: session.id, url: session.url }, { status: 200 });
  } catch (err: any) {
    console.error("Stripe checkout error:", err);
    return NextResponse.json(
      { error: err?.message ?? "Unexpected server error" },
      { status: 500 }
    );
  }
}