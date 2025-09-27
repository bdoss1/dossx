export async function startCheckout(
  product: "voice" | "sales" | "data",
  tier: "starter" | "growth" | "pro",
  opts?: { orgId?: string; email?: string }
) {
  const res = await fetch("/api/checkout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ product, tier, ...opts }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || "Failed to start checkout");
  window.location.href = data.url as string;
}