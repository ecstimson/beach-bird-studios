# DESIGN\_SYSTEMS.md

> Single source of truth for design tokens, components, and content patterns used across the Beach Bird Studios site (Astro + Tailwind). This document replaces any prior design docs (e.g., `CLAUDE.md`, `STYLE_GUIDE.md`, component-specific READMEs). **All pages and components must conform to this spec.**

---

## 0) How to use this file

* Treat this as the **contract** between design and code.
* Any token or rule here overrides previous guidance elsewhere.
* When in doubt, **prefer tokens/utilities defined here** over ad‑hoc styles.
* Keep the **Changelog** (at the end) updated with every commit that affects design.

---

## 1) Tech assumptions

* Framework: **Astro** with **Tailwind CSS** and **TypeScript** support where applicable.
* Component library: **Custom**, with light usage of Tailwind utilities and minimal bespoke CSS.
* Global CSS variables live in `src/styles/tokens.css` (or equivalent) and are consumed by Tailwind via `theme.extend`.

---

## 2) Design Tokens

> Declare in CSS variables under `:root` and mirror in `tailwind.config.{js,ts}`.

### 2.1 Colors

> Adjust hex values to match current brand if different — these are **authoritative** when merged.

```css
:root {
  /* Brand */
  --color-primary-600: #427296; /* Primary */
  --color-primary-500: #5186AF;
  --color-primary-400: #6BA0C7;
  --color-accent-600: #0EA5E9; /* Accent (sky) */

  /* Neutrals */
  --color-bg: #0b0c0f;          /* App background (dark UI) */
  --color-surface: #111318;     /* Card/section surface */
  --color-elevated: #171923;    /* Elevated layers */
  --color-border: #262b36;      /* Subtle borders */
  --color-muted: #9AA3B2;       /* Muted text */
  --color-text: #E6EAF0;        /* Primary text */
  --color-inverse: #f7f7f8;     /* Light surfaces ("White Smoke") */

  /* Semantic */
  --color-success: #22c55e;
  --color-warning: #f59e0b;
  --color-danger:  #ef4444;
}
```

```ts
// tailwind.config.ts (extend only)
export default {
  theme: {
    extend: {
      colors: {
        primary: {
          400: 'var(--color-primary-400)',
          500: 'var(--color-primary-500)',
          600: 'var(--color-primary-600)',
        },
        accent: { 600: 'var(--color-accent-600)' },
        bg: 'var(--color-bg)',
        surface: 'var(--color-surface)',
        elevated: 'var(--color-elevated)',
        border: 'var(--color-border)',
        muted: 'var(--color-muted)',
        text: 'var(--color-text)',
        inverse: 'var(--color-inverse)'
      }
    }
  }
}
```

### 2.2 Typography

* **Headings**: `Avenir Next`, `Avenir`, `Inter`, `system-ui`, `Segoe UI`, `Helvetica Neue`, `Arial`, sans-serif
* **Body**: `Inter`, `system-ui`, `Segoe UI`, `Helvetica Neue`, `Arial`, sans-serif
* **Fallback for Greycliff CF** (if previously used): prefer **Avenir Next** for headings.

```css
:root {
  --font-heading: 'Avenir Next', Avenir, Inter, system-ui, -apple-system, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
  --font-body: Inter, system-ui, -apple-system, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
}
```

**Type scale** (rem): `xs 0.8125`, `sm 0.875`, `base 1`, `lg 1.125`, `xl 1.25`, `2xl 1.5`, `3xl 1.875`, `4xl 2.25`, `5xl 3`, `6xl 3.75`.

**Utilities**:

* Headline default: `font-semibold tracking-tight text-text`.
* Body default: `text-text/90` on dark surfaces.
* Muted copy (notes, meta): `text-muted`.

### 2.3 Spacing & Sizing

* **Spacing scale**: Tailwind default with emphasis on `2, 3, 4, 6, 8, 12, 16, 24`.
* **Containers**: `max-w-screen-xl` for content; narrow prose `max-w-3xl`.
* **Section padding**: `py-16 md:py-24`.

### 2.4 Radius, Shadows, Opacity

```css
:root {
  --radius-sm: 0.375rem;  /* rounded-md */
  --radius-md: 0.75rem;   /* rounded-lg */
  --radius-xl: 1.25rem;   /* rounded-2xl */
  --shadow-sm: 0 1px 2px rgba(0,0,0,.1);
  --shadow-md: 0 6px 20px rgba(0,0,0,.25);
  --shadow-lg: 0 18px 50px rgba(0,0,0,.35);
}
```

