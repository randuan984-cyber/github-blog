# ARCHITECTURE.md
# Architecture Specification

> **Version:** 1.0  
> **Decision Date:** 2026-08-15  
> **Status:** Active

---

## System Overview

```
Content Layer (Markdown + MDX + frontmatter)
     ↓
src/content/  (Astro Content Collections — type-safe schemas)
  ├── blog/
  ├── projects/
  ├── notes/
  ├── journey/
  └── research/
     ↓
src/pages/    (Astro file-based routing)
  ├── index.astro           → /
  ├── projects/[slug].astro → /projects/:slug
  ├── blog/[slug].astro     → /blog/:slug
  ├── notes/[slug].astro    → /notes/:slug
  ├── journey.astro         → /journey
  ├── research.astro        → /research
  ├── about.astro           → /about
  ├── resume.astro          → /resume
  └── search.astro          → /search
     ↓
src/layouts/  (BaseLayout, ArticleLayout, ProjectLayout)
     ↓
src/components/ (Nav, Footer, Cards, ThemeToggle, Timeline...)
     ↓
src/styles/   (tokens.css → global.css → components.css)
     ↓
Astro Build (Vite-powered — zero JS by default)
     ↓
dist/         (pure static HTML + CSS + minimal hydration JS)
     ↓
.github/workflows/deploy.yml (withastro/action@v3)
     ↓
GitHub Pages (CDN-hosted static files)
```

---

## Technology Stack

| Layer | Technology | Version | Reason |
|---|---|---|---|
| Framework | Astro | ^7.x | Zero-JS default, Content Collections, MDX, fast Vite build |
| Content | Markdown + MDX | — | Human-readable, git-friendly, no lock-in |
| Styling | Vanilla CSS (Custom Properties) | — | No dependency, full token control, dark mode via data-theme |
| Fonts | Google Fonts (Inter + JetBrains Mono) | — | Professional, widely-used, free |
| Search | Pagefind | ^1.x | Static search, zero server, zero config |
| Sitemap | @astrojs/sitemap | — | SEO, automatic generation |
| Deployment | GitHub Actions + withastro/action | v3 | Official, minimal config, free |
| Hosting | GitHub Pages | — | Free, custom domain ready, reliable CDN |

---

## Content Collections Schema

### blog
```typescript
{
  title: z.string(),
  description: z.string(),
  date: z.coerce.date(),
  categories: z.array(z.string()).default([]),
  tags: z.array(z.string()).default([]),
  draft: z.boolean().default(false),
  readingTime: z.number().optional(),
}
```

### projects
```typescript
{
  title: z.string(),
  description: z.string(),
  status: z.enum(['planning', 'learning', 'in-progress', 'completed', 'archived']),
  date: z.coerce.date(),
  tags: z.array(z.string()).default([]),
  tech_stack: z.array(z.string()).default([]),
  original_repository: z.string().optional(),  // REQUIRED for open-source projects
  my_repository: z.string().optional(),
  demo: z.string().optional(),
  featured: z.boolean().default(false),
  source_type: z.enum(['original', 'fork', 'study', 'contribution']).default('original'),
  my_contribution: z.string().optional(),
  draft: z.boolean().default(false),
}
```

### notes
```typescript
{
  title: z.string(),
  date: z.coerce.date(),
  category: z.enum(['bug', 'debugging', 'architecture', 'api', 'deployment', 'performance', 'refactoring', 'testing', 'decision', 'general']),
  tags: z.array(z.string()).default([]),
  problem: z.string(),
  draft: z.boolean().default(false),
}
```

### journey
```typescript
{
  title: z.string(),
  date: z.coerce.date(),
  category: z.string(),
  status: z.enum(['exploring', 'learning', 'practicing', 'completed']),
  summary: z.string(),
  what_i_learned: z.string().optional(),
  related_projects: z.array(z.string()).default([]),
  related_posts: z.array(z.string()).default([]),
}
```

