# Clothing Store (Next.js + TypeScript)

Modern clothing e-commerce frontend migrated to Next.js (Pages Router) with reusable components, mock data, and client-side auth/cart flows.

## Stack

- Next.js 16 + React 19 + TypeScript
- Tailwind CSS + CSS Modules
- Framer Motion
- ESLint + Prettier

## Setup

```bash
npm i
npm run dev
```

Open `http://localhost:3000`.

## Scripts

```bash
npm run dev      # Next dev server (webpack mode)
npm run build    # Production build
npm run start    # Serve static ./out build on localhost:3000
npm run lint     # ESLint
npm run format   # Prettier write
npm run format:check
npm run test:e2e # Playwright end-to-end tests
```

## GitHub Pages Deploy

- Static export is enabled via `output: 'export'` in `next.config.ts`.
- Dynamic routes are pre-rendered (`/auth/login`, `/auth/register`, `/product/[slug]`).
- GitHub Actions workflow is ready: `.github/workflows/deploy-pages.yml`.
- On push to `main`, the workflow builds `out/` and deploys to GitHub Pages.

For project Pages (`username.github.io/repo`), base path and canonical site URL are resolved automatically in CI.

## Structure

```text
pages/        # route files (_app, index, catalog, product/[slug], auth/[mode], etc.)
components/   # reusable UI blocks (layout, products, seo, auth, cart, ui)
styles/       # global tokens + CSS Modules
lib/          # contexts, fake API, helpers, formatters, routes, types
data/         # mock products and static content
assets/       # project assets (reserved)
public/       # static public files
scripts/      # helper scripts (reserved)
```

## Routes

- `/`
- `/catalog`
- `/product/[slug]`
- `/cart`
- `/checkout`
- `/auth/login`
- `/auth/register`
- `/profile` (protected)
- `/about`
- `/contacts`
- `/faq`
- `/shipping`
- `/returns`
- `/404`

## Notes

- Cart state is persisted in `localStorage`.
- Auth is client-side fake API (`lib/api.ts`) with hashed passwords and token storage.
- SEO tags are set per page via reusable meta components.
- Tailwind tokens are defined in `tailwind.config.ts` and mapped to CSS variables from `styles/globals.css`.
- Base UI primitives live in `components/ui` (`Button`, `Input`, `Select`, `Badge`, `Container`, `Section`).
