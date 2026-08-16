# research.md — Research Specification

**Spec ID:** SPEC-RESEARCH-001  
**Version:** 1.0

---

## 1. Purpose
Maintain an open-ended research log — questions, paper reading notes, experiments, and reflections — without pre-defining a research direction.

## 2. Data Model
```yaml
title: string (required)
date: YYYY-MM-DD (required)
category: string (open-ended — user defines as research evolves)
status: question | exploring | experimenting | concluded (required)
question: string (required — the core research question)
draft: boolean (default false)
```

## 3. Research Body Structure (flexible)
```
## Research Question
## Background / Motivation
## Related Work / Papers
## Notes from Literature
## Methods / Approaches Considered
## Experiments (if any)
## Results / Observations
## Reflections
## Open Questions
## References
```
Structure is flexible — research entries may use any subset.

## 4. Key Principle
Research direction is NOT pre-defined. As real research interests emerge from projects and study, entries will naturally cluster. Do not force a direction.

## 5. Acceptance Criteria
- AC-R-001: Research page loads at /research/
- AC-R-002: Entries grouped by category (dynamic)
- AC-R-003: Status displayed (question / exploring / experimenting / concluded)
- AC-R-004: Research question shown on card
- AC-R-005: Full entry readable with math support (KaTeX if needed)
