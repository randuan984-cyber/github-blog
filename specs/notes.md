# notes.md — Engineering Notes Specification

**Spec ID:** SPEC-NOTES-001  
**Version:** 1.0

---

## 1. Purpose
Capture real engineering problems encountered during development — bugs, debugging processes, architecture decisions, API discoveries, deployment issues.

## 2. Data Model
```yaml
title: string (required — usually the problem statement)
date: YYYY-MM-DD (required)
category: bug | debugging | architecture | api | deployment | performance | refactoring | testing | decision | general (required)
tags: string[] (default [])
problem: string (required — one-sentence problem description)
draft: boolean (default false)
```

## 3. Note Body Structure
```
## Problem
## Context
## Investigation
## What I Tried
## What Failed
## Root Cause
## Solution
## Verification
## Lesson
```

## 4. Acceptance Criteria
- AC-N-001: Notes list at /notes/
- AC-N-002: Filter by category
- AC-N-003: Problem summary on card
- AC-N-004: Full note at /notes/[slug]
- AC-N-005: Code syntax highlighting
