# DEVELOPMENT.md
# Development Guide

> **For:** Anyone contributing content or features to this site.  
> **Last Updated:** 2026-08-15

---

## Prerequisites

- Node.js >= 22
- npm >= 10
- Git

---

## Local Development

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/Github-blog-antigravity.git
cd Github-blog-antigravity

# Install dependencies
npm install

# Start dev server (hot reload)
npm run dev
# → http://localhost:4321

# Build for production (includes Pagefind search index)
npm run build

# Preview production build locally
npm run preview
```

---

## SDD Development Workflow

**Before writing any significant code or feature:**

```
1. Identify the Requirement (docs/PROJECT.md)
       ↓
2. Find the Specification (specs/*.md)
       ↓
3. Find or create the Task (tasks/phase-*.md)
       ↓
4. Implement
       ↓
5. Verify against Acceptance Criteria
       ↓
6. Update specs / tasks if needed
```

**Quick modifications (no SDD required):**
- Typo fixes
- Markdown content updates (blog posts, notes)
- Image replacements
- Date corrections
- Frontmatter value changes

**Full SDD required for:**
- New pages / routes
- New Content Collection schemas
- New components
- Layout changes
- Design token changes
- Deployment workflow changes

---

## Adding Content

### Add a Blog Post

```bash
# Create file
touch src/content/blog/my-post-title.mdx

# Required frontmatter:
```

```yaml
---
title: "Your Post Title"
description: "Brief description (150 chars max for SEO)"
date: YYYY-MM-DD
categories: ["Engineering"]  # Learning | Engineering | Project | Research | Notes
tags: ["astro", "debugging"]
draft: false
---
```

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

### Add a Project

```bash
touch src/content/projects/project-name.mdx
```

```yaml
---
title: "Project Name"
description: "Brief description"
status: "in-progress"   # planning | learning | in-progress | completed | archived
date: YYYY-MM-DD
tags: ["python", "ml"]
tech_stack: ["Python", "PyTorch", "Jupyter"]
original_repository: "https://github.com/original/repo"  # REQUIRED for open-source
my_repository: "https://github.com/YOUR_USERNAME/repo"
demo: ""
featured: false
source_type: "study"   # original | fork | study | contribution
my_contribution: "Brief description of what I specifically contributed or learned"
draft: false
---
```

Then write the case study body following the `specs/projects.md` template.

### Add a Learning Journey Entry

```bash
touch src/content/journey/YYYY-MM-topic.mdx
```

```yaml
---
title: "Learning Topic Name"
date: YYYY-MM-DD
category: "ML"   # ML | Web | Systems | Tools | Concepts
status: "learning"   # exploring | learning | practicing | completed
summary: "One-sentence summary of what this entry covers"
what_i_learned: "Key insight or takeaway"
related_projects: []   # slugs of related projects
related_posts: []      # slugs of related blog posts
---
```

### Add an Engineering Note

```bash
touch src/content/notes/YYYY-MM-topic.mdx
```

```yaml
---
title: "Note Title (usually the problem)"
date: YYYY-MM-DD
category: "debugging"  # bug | debugging | architecture | api | deployment | performance | refactoring | testing | decision | general
tags: ["docker", "networking"]
problem: "One-sentence description of the problem"
draft: false
---
```

### Add a Research Entry

```bash
touch src/content/research/YYYY-MM-topic.mdx
```

```yaml
---
title: "Research Topic"
date: YYYY-MM-DD
category: "Signal Processing"
status: "question"  # question | exploring | experimenting | concluded
question: "The core research question driving this entry"
draft: false
---
```

---

## Directory Structure

```
d:\Github-blog-antigravity\
├── .github/workflows/deploy.yml    ← GitHub Actions CI/CD
├── docs/                           ← SDD documentation
│   ├── PROJECT.md
│   ├── ARCHITECTURE.md
│   ├── DEVELOPMENT.md              ← this file
│   └── DECISIONS.md
├── specs/                          ← Feature specifications
├── tasks/                          ← Task tracking
├── references.md                   ← Research references
├── src/
│   ├── content/                    ← ALL content lives here
│   │   ├── config.ts               ← Schema definitions
│   │   ├── blog/                   ← Blog posts (.mdx)
│   │   ├── projects/               ← Project case studies (.mdx)
│   │   ├── notes/                  ← Engineering notes (.mdx)
│   │   ├── journey/                ← Learning timeline entries (.mdx)
│   │   └── research/               ← Research log entries (.mdx)
│   ├── data/
│   │   └── focus.yaml              ← Current Focus section (edit freely)
│   ├── layouts/                    ← Page templates
│   ├── components/                 ← Reusable UI components
│   ├── pages/                      ← Routes
│   └── styles/                     ← Design system CSS
├── public/                         ← Static files (favicon, robots.txt)
└── astro.config.mjs
```

---

## Updating "Current Focus"

Edit `src/data/focus.yaml`:

```yaml
items:
  - title: "Currently Exploring"
    description: "Exploring AI/ML fundamentals & open source engineering practices"
    status: "active"
    started: "2026-08"
```

Commit and push — live on next deployment.

---

## Deployment

Deployment is fully automated:

```
git add .
git commit -m "add: new blog post about X"
git push origin main
→ GitHub Actions triggers automatically
→ Site live at https://YOUR_USERNAME.github.io/Github-blog-antigravity/
```

GitHub Actions workflow: `.github/workflows/deploy.yml`

---

## Theme Configuration

The accent color and all design tokens are in `src/styles/tokens.css`.  
To change the accent color globally, update `--color-accent` and `--color-accent-light` values.

---

## Troubleshooting

### Build fails on "content not found"
- Check that frontmatter matches the schema in `src/content/config.ts`
- Check for required fields (title, date, status, etc.)

### Dark mode flashes on load
- Ensure the inline theme script is in the `<head>` of `BaseLayout.astro` before any CSS link

### Pagefind search not working locally
- Run `npm run build` first (Pagefind only indexes after build)
- Use `npm run preview` to test search locally

### GitHub Actions fails
- Check that `GITHUB_TOKEN` has write permissions for Pages
- Go to repo Settings → Actions → General → set "Read and write permissions"
