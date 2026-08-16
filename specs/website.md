# website.md — Global Site Specification

**Spec ID:** SPEC-WEBSITE-001  
**Version:** 1.0  
**Date:** 2026-08-15  
**Status:** Approved

---

## 1. Purpose
Define the global rules, principles, and invariants that apply to the entire site.

## 2. Scope
All pages, content, and features of the Personal Engineering & Learning Portfolio.

## 3. User Stories
- US-001: As an HR, I can understand who this person is and what they build in 30 seconds
- US-002: As a technical interviewer, I can navigate to projects and see real engineering work
- US-003: As the site owner, I can add new content with just `git push`
- US-004: As any visitor, I can switch between dark and light mode
- US-005: As any visitor, I can search across all content

## 4. Functional Requirements
- FR-001: All pages must render from static HTML (no server required)
- FR-002: All content must be editable via Markdown + frontmatter
- FR-003: Dark/light/system mode must be available on all pages
- FR-004: Navigation must be present on all pages
- FR-005: Footer must be present on all pages
- FR-006: Site must be deployable via `git push` to `main`

## 5. Non-Functional Requirements
- NFR-001: Lighthouse Performance ≥ 90
- NFR-002: Lighthouse Accessibility ≥ 90
- NFR-003: Lighthouse SEO ≥ 90
- NFR-004: No horizontal overflow at any breakpoint (375px–1920px)
- NFR-005: All interactive elements keyboard accessible

## 6. Truthfulness Rules (GLOBAL INVARIANT)
- TRUTH-001: No fabricated work experience or company names
- TRUTH-002: No inflated project metrics
- TRUTH-003: Open-source projects must clearly attribute the original repository
- TRUTH-004: Research results that don't exist must not be implied
- TRUTH-005: Missing content uses: "Coming Soon", "In Progress", "Exploring"

## 7. Accessibility
- Semantic HTML5 elements throughout
- All images have `alt` text
- Focus states visible on all interactive elements
- Color contrast ≥ 4.5:1 (WCAG 2.1 AA)
- `prefers-reduced-motion` respected
- Skip-to-content link on all pages

## 8. SEO (Global)
- Unique `<title>` per page
- Unique `<meta name="description">` per page
- Canonical URL per page
- `og:title`, `og:description`, `og:image` on all pages
- `sitemap.xml` auto-generated
- `robots.txt` present

## 9. Out of Scope
- User authentication
- Comments system
- Real-time data
- Database
- Admin UI
- Social sharing buttons
