# journey.md — Learning Journey Specification

**Spec ID:** SPEC-JOURNEY-001  
**Version:** 1.0

---

## 1. Purpose
Maintain a chronological timeline of real learning experiences — not skills lists, but narrative entries about what I studied, why, what I practiced, and what I took away.

## 2. Data Model
```yaml
title: string (required)
date: YYYY-MM-DD (required)
category: string (ML | Web | Systems | Tools | Concepts | ...)
status: exploring | learning | practicing | completed (required)
summary: string (required, 1–2 sentences)
what_i_learned: string (optional)
related_projects: string[] (slugs)
related_posts: string[] (slugs)
```

## 3. Timeline View
- Grouped by year, then month
- Each entry: date, category badge, title, summary, status badge
- Related links shown if present
- Filter sidebar: by category, by status

## 4. Content Principle
Each entry documents a real learning arc:
- What I was studying and why
- What I practiced / built
- What I found difficult
- What I took away

## 5. Acceptance Criteria
- AC-J-001: Timeline loads at /journey/
- AC-J-002: Entries sorted newest-first
- AC-J-003: Year grouping visible
- AC-J-004: Related project/post links work
- AC-J-005: Mobile layout readable
