# Schematic Marketing — Master Prompt

**"Generate a complete Next.js (App Router) TypeScript project that follows these instructions exactly. Produce runnable code, configs, README, CI workflow, and tests. Prioritize mobile-first responsiveness, SEO, accessibility (WCAG AA+), clean code, and the Neumorphic visual system described below."**

---

## Executive Summary — The Brief

**Project name:** schematic-marketing
**Tagline:** The Architecture of Influence.

Schematic Marketing is a systems-first creative studio. The site must feel engineered, precise, and tactile, while retaining warmth and human presence. The design system is an intersection: technical diagrams (blueprint precision) + watercolor gestures (organic humanism). Neumorphism connects those two sensibilities by giving interfaces a tactile, paper-like surface.

Build a Next.js app using the latest App Router and TypeScript. Include the pages: **Home**, **About**, **Portfolio**, **Contact** (with a reusable Contact component/form), and a global **Footer**. Include clear primary and secondary CTAs across pages. Use Node.js LTS features, and set up Husky, Prettier, ESLint, lint-staged, and CI.

---

## Brand Guide (copy verbatim into the project docs and use in components/styles)

### 1.0 — Core Line

**"The Architecture of Influence."**

Schematic Marketing acts like a blueprint: modular, interlocking, and practical. Visual language must reflect a toolkit: precise lines, layered surfaces, and human brushwork.

### 2.0 — Brand Core

**Mission:** Deconstruct complex market problems and rebuild them into functional, artistic engines of growth.

**Pillars**

- Structural Integrity — plan before you act; every element has purpose.
- Modular Flexibility — components should compose and recompose without friction.
- Human Fluidity — data and empathy coexist.
- Accessible Innovation — high-tech execution that stays readable and usable.

**Voice & Tone**

- Primary voice: The Architect — confident, crisp, declarative.
- Secondary voice: The Artist — warmer, expressive, used sparingly.
- Action language: Constructive, Layered, Lucid, Tactile, Blueprint, Flow.
- Avoid empty marketing phrases.

---

### 3.0 — Color System (use as CSS variables)

**Primary Palette**

- Blueprint Blue — `#1b4688` (headers, primary buttons, structural lines, footer backgrounds)
- Drafting Azure — `#bbcdf3` (neumorphic highlights, active accents)
- Canvas White — `#ffffff` (content card surfaces where high contrast needed)
- Vellum — `#f5f0e0` (main background to reduce eye strain)

**Secondary Palette**

- Deep Ink — `#102f5d` (body copy, high-contrast borders)
- Shadow Slate — `#d5ddef` (dark shadows)
- Cloud Blue — `#e0eaf5` (light highlights, inactive states)
- Rose Clay — `#f5e2e0` (watercolor accent, warmth indicators)

**Full list:** `#1b4688, #bbcdf3, #ffffff, #f5f0e0, #102f5d, #d5ddef, #e0eaf5, #f5e2e0`

---

### 4.0 — Typography & Hierarchy

**Primary Typeface:** Inter (or Roboto) — geometric sans-serif.
**Accent Typeface:** Caveat (or Architects Daughter) — handwritten accent for callouts only.

**Usage**

- H1: Inter Bold, color `#1b4688`, tracking `-0.02em`, can be sentence case or ALL CAPS.
- H2: Inter SemiBold, color `#102f5d`.
- Body: Inter Regular, color `#102f5d`, line-height `1.6`.
- Accent callouts: Caveat (max 10% of text), rotated slightly `-2deg` to `2deg`.

**Minimum base font size:** `16px`.

---

### 5.0 — Graphic Language & Imagery

**Base layer (Schematic):** thin vector lines (0.5–1pt), grid backgrounds, measurement markers, wireframe assets.
**Overlay (Watercolor):** semi-transparent washes in `#bbcdf3` and `#f5e2e0` that bleed slightly outside lines.
**Photography:** creators at work, hands drawing, clean technology scenes. High exposure, slight desaturation, added clarity. Apply a faint grid texture overlay (5–10% opacity).

