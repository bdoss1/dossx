# DossX – Product‑plus‑Automation Platform  
*Next 15 • TypeScript • Supabase • Clerk • Stripe • n8n • Tailwind*

This monorepo powers **DossX.com** and all Swift‑suite apps (SwiftSpend, SwiftRedact, SwiftFlow …).

---

## ✨ Features

| Area | What’s Inside |
|------|---------------|
| **Auth** | Clerk orgs → Supabase RLS workspaces |
| **UI / Styling** | Tailwind, Instrument Sans & Satoshi, dark‑mode first |
| **Data** | Supabase Postgres + pgvector, Storage, Edge Functions |
| **Billing** | Stripe metered products (`swiftspend_tx`, `swiftredact_chars`) + webhooks |
| **Automations** | n8n Docker stack, pre‑built flows (renewal alert, CRM dedupe …) |
| **Dev Ex** | ESLint · Prettier · Husky · pnpm workspaces |
| **Compliance** | SOC‑2 evidence collector & audit‑log triggers |

---

## 🗂 Repo Structure (high‑level)

```text
/
├─ apps/
│  ├─ web/          # Next 15 marketing + dashboard
│  └─ api/          # FastAPI redaction & spend endpoints
├─ packages/
│  ├─ ui/           # Re‑usable React components
│  └─ flows/        # n8n JSON templates
├─ supabase/        # migrations & seeds
├─ docker/          # local n8n, Postgres, etc.
└─ .github/         # CI workflows
```

---

## 🚀 Quick Start (local dev)

```bash
# 0 · Prereqs: Node 18+, pnpm, Docker, Supabase CLI
git clone https://github.com/dossx/dossx-monorepo
cd dossx-monorepo

# 1 · Database
supabase start            # launches Postgres & Studio

# 2 · Automations
docker compose -f docker/n8n.yml up -d

# 3 · Install deps & run both web + api
pnpm install
pnpm dev                  # turborepo → web:3000  api:8000

# 4 · Open your browser
# http://localhost:3000            (marketing)
# http://localhost:3000/dashboard  (auth‑protected)
# http://localhost:8000/docs       (FastAPI swagger)
```

---

## 🔐 Environment Variables

| Key | Description |
|-----|-------------|
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Clerk frontend key |
| `CLERK_SECRET_KEY` | Backend JWT verification |
| `SUPABASE_URL` / `SUPABASE_SERVICE_ROLE_KEY` | Supabase instance |
| `STRIPE_SECRET_KEY` | Stripe server key |
| `STRIPE_PRICE_ID_SPEND` | Metered price – SwiftSpend |
| `STRIPE_PRICE_ID_REDACT` | Metered price – SwiftRedact |
| `PLAID_CLIENT_ID` / `PLAID_SECRET` | Spend ingest |
| `OPENAI_API_KEY` | (optional GPT fallback) |
| `TESSDATA_PREFIX` | OCR model path (SwiftRedact) |

Copy `.env.example` → `.env.local` for `apps/web` and `apps/api`.

---

## 🧪 Scripts

| Command | Action |
|---------|--------|
| `pnpm dev` | Next (dev) + FastAPI (Uvicorn) concurrently |
| `pnpm lint` | ESLint + Prettier |
| `pnpm test` | Vitest (web) & Pytest (api) |
| `pnpm migrate` | Apply Supabase migrations |
| `pnpm flows:import` | Bulk‑import n8n templates |

---

## ☁️ Deployment Targets

| Surface | Host | Notes |
|---------|------|-------|
| **Site + Dashboard** | Netlify | Edge middleware (Clerk) |
| **API** | Render | Optional GPU for GLiNER |
| **n8n** | Render / VPS | Webhook IP allow‑listed |
| **Database** | Supabase | PITR & Realtime enabled |

CI: GitHub Actions → Netlify/Render using repo secrets.

---

## ⚙️ Architecture Overview

```mermaid
graph LR
A[Client (Next.js)]
  -- Clerk JWT --> B(Edge Middleware)
B --> C((Supabase RLS))
B --> D{FastAPI}
D --> E[Presidio + GLiNER]
D --> C
C -->|realtime| A
D --> F((Stripe))
```

---

## 🤝 Contributing

1. Fork + branch `feat/<name>`  
2. `pnpm lint && pnpm test` must pass  
3. Open PR (changelog entry required)  

All DB changes via `supabase migration new <name>`.

---

## 📄 License

© 2025 DossX LLC — released under **Business Source License 1.1**  
(Production use needs a DossX license.)

---

### Connect

* **Website:** <https://dossx.com>  
* **Support:** hello@dossx.com  
* **X / Twitter:** @dossx_ai  
* **Instagram:** @dossx.ai  

**Happy automating — keep it Swift!**
