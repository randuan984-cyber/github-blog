# references.md
# Research References — PHASE 1

> What was studied, what was learned, what will and won't be adopted.

---

## Reference 1: Brittany Chiang Portfolio

**URL:** https://brittanychiang.com/  
**Studied:** Information architecture, navigation, dark theme, project case study depth  
**What was learned:**  
- Single sticky nav with minimal items (About, Experience, Projects, Contact) is clean and effective  
- High contrast dark palette with a single green accent creates technical identity  
- Project cards with live demo + GitHub links satisfy the interviewer's need to verify work  
- "Built with" footer citing the tech stack shows transparency  

**What will be adopted:**  
- Sticky minimal navigation  
- Clear project link structure (repo + demo)  
- Single-accent-on-dark design philosophy  
- "Currently at / Working on" brief statement in hero  

**What will NOT be copied:**  
- Specific color scheme (navy/green belongs to her identity)  
- Career timeline format (not applicable at this stage)  

---

## Reference 2: Linear.app Design System

**URL:** https://linear.app/  
**Studied:** Spacing rhythm, typography hierarchy, token-based precision, density vs. whitespace balance  
**What was learned:**  
- 8px grid creates perfect visual rhythm across all screen sizes  
- Negative letter-spacing on headlines gives premium, compact look  
- Monochromatic base with single accent keeps cognitive load low  
- Functional micro-interactions (hover states, focus rings) over decorative animation  
- Token-based CSS custom properties are the architectural foundation  

**What will be adopted:**  
- 8px spacing grid  
- Tight tracking on large headings (-0.02em to -0.04em)  
- Neutral grey scale + single teal accent  
- Functional hover states only  
- CSS custom property token system  

**What will NOT be copied:**  
- Product marketing copy tone  
- 3D feature illustrations  
- Complex gradient backgrounds  

---

## Reference 3: Vercel.com + Vercel Blog

**URL:** https://vercel.com/ + https://vercel.com/blog  
**Studied:** Typography hierarchy, whitespace philosophy, code block styling, dark/light mode  
**What was learned:**  
- Generous whitespace is not emptiness — it signals confidence and clarity  
- Body text at 16–18px with 1.5–1.7 line height is optimal for technical reading  
- Monospace font for code is essential in an engineering blog  
- Dark mode with slightly warm dark (not pure #000000) is easier on eyes  
- Blog list view: date + category + title + brief excerpt is sufficient  

**What will be adopted:**  
- Prose typography: 16–18px body, 1.6 line height  
- Warm dark background (#09090b, not pure black)  
- Monospace font (JetBrains Mono) for all code  
- Minimal blog card structure  

**What will NOT be copied:**  
- Marketing landing page animations  
- Product-specific UI patterns  

---

## Reference 4: GitHub Engineering Blog

**URL:** https://github.blog/engineering/  
**Studied:** Blog post structure, technical narrative, problem→solution arc  
**What was learned:**  
- Best engineering posts lead with "Why" — the problem motivation  
- Concrete before/after metrics (but only when genuine)  
- Diagrams are worth 1000 words for architecture explanations  
- Short sentences, active voice, first-person engineering narrative  
- Inline code snippets must be readable — dark code blocks with syntax highlighting  

**What will be adopted:**  
- Blog post template: Why / Problem / What I Tried / What Failed / Solution / Lessons  
- Short, clear technical prose  
- Code blocks with syntax highlighting (Shiki via Astro)  

**What will NOT be copied:**  
- Corporate engineering blog tone (team-based language)  
- Specific post formats designed for large team announcements  

---

## Reference 5: Astrofy Template

**URL:** https://github.com/saicoder/astrofy  
**Studied:** Astro Content Collections setup, CV section, project listing, blog integration  
**What was learned:**  
- `src/content/config.ts` schema validation catches frontmatter errors at build time  
- Separating content from layout via collections is the right approach  
- Timeline components work well as a vertical list of timestamped entries  

**What will be adopted:**  
- Content Collections architecture pattern  
- Schema-first content design  

**What will NOT be copied:**  
- Visual design (generic Bootstrap-style appearance)  
- Specific component implementation  

---

## Reference 6: Pagefind Documentation

**URL:** https://pagefind.app/  
**Studied:** Static search indexing, integration with static site builders, client-side JS size  
**What was learned:**  
- Pagefind creates a search index post-build, requiring `pagefind --site dist`  
- Client-side JS is ~30KB compressed — acceptable  
- Automatically indexes all built HTML — zero configuration needed for basic search  
- Can be integrated via a simple `<link>` and `<script>` + custom UI  

**What will be adopted:**  
- Pagefind as the search solution  
- Post-build indexing in the npm build script  

---

## Research Conclusion

> **Technology Stack Confirmed:** Astro + Vanilla CSS + Content Collections + Pagefind + GitHub Actions → GitHub Pages  
>  
> **Design Direction Confirmed:** Minimal, professional, teal-accent, dark-mode-first, token-based CSS, generous whitespace, JetBrains Mono for code, Inter for prose  
>  
> **Content Architecture Confirmed:** Markdown/MDX + frontmatter, schema-validated per collection, zero-CMS, git-based workflow