---

### 6.0 — Neumorphism — The Surface Rules

**Background options:** `#e0eaf5` (Cloud Blue) or `#f5f0e0` (Vellum).

**Extruded Card**

```css
background: #f5f0e0;
box-shadow:
  9px 9px 18px #d1ccc0,
  -9px -9px 18px #ffffff;
border-radius: 16px;
border: 1px solid rgba(255, 255, 255, 0.4);
```

**Pressed State** (active inputs / pressed buttons)

```css
background: #f5f0e0;
box-shadow:
  inset 6px 6px 12px #d1ccc0,
  inset -6px -6px 12px #ffffff;
border-radius: 12px;
```

**Button conventions**

- Primary: Solid Blueprint Blue (`#1b4688`) with soft drop shadow, rounded but technical edge.
- Secondary: Neumorphic extrusion in Vellum with Deep Ink (`#102f5d`) text.
- Icons: thin-line vectors, stroke `1.5px`, color `#1b4688`, placed inside a Neumorphic circle.

---

### 7.0 — Grid & Spacing

**Web grid:** 12-column grid.
**Grid color (for subtle background):** `#1b4688` at 5% opacity.
**Spacing base:** 20px square rhythm. Margins should be generous — double standard spacing.

---

### 8.0 — Component Language (A-La-Carte Blocks)

Design each service as a block so they can stack, reorder, or stand alone. Suggested visual metaphors:

- Social Management — Connection nodes
- Web Dev — structural brackets `< >` and isometric cubes
- Graphic Design — brush curves + watercolor
- Event Planning — timeline / linear gantt visuals
- SEO — concentric target circles

---

### 9.0 — Accessibility & Technology Standards

- Use semantic HTML.
- Contrast: body text >= 4.5:1 against background; large text >= 3:1.
- Minimum body font size `16px`.
- Accessible keyboard focus states — visible and not solely color-based.
- Do not rely solely on shadows to signal affordance; add borders or color differences.
- Labels, ARIA, and roles used when necessary but prefer native semantics.

---

## Project Requirements — Technical & Structure

Use Next.js with the App Router and TypeScript. Prefer plain CSS modules or CSS with variables for design tokens (no heavy runtime frameworks). Use `next/image` for optimized images.

### Recommended stack

- Next.js (App Router, latest)
- React 18+ (concurrent-safe)
- TypeScript
- ESLint (with `plugin:jsx-a11y` & `plugin:react-hooks`)
- Prettier
- Husky + lint-staged
- Testing: jest + React Testing Library
- Accessibility test: axe-core or pa11y in CI
- Deployment: Vercel recommended (static + server actions for form)

---

## Files & Folders — suggested scaffold (copy into README for Copilot)

```
/package.json
/next.config.js
/tsconfig.json
/.eslintrc.cjs
/.prettierrc
/.husky/
/lint-staged.config.js
/.github/workflows/ci.yml
/public/
  /favicon.ico
  /robots.txt
  /og-image.jpg
/app/
  /layout.tsx
  /globals.css
  /design-tokens.css
  /page.tsx                (Home)
  /about/page.tsx
  /portfolio/page.tsx
  /contact/page.tsx
  /components/
    Header.tsx
    Footer.tsx
    Seo.tsx
    SkipToContent.tsx
    Button.tsx
    Hero.tsx
    ServicesGrid.tsx
    ServiceCard.tsx
    PortfolioGrid.tsx
    PortfolioCard.tsx
    ContactForm.tsx
    AccessibleInput.tsx
    ThemeToggle.tsx
/tests/
  accessibility.test.ts
  header.test.tsx
README.md
USAGE_NOTES.md
```

---

## Design tokens — `app/design-tokens.css` (paste into project)

