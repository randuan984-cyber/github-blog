# resume.md — Resume Page Specification

**Spec ID:** SPEC-RESUME-001  
**Version:** 1.0

---

## 1. Purpose
Provide a structured, scannable summary of education, projects, research, and skills — with a PDF download option.

## 2. Sections
- Education (institution, degree, period, relevant coursework)
- Projects (link to /projects/ for detail)
- Research (link to /research/ for detail)
- Skills (honest, verifiable)
- Experience (only if real employment exists)

## 3. Truthfulness Rules
- Skills listed only if genuinely practiced
- Projects listed only if documented on /projects/
- No fabricated employment history

## 4. PDF Download
- Placeholder PDF at /public/resume.pdf
- CTA button "Download PDF Resume" links to this file
- User replaces PDF as needed (no code change required)

## 5. Acceptance Criteria
- AC-RES-001: Page loads at /resume/
- AC-RES-002: Download PDF button present and functional
- AC-RES-003: Skills section shows only real skills
- AC-RES-004: Empty sections use "Coming Soon" or are hidden
