// app/api/checkout/route.ts
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!); // 👈 no apiVersion

export async function POST(req: NextRequest) {
  const { lineItems, mode = "subscription", successUrl, cancelUrl, metadata } = await req.json();

  const session = await stripe.checkout.sessions.create({
    mode,
    line_items: lineItems, // [{ price: "price_...", quantity: 1 }]
    success_url: successUrl,
    cancel_url: cancelUrl,
    metadata,
    automatic_tax: { enabled: true },
  });

  return NextResponse.json({ id: session.id, url: session.url });
}