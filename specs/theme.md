# theme.md — Theme & Design System Specification

**Spec ID:** SPEC-THEME-001  
**Version:** 1.0

---

## 1. Purpose
Define the visual design system — tokens, typography, spacing, and dark/light mode implementation.

## 2. Design Direction
Modern Developer × Engineering Notebook × Research Portfolio  
Inspired by: GitHub + Linear + Vercel

## 3. Principles
- Content > Decoration
- Whitespace signals confidence
- One accent color maximum
- Functional animation only (hover states, transitions — no decorative animation)
- Typography is the primary design element

## 4. Forbidden Elements
- Cyberpunk / gaming aesthetics
- Large particle systems
- 3D backgrounds
- Auto-playing media
- Excessive glassmorphism
- Complex entrance animations

## 5. Color System
Accent: Cool teal/cyan  
Light theme: near-white background, dark text  
Dark theme: near-black background (#09090b), light text

## 6. Typography
Body: Inter (Google Fonts)  
Code: JetBrains Mono (Google Fonts)  
6-tier type scale

## 7. Dark Mode
Three states: light | dark | system  
Implementation: data-theme on <html> + localStorage + inline script (no FOUC)

## 8. Acceptance Criteria
- AC-T-001: All tokens defined in tokens.css
- AC-T-002: Dark mode toggles without flash
- AC-T-003: System preference respected on first visit
- AC-T-004: Contrast ratio ≥ 4.5:1 in both themes
- AC-T-005: All breakpoints work (375–1920px)
