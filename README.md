# MoveNow — landing page

Static landing page for **MoveNow**, the free exercise-plan builder for physiotherapists, by [move90](https://move90.com). Built with [Astro](https://astro.build) — static output, no client framework, two small vanilla JS behaviors (theme toggle, scroll reveal).

## Run locally

```sh
npm install
npm run dev
```

Then open the URL Astro prints (default `http://localhost:4321`).

## Change the app URL, exercise count, or product name

Everything meant to be swapped in one place lives in **[`src/config.ts`](src/config.ts)**:

- `appUrl` — the live tool URL. All three CTAs (nav, hero, closing band) read it from here. Currently `"#"` as a placeholder.
- `exerciseCount` — the "500+" figure in the stats strip.
- `productName` / `wordmark` — the product name. `wordmark` controls the two-tone logo split (`Move` + accent-colored `Now`).
- `companyName`, `companyUrl`, `contactEmail` — footer/header details.
- `title` / `description` — the page title and SEO/OG description.

The canonical URL for SEO tags is set via `site` in [`astro.config.mjs`](astro.config.mjs).

## Build for deploy

```sh
npm run build
```

Outputs a fully static site to `dist/` — deploy it to any static host (Netlify, Vercel, Cloudflare Pages, S3, nginx…). Preview the production build locally with `npm run preview`.

## Structure

```
src/
  config.ts                  — site config (product name, app URL, contact…)
  layouts/BaseLayout.astro   — <head>, fonts, SEO meta, pre-paint theme init, scroll reveal
  components/
    Header.astro             — wordmark, byline, theme toggle, nav CTA
    Hero.astro               — headline, lede, CTAs, microcopy
    PlanSheet.astro          — the mock printed exercise plan
    Stats.astro              — the 3-stat strip
    HowItWorks.astro         — the three steps
    Closing.astro            — dark CTA band
    Footer.astro             — brand, legal note, email
  styles/global.css          — design tokens (light + dark), base styles
  pages/index.astro          — composes the sections
```

MoveNow is not a medical device; see the legal note in the footer.
