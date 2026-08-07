# Sana Hameed — Portfolio

Personal portfolio site (`apps/web`) and its contact-form API (`apps/api`),
managed as an npm workspaces monorepo.

## Structure

```
apps/
  web/      React 18 + TypeScript + Vite + Tailwind — the portfolio site
  api/      Express — sends contact-form submissions via email
packages/
  config/   Shared Tailwind preset, ESLint config, Prettier config, base tsconfig
  shared/   Cross-app constants (social links, nav links) — single source of truth
scripts/    One-off/regeneratable asset scripts (e.g. OG image generation)
```

One lockfile (`package-lock.json`) lives at the repo root and covers every
workspace. Don't add per-app lockfiles.

## Setup

```bash
npm install         # installs all workspaces from the root
```

Node >=18 and npm >=9 are required (see `engines` in package.json).

## Development

```bash
npm run dev          # starts the web app (http://localhost:5173)
npm run dev:api       # starts the API server (http://localhost:5000)
```

The web app expects the API at `/api/contact`. In local dev, either:
- run `apps/api` separately and set `VITE_API_URL` in `apps/web/.env.local`, or
- proxy `/api` to `localhost:5000` in `apps/web/vite.config.ts` if you want a
  single dev origin.

## Environment variables

**`apps/api/.env`** (copy from `apps/api/.env.example`):

| Variable | Purpose |
|---|---|
| `PORT` | API server port (default 5000) |
| `ALLOWED_ORIGINS` | Comma-separated list of origins allowed by CORS |
| `SMTP_HOST` / `SMTP_PORT` / `SMTP_USER` / `SMTP_PASS` | SMTP credentials for sending contact-form emails |
| `SMTP_FROM` | From-address for outgoing mail (defaults to `SMTP_USER`) |
| `CONTACT_TO_EMAIL` | Where contact-form submissions are delivered |

If SMTP vars are unset, the API logs submissions to the console instead of
emailing them — useful for local development without real credentials.

**`apps/web`** (optional, `.env.local`):

| Variable | Purpose |
|---|---|
| `VITE_API_URL` | Overrides the default `/api/contact` target |
| `VITE_GA_MEASUREMENT_ID` | Enables Google Analytics if set; omitted entirely otherwise |

## Build & verification

```bash
npm run build        # typecheck + build apps/web, syntax-check apps/api
npm run typecheck     # apps/web only (strict TypeScript)
npm run lint          # ESLint (apps/web) + syntax check (apps/api)
npm run format        # Prettier --write across apps/**
npm run format:check  # Prettier --check (CI-friendly)
```

## Deployment

- **Web**: static build (`apps/web/dist`) deployed to Vercel. Build command:
  `npm run build --workspace=apps/web`; output directory: `apps/web/dist`.
- **API**: deployed separately (e.g. as a Vercel serverless function or a
  small Node host). Set the env vars above on whatever platform runs it, and
  set `ALLOWED_ORIGINS` to the deployed web origin so CORS isn't wide open.

## Regenerating the OG image

`scripts/generate-og-image.cjs` renders `apps/web/public/og-image.png` from
an SVG built with the same design tokens as the site (see
`packages/config/tailwind-preset.cjs`). It isn't a runtime dependency —
`sharp` is installed on demand:

```bash
npm install --no-save sharp
node scripts/generate-og-image.cjs
```
