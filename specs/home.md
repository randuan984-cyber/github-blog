# home.md — Home Page Specification

**Spec ID:** SPEC-HOME-001  
**Version:** 1.0

---

## 1. Purpose
Enable any visitor to understand "who I am, what I learn, what I build" in under 30 seconds.

## 2. Page Sections (top to bottom)
1. **Hero** — name, tagline, brief bio, CTA buttons
2. **Current Focus** — dynamic YAML-driven section
3. **Featured Projects** — max 3 featured projects
4. **Latest Notes / Blog** — latest 3 blog posts or notes
5. **GitHub Strip** — GitHub profile link
6. **Footer**

## 3. Hero Requirements
- Heading: "Hi, I'm Ran" (or configured name)
- Subheading: domain tags (AI / Software Engineering / Research)
- Bio: 2–3 sentences, first person, honest
- Buttons: Projects, GitHub, Blog, Resume
- No exaggerated claims

## 4. Current Focus
- Data source: `src/data/focus.yaml`
- Fields: title, description, status, started
- Must be easy to update (edit one file, push)

## 5. Acceptance Criteria
- AC-H-001: Hero visible without scrolling on 375px
- AC-H-002: Current Focus shows accurate status
- AC-H-003: Featured Projects cards link to /projects/[slug]
- AC-H-004: Latest posts link to /blog/[slug]
- AC-H-005: All CTAs are keyboard accessible
- AC-H-006: No horizontal overflow at any viewport width
