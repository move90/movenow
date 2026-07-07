# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Static single-page landing site for **MoveNow** (a free exercise-plan builder for physiotherapists, by move90), built with Astro 7. Fully static output (`output: 'static'`), no client framework — the only client JS is two small inline scripts in `BaseLayout.astro` (pre-paint theme init and an IntersectionObserver scroll reveal). There are no tests or linters.

## Commands

- `npm run dev` — dev server at http://localhost:4321. Astro 7 runs it as a **detached daemon**: the command returns immediately; use `npx astro dev status`, `npx astro dev logs`, and `npx astro dev stop` to manage it.
- `npm run build` — static build to `dist/` (also the quickest sanity check that nothing is broken).
- `npm run preview` — serve the production build locally.

## Architecture

- **`src/config.ts`** is the single source of truth for anything content-editors are meant to swap: product name/wordmark, `appUrl` (all three CTAs — nav, hero, closing band — read it; currently the `"#"` placeholder), exercise count, contact email, and the page title/description used by SEO/OG tags. Edit here, not in components.
- **`src/pages/index.astro`** just composes the section components (`Header`, `Hero`, `Stats`, `HowItWorks`, `Closing`, `Footer`) inside `BaseLayout`. Each section is a self-contained `.astro` component with scoped styles.
- **Theming**: `src/styles/global.css` defines all design tokens as CSS variables on `:root` (light) with a full override set on `html.dark`. Dark mode is a `.dark` class on `<html>`, set before paint by the inline script in `BaseLayout.astro` (localStorage `theme` key, falls back to `prefers-color-scheme`) and toggled in `Header.astro`. New styles must use the tokens so both themes work.
- **Scroll animations**: add the `reveal` class to an element and the observer in `BaseLayout.astro` adds `.in` when it enters the viewport.
- The canonical/OG URL comes from `site` in `astro.config.mjs` (`https://movenow.move90.com`).

MoveNow is not a medical device — keep the legal note in the footer.