Use: `rounded-[var(--radius-xl)] shadow-[var(--shadow-md)]` on elevated cards.

### 2.5 Breakpoints

* Tailwind defaults: `sm 640`, `md 768`, `lg 1024`, `xl 1280`, `2xl 1536`.
* **Grid defaults**: cards `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`.

### 2.6 Motion

* Durations: `150ms`, `250ms`, `450ms`.
* Easing: `cubic-bezier(0.2, 0.8, 0.2, 1)`.
* Hover lifts: `translate-y-[-2px]` with shadow intensify.

---

## 3) Layout

* **Background**: `bg-bg text-text` on `<body>`.
* **Section**: wrapper `container mx-auto max-w-screen-xl px-4 md:px-6`.
* **Card surface**: `bg-surface/80 backdrop-blur border border-border`.
* **Elevated overlays**: `bg-elevated`.

---

## 4) Components

> All components must be **pure, accessible, and tokenized**. No hard-coded colors.

### 4.1 Buttons

Variants & base classes:

* **Primary**: `inline-flex items-center gap-2 rounded-[var(--radius-md)] bg-primary-600 text-inverse px-5 py-3 font-medium shadow-[var(--shadow-sm)] hover:bg-primary-500 focus:ring-2 focus:ring-primary-400 focus:outline-none transition`.
* **Secondary**: `bg-surface text-text border border-border hover:border-primary-500` (same rest as primary).
* **Ghost**: `bg-transparent text-text/80 hover:text-text hover:bg-white/5`.
* **Sizes**: `sm px-3 py-2 text-sm`, `md px-5 py-3`, `lg px-6 py-3.5 text-lg`.

### 4.2 Links

* Default link: `text-primary-400 hover:text-primary-500 underline-offset-4 hover:underline`.
* On dark cards, ensure 4.5:1 contrast.

### 4.3 Cards

* Wrapper: `rounded-[var(--radius-xl)] border border-border bg-surface p-6 md:p-8 shadow-[var(--shadow-sm)]`.
* Hover: `hover:shadow-[var(--shadow-md)] hover:-translate-y-0.5 transition`.
* Title: `text-xl font-semibold`.
* Meta: `text-sm text-muted`.

### 4.4 Navigation (Header)

* Container: sticky top-0, backdrop, border-bottom.
* Active link: add `aria-current="page"` and style via `[aria-current="page"]:text-primary-400`.
* Mobile: slide-over with focus trap.

### 4.5 Footer

* 3–4 columns on `lg`, stack on `md`.
* Social icons use currentColor with `text-muted hover:text-text`.

### 4.6 Hero

* Composition: eyebrow (optional), H1, supporting copy, CTA row, media.
* Min height: `min-h-[52vh]`.

### 4.7 Forms

* Inputs: `bg-elevated/60 border border-border rounded-[var(--radius-md)] px-4 py-2.5 text-text placeholder:text-muted focus:ring-2 focus:ring-primary-500`.
* Labels: `text-sm text-muted`.
* Error text: `text-danger text-sm mt-1`.

### 4.8 Accordion

* Trigger: `w-full text-left py-3 font-medium flex items-center justify-between`.
* Panel: `text-text/90 pt-1 pb-5`.
* Use `aria-expanded` and `aria-controls`.

### 4.9 **ServiceCards** (Astro)

> Unified service card grid used on Services and landing pages.

**Props (required/optional)**

* `title` (string): Section heading.
* `intro` (string, optional): Short supporting copy below the heading.
* `items` (array): Each item `{ icon?: string | AstroComponent, title: string, description: string, href?: string, label?: string }`.

**Structure & classes**

