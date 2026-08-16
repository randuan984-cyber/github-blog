# projects.md — Projects Page Specification

**Spec ID:** SPEC-PROJECTS-001  
**Version:** 1.0  
**Requirements:** REQ-CORE-001, REQ-CORE-004

---

## 1. Purpose
Showcase real technical projects with full context: what the project is, why I engaged with it, what I contributed, what I learned.

## 2. User Stories
- US-P-001: As a technical interviewer, I can see all projects with status and technology
- US-P-002: As an interviewer, I can open any project and read a case study
- US-P-003: As an interviewer, I can distinguish original work from open-source study
- US-P-004: As the owner, I can add a project by creating a Markdown file

## 3. Data Model (frontmatter)
```yaml
title: string (required)
description: string (required)
status: planning | learning | in-progress | completed | archived (required)
date: YYYY-MM-DD (required)
tags: string[] (default [])
tech_stack: string[] (default [])
original_repository: url (required if source_type != 'original')
my_repository: url (optional)
demo: url (optional)
featured: boolean (default false)
source_type: original | fork | study | contribution (default 'original')
my_contribution: string (required if source_type != 'original')
draft: boolean (default false)
```

## 4. Open Source Attribution (MANDATORY)
When source_type is 'fork', 'study', or 'contribution':
- Display original repository link prominently
- Display "What I Learned" vs "What I Changed" sections
- NEVER present open-source code as original invention

## 5. Project Status Badges
- `planning` → gray badge "Planning"
- `learning` → blue badge "Learning"
- `in-progress` → amber badge "In Progress"
- `completed` → green badge "Completed"
- `archived` → gray badge "Archived"

## 6. Case Study Structure (body)
```
## Overview
## Problem / Motivation
## Original Repository (if applicable)
## What I Learned from the Original
## My Contribution / Changes
## Architecture
## Tech Stack
## Implementation Notes
## Challenges
## Solutions
## Testing
## Results
## Lessons Learned
## Future Work
```

## 7. Acceptance Criteria
- AC-P-001: Project list page loads at /projects/
- AC-P-002: Each project shows: title, status badge, description, tech stack, date
- AC-P-003: Each project links to /projects/[slug]
- AC-P-004: Detail page shows full case study
- AC-P-005: Open-source projects clearly show original_repository
- AC-P-006: Filter by status and tag works
- AC-P-007: Featured projects appear on home page
- AC-P-008: Mobile layout works without horizontal overflow
