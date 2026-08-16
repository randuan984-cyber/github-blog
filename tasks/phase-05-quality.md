# tasks/phase-05-quality.md
# Phase 05: Quality & Verification

**Status:** ✅ Partially Complete  
**Build Verified:** 2026-08-15

## Automated Checks

- [x] Build: `npm run astro -- build` → Exit 0
- [x] Pages generated: 8 pages
- [x] Sitemap: sitemap-index.xml generated
- [ ] Pagefind: run after full `npm run build` (requires production build + npm run build)
- [ ] Link check: run when GitHub username is filled in
- [ ] Lighthouse: run after deployment (requires live URL)

## Manual Checks (Pending)

- [ ] Responsive: 375px, 768px, 1280px, 1440px (run `npm run dev` locally)
- [ ] Dark mode: toggle works, no FOUC
- [ ] Light mode: toggle works
- [ ] System preference: respects OS theme on first visit
- [ ] Skip link: Tab key focuses skip link
- [ ] Nav keyboard: Tab through nav links
- [ ] Mobile nav: hamburger opens/closes
- [ ] All CTAs work correctly

## Known Issues

- [ ] Replace `YOUR_USERNAME` placeholder in multiple files (see phase-04-content.md)
- [ ] Add real resume PDF at `public/resume.pdf` (placeholder needed)
- [ ] Notes and Research collections are empty (OK for now)

## Verification Checklist (to run after deployment)

```
Build:         ✅ Passes
Lint:          N/A (Astro has no separate lint step — TypeScript handled at build)
Tests:         N/A (no automated tests yet — manual acceptance criteria)
Links:         ⏳ Pending (requires real GitHub username)
Responsive:    ⏳ Manual verification pending
Accessibility: ⏳ Lighthouse pending (post-deployment)
SEO:           ⏳ Lighthouse pending (post-deployment)
```