* Section: `.container py-16 md:py-24`.
* Grid: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8`.
* Card: use **Cards** spec above.
* Icon circle (optional): `size-10 rounded-full bg-primary-600/10 text-primary-400 flex items-center justify-center`.
* CTA on card: **Ghost** button, right-chevron icon.

### 4.10 **ProcessTimeline** (Astro)

> Linear or stepped timeline for process/approach pages.

**Props**

* `title` (string)
* `steps` (array): `{ step: number, title: string, body: string, media?: string | AstroComponent }`.
* `variant` ("numbered" | "lined") default `numbered`.

**Structure**

* Wrapper: `.container py-16 md:py-24`.
* List: `space-y-8 md:space-y-10`.
* Step row: grid `md:grid-cols-[auto,1fr] md:gap-6`.
* Step badge: `w-9 h-9 rounded-full bg-primary-600 text-inverse grid place-items-center font-semibold`.
* Body: `prose prose-invert max-w-none` (ensure typography plugin).

### 4.11 Tabs (optional)

* Role/aria attributes, keyboard support.

### 4.12 Alerts

* Info/success/warning/danger with left accent border `border-l-4`.

---

## 5) Content Patterns

### 5.1 Headings

* **H1**: `text-4xl md:text-5xl font-semibold tracking-tight`.
* **H2**: `text-3xl md:text-4xl font-semibold mt-10`.
* **H3**: `text-2xl font-semibold mt-8`.

### 5.2 Prose

* Use typography plugin with **inverted** colors.
* Limit line-length to `max-w-3xl` for longform.

### 5.3 CTAs

* Primary first, Secondary ghost as alternate.
* Avoid duplicate competing CTAs per section.

### 5.4 Lists & Icons

* Use check icons `text-primary-400` for benefits lists.

---

## 6) Accessibility

* Maintain 4.5:1 contrast for body text; 3:1 for large headings.
* Focus visible on all interactive elements `focus:ring-2` in brand color.
* Provide `aria-live` for async states.

---

## 7) SEO & Metadata

* Each page: unique `title`, `meta description`, Open Graph image.
* JSON‑LD where relevant (Organization, Service, Article, Breadcrumb).

---

## 8) Implementation Notes

### 8.1 File locations

* Tokens CSS: `src/styles/tokens.css` (import in `src/layouts/Base.astro`).
* Tailwind mapping: `tailwind.config.ts` (see snippet above).
* Shared components: `src/components/ui/`.
* Page sections: `src/components/sections/` (e.g., `ServiceCards.astro`, `ProcessTimeline.astro`).

### 8.2 Do & Don’t

* ✅ Do compose from tokens and utilities.
* ✅ Do export small, focused props on components.
* ❌ Don’t hardcode hex colors or pixel values; always reference tokens.
* ❌ Don’t re‑declare spacing/typography inline.

### 8.3 Testing checklist

* Visual regression: homepage, services, blog index, blog post, comparison pages, contact.
* Responsive: sm, md, lg, xl, 2xl.
* Keyboard: header/nav, accordions, tabs, forms.

---

## 9) Example usage

```astro
---
import ServiceCards from '@/components/sections/ServiceCards.astro'
import ProcessTimeline from '@/components/sections/ProcessTimeline.astro'
const services = [
  { title: 'Web Design', description: 'Astro + Tailwind sites built for speed.', href: '/services/web-design' },
  { title: 'Branding', description: 'Identity, collateral, and guidelines.', href: '/services/branding' },
  { title: 'SEO', description: 'Content systems for growth.', href: '/services/seo' },
]
const steps = [
  { step: 1, title: 'Discover', body: 'Goals, audience, constraints.' },
  { step: 2, title: 'Design', body: 'Systemize components & tokens.' },
  { step: 3, title: 'Deliver', body: 'Ship, measure, iterate.' }
]
---
<section class="py-16 md:py-24">
  <ServiceCards title="Capabilities" items={services} />
  <ProcessTimeline title="Our Process" steps={steps} />
</section>
```

---

## 10) Migration Plan (one‑time refactor)

1. Create `src/styles/tokens.css` and map tokens in `tailwind.config.ts`.
2. Global wrap: `<body class="bg-bg text-text antialiased">` in base layout.
3. Sweep components/pages for hardcoded colors, radii, shadows → replace with tokens.
4. Normalize buttons/links to the spec.
5. Update `ServiceCards.astro` and `ProcessTimeline.astro` to accept/emit props as defined.
6. Remove prior design docs (`CLAUDE.md`, scattered style notes) after parity is verified.
7. Run accessibility and responsive checks.

---

## 11) Glossary

* **Token**: named design value (color, spacing, radius) that maps to CSS variables and Tailwind theme.
* **Surface/Elevated**: background layers for depth.

---

## 12) Changelog

* **2025‑08‑31**: Initial consolidation into `DESIGN_SYSTEMS.md`. Establish tokens, components, and migration plan.
* **2025-08-31**: **REFACTOR COMPLETE** - Design system consolidation implemented. Created `src/styles/tokens.css` with dark UI theme tokens. Updated `tailwind.config.mjs` with token mappings. Refactored `ServiceCards.astro` and `ProcessTimeline.astro` components to match specifications. Updated `Header.astro` with tokenized styles and accessibility improvements. Applied `bg-bg text-text antialiased` to body element. Removed legacy color variables and hardcoded styles. All components now use design tokens exclusively. Ready for QA and deployment.
