---
name: vscode-css
description: >
  Enforces Valentino's CSS file structure and organization rules across all projects. Use this skill
  whenever the user asks to add, edit, move, or review CSS styles — including writing new component
  styles, creating a stylesheet from scratch, refactoring existing CSS, or checking if styles are in
  the right place. Trigger even if the user just says "add this style" or "where does this CSS go" —
  if CSS is being written or organized, this skill applies.
---

# CSS Organization Skill

This skill enforces a consistent, scalable CSS structure across all of Valentino's projects.

---

## Section Order

Every stylesheet must follow this exact order:

1. **CSS Custom Properties / Design Tokens** — `:root` variables (colors, typography, spacing, transitions, z-index)
2. **Base / Global Reset** — `html`, `body`, bare element resets
3. **Per-component / per-page sections** — one section block per component or page, ordered by visual appearance (top → bottom on the page)
4. **New pages** — inserted after the last page section, before media queries. Label with the component filename.
5. **All Media Queries** — collected at the very bottom, ordered smallest → largest breakpoint. `prefers-reduced-motion` goes here too.

---

## Section Header Format

Every section must open with this comment block:

```css
/* =============================================================================
   SECTION NAME  (ComponentFile.jsx or ComponentFile.tsx)
   Brief description of what this section covers.
   ============================================================================= */
```

Use ALL CAPS for the section name. Keep the description to one line.

---

## Rules to Always Follow

- **Never scatter `@media` blocks** throughout the file — all go at the very bottom
- **New component styles** → find where the component appears visually on the page (top → bottom) and insert in the matching section
- **New page/route styles** → add a new labeled section block before the media queries
- **`:root` tokens** → only add a CSS variable if it is reused in 2+ places. Avoid one-off variables.
- **Class naming** → match the project's existing naming convention (e.g. `koyko-nav*`, `landing-*`). Ask the user if unclear.

---

## Adapting to a New Project

When working on a project that isn't Koyko, the section structure stays the same but the component names change. At the start of a new project, build the section list by:

1. Asking the user for the main components/pages (or reading the project structure if available)
2. Ordering them by visual appearance on the page
3. Creating placeholder section headers so the structure is established early

---

## Example Stylesheet Skeleton

```css
/* =============================================================================
   CSS CUSTOM PROPERTIES / DESIGN TOKENS
   Global variables: colors, typography, spacing, transitions, z-index.
   ============================================================================= */

:root {
  --color-primary: #000;
  --font-body: 'Inter', sans-serif;
  --transition-default: 0.3s ease;
}


/* =============================================================================
   BASE / GLOBAL RESET
   html, body, and bare element resets.
   ============================================================================= */

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}


/* =============================================================================
   NAVBAR  (Navbar.jsx)
   Top navigation bar styles.
   ============================================================================= */

.nav { ... }


/* =============================================================================
   HERO  (Hero.jsx)
   Full-width hero section at the top of the page.
   ============================================================================= */

.hero { ... }


/* =============================================================================
   FOOTER  (Footer.jsx)
   Bottom footer styles.
   ============================================================================= */

.footer { ... }


/* =============================================================================
   MEDIA QUERIES
   All breakpoints collected here, smallest → largest.
   prefers-reduced-motion goes at the end.
   ============================================================================= */

@media (max-width: 768px) { ... }

@media (min-width: 1024px) { ... }

@media (prefers-reduced-motion: reduce) { ... }
```

---

## When Adding Styles — Checklist

Before writing or placing any CSS, confirm:

- [ ] Is there already a section for this component? If yes, add inside it.
- [ ] If no section exists, where does this component appear visually? Insert the section in the right position.
- [ ] Is this a new page/route? Add a new section block before media queries.
- [ ] Are any new values going into `:root`? Only if used in 2+ places.
- [ ] Are there any `@media` blocks? They go at the bottom — never inline.
