# DECISIONS.md
# Architecture Decision Records (ADR)

> All significant technical decisions are documented here.  
> Format: Context → Options → Decision → Rationale → Trade-offs → Consequences

---

## ADR-001: Framework Selection

**Date:** 2026-08-15  
**Status:** Accepted

### Context
Need a static site generator that supports: GitHub Pages deployment, Markdown content, MDX, type-safe content schemas, dark mode, SEO, long-term maintainability, and a modern developer experience.

### Options Evaluated
| Option | Pros | Cons |
|---|---|---|
| **Astro** | Zero-JS default, Content Collections, MDX, Vite-fast, modern DX | Requires Node.js build step via Actions |
| Jekyll | Native GitHub Pages, mature | Ruby ecosystem, slow builds, dated, poor TS |
| Next.js | Powerful, full-stack | Overkill, Vercel-optimized, complex static export |
| Hugo | Very fast | Go templates, niche ecosystem, poor JS interop |

### Decision
**Astro ^7.x**

### Rationale
- Content Collections provide type-safe frontmatter validation — matches SDD data model discipline
- Zero JS by default = excellent Lighthouse scores without manual optimization
- Official GitHub Actions integration via `withastro/action`
- MDX enables future math rendering (remark-math + rehype-katex) for research notes
- Active, growing ecosystem with good documentation

### Trade-offs
- Requires a GitHub Actions build step (instead of Jekyll's native Pages support)
- Learning curve for `.astro` component syntax

### Consequences
- Build time ~30–60 seconds on GitHub Actions
- Full TypeScript support throughout
- Can add React/Svelte islands later if needed for interactivity

---

## ADR-002: Styling Approach

**Date:** 2026-08-15  
**Status:** Accepted

### Context
Need a styling approach that supports: CSS custom property tokens, dark/light/system theme, no framework lock-in, responsive design, long-term maintainability.

### Options Evaluated
| Option | Pros | Cons |
|---|---|---|
| **Vanilla CSS + Custom Properties** | No dependency, full control, token system natural | More verbose than utilities |
| Tailwind CSS | Utility-first speed | Framework lock-in, class bloat, dark mode via class strategy |
| CSS Modules | Scoped styles | Less token reuse |
| styled-components | Dynamic | Runtime JS |

### Decision
**Vanilla CSS with CSS Custom Properties (design tokens)**

### Rationale
- CSS custom properties are the natural way to implement a token system
- No dependency churn — CSS is stable for decades
- `data-theme` attribute strategy gives clean dark/light switching
- Scoped component styles via `<style>` in `.astro` files

### Trade-offs
- More verbose than Tailwind utilities
- No JIT compilation (but output is smaller and more predictable)

### Consequences
- `src/styles/tokens.css` is the single source of truth for design tokens
- All colors, spacing, typography defined as variables
- No runtime CSS-in-JS overhead

---

## ADR-003: Search Implementation

**Date:** 2026-08-15  
**Status:** Accepted

### Context
Need a search solution for a static site with no backend, no server, minimal JS, good UX.

### Options Evaluated
| Option | Pros | Cons |
|---|---|---|
| **Pagefind** | Static index, zero server, built for Astro, tiny client JS | Index builds post-compile |
| Lunr.js | Client-side, mature | Large bundle, manual indexing |
| Algolia | Powerful, hosted | Requires API key, not self-contained |
| Fuse.js | Simple | Bundle size, no indexing |

### Decision
**Pagefind** (post-build static search index)

### Rationale
- Designed specifically for static site builders like Astro
- Post-build indexing = search just works after `npm run build`
- Zero server infrastructure required
- Tiny client-side JS (< 30KB)

### Trade-offs
- Search index built at deploy time (no real-time updates)
- Requires `pagefind` command run after Astro build

### Consequences
- `package.json` build script: `"build": "astro build && npx pagefind --site dist"`
- GitHub Actions includes pagefind in build step

---

## ADR-004: Content Architecture

**Date:** 2026-08-15  
**Status:** Accepted

### Context
Need a content management approach that is: git-friendly, no CMS dependency, supports structured data, maintainable by adding Markdown files only.

### Decision
**Astro Content Collections + Markdown/MDX + frontmatter**

### Rationale
- Content Collections enforce schema validation at build time
- Markdown is universally readable, editable in any editor
- Frontmatter provides structured metadata per entry
- Type-safe with TypeScript — schema errors caught at build

### Consequences
- No database required
- No admin UI required
- Adding content = create file + git push
- Schema changes require updating `src/content/config.ts` and existing entries

---

## ADR-005: Dark Mode Strategy

**Date:** 2026-08-15  
**Status:** Accepted

### Context
Need dark/light/system mode without flash-of-unstyled-content (FOUC) on page load.

### Decision
**`data-theme` attribute on `<html>` + inline script in `<head>` + localStorage persistence**

### Implementation
```html
<script is:inline>
  const stored = localStorage.getItem('theme');
  const system = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  const theme = stored || 'system';
  const resolved = theme === 'system' ? system : theme;
  document.documentElement.setAttribute('data-theme', resolved);
</script>
```

### Rationale
- Inline script runs before paint — no FOUC
- `data-theme` attribute is semantically clear
- CSS custom properties re-mapped per theme = single source of truth
- System preference respected by default

### Consequences
- JavaScript required for theme toggle (acceptable — tiny inline script)
- Theme persists across page loads via localStorage