```css
:root {
  --color-blueprint: #1b4688;
  --color-drafting: #bbcdf3;
  --color-canvas: #ffffff;
  --color-vellum: #f5f0e0;

  --color-deep-ink: #102f5d;
  --color-shadow-slate: #d5ddef;
  --color-cloud-blue: #e0eaf5;
  --color-rose-clay: #f5e2e0;

  --font-sans:
    'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  --font-accent: 'Caveat', 'Architects Daughter', cursive;

  --radius-lg: 16px;
  --radius-md: 12px;

  --neu-light: #ffffff;
  --neu-dark: #d1ccc0;

  --shadow-extrude: 9px 9px 18px var(--neu-dark), -9px -9px 18px var(--neu-light);
  --shadow-inset: inset 6px 6px 12px var(--neu-dark), inset -6px -6px 12px var(--neu-light);

  --grid-color: rgba(27, 70, 136, 0.05);
}
```

---

## Global styles — `app/globals.css` (include these examples)

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&family=Caveat&display=swap');

html,
body,
#root {
  height: 100%;
}
body {
  font-family: var(--font-sans);
  background: var(--color-vellum);
  color: var(--color-deep-ink);
  line-height: 1.6;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
}

/* Neumorphic surfaces */
.surface {
  background: var(--color-vellum);
  box-shadow: var(--shadow-extrude);
  border-radius: var(--radius-lg);
  border: 1px solid rgba(255, 255, 255, 0.4);
  padding: 1rem;
}

/* Pressed / inset */
.surface--inset {
  box-shadow: var(--shadow-inset);
}

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: 0.75rem 1rem;
  font-weight: 700;
  cursor: pointer;
  transition:
    transform 0.12s ease,
    box-shadow 0.12s ease;
}

.btn--primary {
  background: var(--color-blueprint);
  color: var(--color-canvas);
  box-shadow: 0 6px 18px rgba(27, 70, 136, 0.18);
  border: none;
}

.btn--secondary {
  background: var(--color-vellum);
  color: var(--color-deep-ink);
  box-shadow: var(--shadow-extrude);
  border: 1px solid rgba(255, 255, 255, 0.4);
}

/* Focus styles should be large and visible */
:focus {
  outline: 3px solid var(--color-drafting);
  outline-offset: 2px;
}

/* Typography helpers */
.h1 {
  font-size: clamp(1.6rem, 5vw, 2.8rem);
  line-height: 1.05;
  font-weight: 700;
  color: var(--color-blueprint);
  letter-spacing: -0.02em;
}

.h2 {
  font-size: clamp(1.2rem, 3.2vw, 1.6rem);
  font-weight: 600;
  color: var(--color-deep-ink);
}

/* Grid helpers */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
}

/* Responsive breakpoints (mobile-first) */
@media (min-width: 640px) {
  /* sm */
}
@media (min-width: 768px) {
  /* md */
}
@media (min-width: 1024px) {
  /* lg */
}

/* Decorative faint blueprint grid background (optional) */
.grid-bg {
  background-image:
    linear-gradient(var(--grid-color) 1px, transparent 1px),
    linear-gradient(90deg, var(--grid-color) 1px, transparent 1px);
  background-size: 20px 20px;
  opacity: 0.18;
}
```

---

## SEO & `Seo` component — `app/components/Seo.tsx` (example)

```tsx
import Head from 'next/head';

type Props = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
};

export default function Seo({ title, description, path, image }: Props) {
  const siteTitle = title
    ? `${title} — Schematic Marketing`
    : 'Schematic Marketing — The Architecture of Influence';
  const desc =
    description ||
    'We engineer engagement: modular marketing services blending strategy, design, and accessible tech.';
  const url = `https://example.com${path || '/'}`;
  const img = image || '/og-image.jpg';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Schematic Marketing',
    url: 'https://example.com',
    logo: 'https://example.com/favicon.ico',
    sameAs: [],
  };

  return (
    <Head>
      <title>{siteTitle}</title>
      <meta name="description" content={desc} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:image" content={img} />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </Head>
  );
}
```

---

## Component patterns & accessibility rules

**SkipToContent** — link visible only on keyboard focus, anchors to `#main`.

