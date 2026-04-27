# Star Lanes Command (Static Sales Prototype)

A polished, static, clickable prototype for **Star Lanes Command** designed to sell the operating-layer approach from the Blueprint report.

## What this prototype is

- A front-end only demo that simulates operator software for Star Lanes.
- Focused on four key screens:
  1. Daily Operator Digest
  2. Exception / Reconciliation Queue
  3. Customer Profile
  4. Multi-Unit Dashboard
- Built to communicate why Path 02 (The Fix) and Path 03 (The Endgame) are logical next steps.

## What this prototype is not

- No backend
- No auth
- No external API calls
- No writes to external systems
- No live integrations (Square, Triple Seat, Embed, Conqueror, Rex, 501 Fund, R365)

## Tech stack

- Vite
- React + TypeScript
- Tailwind CSS

## Local development

```bash
npm install
npm run dev
```

Open the local URL shown by Vite.

## Build

```bash
npm run build
```

Outputs static files to `dist/`.

## Static deployment options

Deploy the `dist/` folder to any static host:

- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

## Fake data

All data is seeded locally in:

- `src/data/systems.ts`
- `src/data/metrics.ts`
- `src/data/exceptions.ts`
- `src/data/customers.ts`
- `src/data/locations.ts`
- `src/data/offers.ts`

These numbers and records are illustrative and intentionally fake, but shaped to feel credible to operators.

## What would need to be real in production

- Secure authentication and role-based access
- Live connectors to POS/event/arcade/lane/accounting systems
- Persistent data model + lineage
- Deterministic and auditable reconciliation rules
- Writeback workflows and approval controls for accounting systems
- Monitoring, alerting, and support tooling