### research
```typescript
{
  title: z.string(),
  date: z.coerce.date(),
  category: z.string(),
  status: z.enum(['question', 'exploring', 'experimenting', 'concluded']),
  question: z.string(),
  draft: z.boolean().default(false),
}
```

---

## Design System

### Color Tokens (Teal/Cyan Accent)
```css
/* Light Theme */
--color-bg:           #fafafa
--color-surface:      #ffffff
--color-surface-2:    #f4f4f5
--color-border:       #e4e4e7
--color-text:         #09090b
--color-text-muted:   #71717a
--color-accent:       #0d9488   /* teal-600 */
--color-accent-light: #ccfbf1   /* teal-100 */

/* Dark Theme */
--color-bg:           #09090b
--color-surface:      #18181b
--color-surface-2:    #27272a
--color-border:       #3f3f46
--color-text:         #fafafa
--color-text-muted:   #a1a1aa
--color-accent:       #2dd4bf   /* teal-400 */
--color-accent-light: #042f2e   /* teal-950 */
```

### Spacing Scale (8px grid)
```
--space-1: 0.25rem   (4px)
--space-2: 0.5rem    (8px)
--space-3: 0.75rem   (12px)
--space-4: 1rem      (16px)
--space-6: 1.5rem    (24px)
--space-8: 2rem      (32px)
--space-12: 3rem     (48px)
--space-16: 4rem     (64px)
--space-20: 5rem     (80px)
--space-24: 6rem     (96px)
```

### Type Scale (6 sizes)
```
--text-xs:   0.75rem  / 1rem    (caption, meta)
--text-sm:   0.875rem / 1.25rem (secondary)
--text-base: 1rem     / 1.5rem  (body)
--text-lg:   1.125rem / 1.75rem (lead)
--text-xl:   1.25rem  / 1.75rem (subtitle)
--text-2xl:  1.5rem   / 2rem    (section heading)
--text-3xl:  1.875rem / 2.25rem (page heading)
--text-4xl:  2.25rem  / 2.5rem  (hero)
```

---

## Routing Map

| URL | Page | Content Source |
|---|---|---|
| `/` | Home | `src/data/focus.yaml` + Content Collections |
| `/projects/` | Project list | `src/content/projects/` |
| `/projects/:slug` | Project detail | Individual project MDX |
| `/blog/` | Blog list | `src/content/blog/` |
| `/blog/:slug` | Blog post | Individual blog MDX |
| `/notes/` | Notes list | `src/content/notes/` |
| `/notes/:slug` | Note detail | Individual note MDX |
| `/journey/` | Learning timeline | `src/content/journey/` |
| `/research/` | Research log | `src/content/research/` |
| `/about/` | About me | Static Astro page |
| `/resume/` | Resume | Static Astro page + PDF |
| `/search/` | Search | Pagefind index |

---

## Deployment Pipeline

```yaml
Trigger: git push → main

Jobs:
  1. Checkout
  2. Setup Node.js (>=22)
  3. npm install
  4. npm run build
  5. Run Pagefind (post-build search index)
  6. Upload GitHub Pages artifact
  7. Deploy to GitHub Pages

Environment: ubuntu-latest
```

---

## Performance Targets

| Metric | Target |
|---|---|
| Lighthouse Performance | ≥ 90 |
| Lighthouse Accessibility | ≥ 90 |
| Lighthouse SEO | ≥ 90 |
| First Contentful Paint | < 1.5s |
| Total Blocking Time | < 200ms |
| JS Bundle (initial) | < 50KB |

---

## Maintenance Model

Adding content requires **zero code changes**:

```
Blog Post:    src/content/blog/my-post.mdx        → git push → live
Project:      src/content/projects/project-a.mdx  → git push → live
Note:         src/content/notes/debug-note.mdx     → git push → live
Journey:      src/content/journey/entry.mdx        → git push → live
Research:     src/content/research/topic.mdx       → git push → live
```
