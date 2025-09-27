"use client";
import { startCheckout } from "@/lib/checkout";

export default function SubscribeButton(props: {
  product: "voice" | "sales" | "data";
  tier: "starter" | "growth" | "pro";
  label: string;
  orgId?: string;
  email?: string;
  className?: string;
}) {
  const { product, tier, label, orgId, email, className } = props;

  return (
    <button
      onClick={() => startCheckout(product, tier, { orgId, email })}
      className={className || "rv-button rv-button-primary block w-full text-center"}
    >
      <div className="rv-button-top">
        <span>{label}</span>
      </div>
      <div className="rv-button-bottom">
        <span className="text-nowrap">{label}</span>
      </div>
    </button>
  );
}