**Header** — `<header>` with `<nav aria-label="Primary">`. Use a semantic `<button>` for mobile toggle with `aria-expanded`. Ensure tab order works, and menu closes with `Esc`.

**Hero** — H1 as main headline, short subhead, two CTAs: primary (View Work) and secondary (Contact). H1 must be first meaningful content inside `main`.

**ServiceCard** — `<article>` with `<h3>`, descriptive paragraph, and accessible icon (use `aria-hidden="true"` for decorative svgs).

**ContactForm** — proper `<label for="...">` association, `type="email"` with `aria-invalid` and inline error messages. Use `role="status"` for form submission messages. Provide server action or Next.js API route for submissions (CSRF-safe). Add `honeypot` hidden field to reduce spam.

**Buttons** — native `<button>` elements. Provide `aria-pressed` for toggle-like buttons. Provide visible focus state beyond color changes.

**Images** — always include `alt`. Decorative images use empty `alt=""`. Use `next/image` for optimization and provide `width` & `height` or `fill`.

---

## Example markup — Home page (sketch)

```tsx
// app/page.tsx
import Seo from './components/Seo';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ServicesGrid from './components/ServicesGrid';

export default function Home() {
  return (
    <>
      <Seo title="Home" />
      <Header />
      <main id="main" className="container" role="main">
        <Hero />
        <section aria-labelledby="services">
          <h2 id="services" className="h2">
            Our Services
          </h2>
          <ServicesGrid />
        </section>
        <section aria-labelledby="work">
          <h2 id="work" className="h2">
            Featured Work
          </h2>
          {/* PortfolioGrid component */}
        </section>
      </main>
      <Footer />
    </>
  );
}
```

---

## Contact Form — example (`app/components/ContactForm.tsx`)

```tsx
import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    const form = new FormData(e.currentTarget);
    // post to /api/contact or use Next.js server action
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(Object.fromEntries(form)),
        headers: { 'Content-Type': 'application/json' },
      });
      if (res.ok) {
        setStatus('success');
        e.currentTarget.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={handleSubmit} aria-live="polite" className="surface">
      <label htmlFor="name">Name</label>
      <input id="name" name="name" required />
      <label htmlFor="email">Email</label>
      <input id="email" name="email" type="email" required />
      <label htmlFor="projectType">Project type</label>
      <select id="projectType" name="projectType" defaultValue="">
        <option value="">Select</option>
        <option>Branding</option>
        <option>Design system</option>
        <option>Website</option>
      </select>
      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" rows={6} required />
      <button className="btn btn--primary" type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Sending…' : 'Send message'}
      </button>
      {status === 'success' && <p role="status">Thanks — we’ll reply within 2 business days.</p>}
      {status === 'error' && <p role="alert">There was an error. Please try again.</p>}
    </form>
  );
}
```

---

## Testing & CI

**Unit & integration tests**

- Use React Testing Library + Jest.
- Tests to include:
  - Skip link moves focus to main content.
  - Header mobile menu toggles via keyboard and closes with `Esc`.
  - Contact form shows success state when mock API returns OK.
  - Seo component populates `title` and `meta` tags.

**Accessibility in CI**

- Add axe-core or pa11y to run against local dev server. Example `package.json` script:

```json
"test:accessibility": "pa11y http://localhost:3000 --reporter html > accessibility-report.html"
```

**GitHub Actions** (`.github/workflows/ci.yml`) should:

- Install dependencies
- Run `pnpm/npm ci`
- Run `npm run lint`
- Run `npm run test`
- Optionally run `npm run test:accessibility` and upload the report as an artifact

---

## Husky + lint-staged example

