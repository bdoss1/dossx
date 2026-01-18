# DossX – Websites, AI Workflows & AI-Powered SaaS
*Next 15 • TypeScript • Supabase • Clerk • Stripe • Tailwind*

This monorepo powers **DossX.com** — custom websites, proprietary CMS, managed hosting, AI workflows, and AI-powered SaaS solutions.

---

## Features

| Area | What's Inside |
|------|---------------|
| **Auth** | Clerk orgs → Supabase RLS workspaces |
| **UI / Styling** | Tailwind, Instrument Sans & Satoshi, dark‑mode first |
| **Data** | Supabase Postgres + pgvector, Storage, Edge Functions |
| **Billing** | Stripe metered products + webhooks |
| **Automations** | AI workflow orchestration, automation pipelines |
| **Dev Ex** | ESLint · Prettier · Husky · pnpm workspaces |
| **Compliance** | SOC‑2 evidence collector & audit‑log triggers |

---

## Repo Structure (high‑level)

```text
/
├─ apps/
│  ├─ web/          # Next 15 marketing + dashboard
│  └─ api/          # FastAPI endpoints
├─ packages/
│  ├─ ui/           # Re‑usable React components
│  └─ flows/        # Automation workflow templates
├─ supabase/        # migrations & seeds
├─ docker/          # local services
└─ .github/         # CI workflows
```

---

## Quick Start (local dev)

```bash
# 0 · Prereqs: Node 18+, pnpm, Docker, Supabase CLI
git clone https://github.com/dossx/dossx-monorepo
cd dossx-monorepo

# 1 · Database
supabase start            # launches Postgres & Studio

# 2 · Install deps & run both web + api
pnpm install
pnpm dev                  # turborepo → web:3000  api:8000

# 3 · Open your browser
# http://localhost:3000            (marketing)
# http://localhost:3000/dashboard  (auth‑protected)
# http://localhost:8000/docs       (FastAPI swagger)
```

---

## Environment Variables

| Key | Description |
|-----|-------------|
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Clerk frontend key |
| `CLERK_SECRET_KEY` | Backend JWT verification |
| `SUPABASE_URL` / `SUPABASE_SERVICE_ROLE_KEY` | Supabase instance |
| `STRIPE_SECRET_KEY` | Stripe server key |
| `OPENAI_API_KEY` | AI capabilities |

Copy `.env.example` → `.env.local` for `apps/web` and `apps/api`.

---

## Scripts

| Command | Action |
|---------|--------|
| `pnpm dev` | Next (dev) + FastAPI (Uvicorn) concurrently |
| `pnpm lint` | ESLint + Prettier |
| `pnpm test` | Vitest (web) & Pytest (api) |
| `pnpm migrate` | Apply Supabase migrations |

---

## Deployment Targets

| Surface | Host | Notes |
|---------|------|-------|
| **Site + Dashboard** | Vercel / Netlify | Edge middleware (Clerk) |
| **API** | Render | Optional GPU for AI models |
| **Database** | Supabase | PITR & Realtime enabled |

CI: GitHub Actions → Vercel/Render using repo secrets.

---

## Architecture Overview

```mermaid
graph LR
A[Client (Next.js)]
  -- Clerk JWT --> B(Edge Middleware)
B --> C((Supabase RLS))
B --> D{FastAPI}
D --> E[AI Services]
D --> C
C -->|realtime| A
D --> F((Stripe))
```

---

## Contributing

1. Fork + branch `feat/<name>`
2. `pnpm lint && pnpm test` must pass
3. Open PR (changelog entry required)

All DB changes via `supabase migration new <name>`.

---

## License

© 2025 DossX LLC — released under **Business Source License 1.1**
(Production use needs a DossX license.)

---

### Connect

* **Website:** <https://dossx.com>
* **Support:** hello@dossx.com
* **X / Twitter:** @dossx_ai
* **Instagram:** @dossx.ai

**DossX builds websites, intelligent automation, and AI-powered SaaS solutions.**
