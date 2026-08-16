# blog.md — Blog Specification

**Spec ID:** SPEC-BLOG-001  
**Version:** 1.0  
**Requirements:** REQ-CORE-002, REQ-CORE-004

---

## 1. Purpose
Record technical learning and engineering problem-solving as readable posts.

## 2. User Stories
- US-B-001: As a reader, I can browse all blog posts
- US-B-002: As a reader, I can filter by category and tag
- US-B-003: As a reader, I can estimate reading time before opening
- US-B-004: As the owner, I can publish by creating an .mdx file and pushing

## 3. Data Model
```yaml
title: string (required)
description: string (required, ≤150 chars)
date: YYYY-MM-DD (required)
categories: string[] (Learning | Engineering | Project | Research | Notes)
tags: string[] 
draft: boolean (default false)
```

## 4. Blog Template (for author reference)
```markdown
## Why
## Problem
## What I Tried
## What Failed
## Why It Failed
## Solution
## Implementation
## Result
## What I Learned
## What I Would Improve
```
Not every post must follow this exactly. But documenting failure and reasoning is the goal.

## 5. Content Principles
- Write about WHY, not just WHAT
- Document failures alongside successes
- Show reasoning and investigation process
- Be honest about uncertainty

## 6. Acceptance Criteria
- AC-B-001: Blog list page loads at /blog/
- AC-B-002: Posts sorted newest-first
- AC-B-003: Category tabs filter posts
- AC-B-004: Reading time displayed (auto-calculated)
- AC-B-005: Post detail loads at /blog/[slug]
- AC-B-006: Syntax highlighting in code blocks
- AC-B-007: Tags displayed and clickable
- AC-B-008: Draft posts not published