In `package.json`:

```json
"husky": {
  "hooks": {
    "pre-commit": "lint-staged"
  }
},
"lint-staged": {
  "*.{ts,tsx,js,jsx}": ["eslint --fix", "prettier --write"],
  "*.{css,md,json}": ["prettier --write"]
}
```

Add `.husky/pre-commit` with executable content:

```bash
#!/usr/bin/env bash
. "$(dirname "$0")/_/husky.sh"
npx lint-staged
```

---

## Performance & SEO recommendations

- Use `next/image` to serve optimized images, and always provide `width` and `height` or `fill`.
- Preload critical fonts with `rel="preload"` and `as="font"`.
- Add `sitemap.xml` generator script; include canonical links.
- Consider `next-sitemap` for automated sitemap/robots management.
- For static content or portfolio pages, use static generation (SSG) where possible to improve SEO and performance.

---

## README.md skeleton (include this verbatim in the project)

```md
# Schematic Marketing — Next.js Site

## Overview

This repository contains a mobile-first, accessible, Neumorphic website for Schematic Marketing built with Next.js (App Router) and TypeScript.

## Scripts

- `dev` — run local dev server
- `build` — produce production build
- `start` — start production server
- `lint` — run ESLint
- `format` — run Prettier
- `test` — run unit tests
- `test:accessibility` — run pa11y accessibility checks (requires dev server)

## Local setup

1. Node.js LTS recommended.
2. `pnpm install` or `npm ci`
3. `pnpm dev` or `npm run dev`

## Design tokens

Edit `app/design-tokens.css` to change colors, radii, or shadows.

## Accessibility

- All interactive elements include keyboard support and visible focus indicators.
- Use `npm run test:accessibility` to generate a report.

## Deployment

Vercel recommended. Use static export or serverless functions for contact form handling.

## Notes

Keep visual accents restrained. Use Caveat only for small, handwritten callouts.
```

---

## USAGE_NOTES.md (short how-to for non-dev editors)

- To change primary color: edit `--color-blueprint` in `app/design-tokens.css`.
- To add a portfolio item: add a markdown or JSON file under `/content/portfolio/` and map it in `getStaticProps` (or static params if using App Router file system).
- To change hero text: open `app/page.tsx` → `Hero` component.
- To run accessibility checks: start dev server and run `npm run test:accessibility`.

---

## Deliverable checklist for Copilot (what to create)

1. Full Next.js App Router TypeScript project scaffold matching files above.
2. Implemented components: Header, Footer, Seo, SkipToContent, Button, Hero, ServicesGrid, ServiceCard, PortfolioGrid, PortfolioCard, ContactForm.
3. `design-tokens.css` and `globals.css` implementing Neumorphism exactly as specified.
4. Husky + lint-staged + ESLint + Prettier configuration.
5. Basic tests and accessibility test integration.
6. README and USAGE_NOTES.
7. CI workflow for lint/test/build.
8. Example content for at least three portfolio projects (placeholder images + text).
9. A short commit history with relevant messages (simulate initial commits).

---

## Final integration notes (developer guidance)

- Keep JS used for UI minimal — prefer CSS transitions and `prefers-reduced-motion` support.
- Never use shadow as only affordance; pair with border or color change.
- When implementing modals or dialogs, trap focus and return it on close.
- For interactive icons, provide `title` and `aria-hidden` as appropriate.
- For mobile nav, ensure touch targets >= 44x44px.

---

## Closing reflection

What happens when precision and softness share a single surface? Interaction becomes legible and pleasant. The site you build should answer a visitor’s first question in a glance: can I trust these people to plan, construct, and add character to a brand? Let each component read as both a plan and a promise. Design the details so readers move from curiosity to confidence — and leave with a clear next step.

---

```
npx create-next-app@latest schematic-marketing --ts --app
# Then apply the files and configs in this markdown
```

**"Generate the full project and output all files."**
