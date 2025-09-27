import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20",
});

type ProductKey = "voice" | "sales" | "data";
type TierKey = "starter" | "growth" | "pro";

const RECURRING_PRICE: Record<ProductKey, Record<TierKey, string>> = {
  voice: {
    starter: process.env.VOICE_STARTER_PRICE!,
    growth: process.env.VOICE_GROWTH_PRICE!,
    pro: process.env.VOICE_PRO_PRICE!,
  },
  sales: {
    starter: process.env.SALES_STARTER_PRICE!,
    growth: process.env.SALES_GROWTH_PRICE!,
    pro: process.env.SALES_PRO_PRICE!,
  },
  data: {
    starter: process.env.DATA_STARTER_PRICE!,
    growth: process.env.DATA_GROWTH_PRICE!,
    pro: process.env.DATA_PRO_PRICE!,
  },
};

const SETUP_PRICE: Record<ProductKey, string> = {
  voice: process.env.VOICE_SETUP_PRICE!, // one-time
  sales: process.env.SALES_SETUP_PRICE!, // one-time
  data:  process.env.DATA_SETUP_PRICE!,  // one-time
};

export async function POST(req: NextRequest) {
  try {
    const { product, tier, orgId, email } = (await req.json()) as {
      product: ProductKey;
      tier: TierKey;
      orgId?: string;
      email?: string;
    };

    const recurring = RECURRING_PRICE[product]?.[tier];
    const setup = SETUP_PRICE[product];

    if (!recurring || !setup) {
      return NextResponse.json(
        { error: "Invalid product/tier or missing Stripe price IDs." },
        { status: 400 }
      );
    }

    const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [
        { price: recurring, quantity: 1 }, // subscription
        { price: setup, quantity: 1 },     // one-time setup fee
      ],
      success_url: `${appUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${appUrl}/pricing?canceled=1`,
      allow_promotion_codes: true,
      customer_email: email,
      subscription_data: {
        metadata: { product, tier, orgId: orgId || "" },
      },
      metadata: { product, tier, orgId: orgId || "", includes_setup_fee: "true" },
      // optional: automatic_tax: { enabled: true },
    });

    return NextResponse.json({ url: session.url }, { status: 200 });
  } catch (err: any) {
    console.error("Checkout error:", err);
    return NextResponse.json({ error: err?.message || "Checkout failed" }, { status: 500 });
  }
}