<!-- README.md — Personal Engineering & Learning Portfolio -->

# Personal Engineering & Learning Portfolio

> A long-term, maintainable personal technical archive built with Astro, Vanilla CSS, and GitHub Pages.

**Site:** `https://randuan984-cyber.github.io/github-blog/`  
**Stack:** Astro · Vanilla CSS · Content Collections · Pagefind · GitHub Actions  
**Method:** Specification-Driven Development (SDD)

---

## What This Is

A personal portfolio that grows with real experience. Not a demo site.  
Every piece of content is real — no fabricated metrics, projects, or credentials.

When content doesn't exist yet: it says "Coming Soon" or is hidden.

---

## Features

- **SDD Architecture** — all specs, decisions, and tasks documented
- **Content Collections** — type-safe frontmatter schemas
- **Dark/Light/System Mode** — no flash-of-unstyled-content
- **Pagefind Search** — zero-server static search
- **Responsive** — 375px to 1920px
- **Accessible** — semantic HTML, focus states, skip links, reduced motion
- **SEO** — sitemap, Open Graph, Twitter Card, canonical URLs
- **Auto Deploy** — every `git push` → GitHub Actions → GitHub Pages

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Astro 7.x |
| Styling | Vanilla CSS + Custom Properties |
| Fonts | Inter + JetBrains Mono (Google Fonts) |
| Search | Pagefind |
| Deployment | GitHub Actions + GitHub Pages |

---

## Architecture

```
src/content/          ← All content (Markdown/MDX + frontmatter)
  ├── blog/
  ├── projects/
  ├── notes/
  ├── journey/
  └── research/
src/pages/            ← Routes
src/layouts/          ← BaseLayout, ArticleLayout
src/components/       ← (to be added as needed)
src/styles/           ← tokens.css → global.css
docs/                 ← SDD documentation
specs/                ← Feature specifications
tasks/                ← Task tracking
```

Full architecture: [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)  
Decisions: [docs/DECISIONS.md](docs/DECISIONS.md)

---

## Local Development

```bash
# Install
npm install

# Dev server (hot reload)
npm run dev
# → http://localhost:4321

# Build (Astro + Pagefind search index)
npm run build

# Preview production build
npm run preview
```

---

## Adding Content

### Add a Blog Post

```bash
# Create file
touch src/content/blog/my-post.mdx
```

Copy from [`src/content/blog/_TEMPLATE.mdx`](src/content/blog/_TEMPLATE.mdx) as starting point.

Required frontmatter:
```yaml
---
title: "..."
description: "..."
date: YYYY-MM-DD
categories: ["Engineering"]
tags: []
draft: false
---
```

Then `git add . && git commit -m "add: blog post" && git push` — it goes live.

### Add a Project

```bash
touch src/content/projects/project-name.mdx
```

Copy from [`src/content/projects/_TEMPLATE.mdx`](src/content/projects/_TEMPLATE.mdx).

⚠️ **If based on open source:** `original_repository` and `my_contribution` are **required**.

### Add a Learning Journey Entry

```bash
touch src/content/journey/YYYY-MM-topic.mdx
```

Required: `title`, `date`, `category`, `status`, `summary`

### Add an Engineering Note

```bash
touch src/content/notes/YYYY-MM-topic.mdx
```

Required: `title`, `date`, `category`, `problem`

### Add a Research Entry

```bash
touch src/content/research/YYYY-MM-topic.mdx
```

Required: `title`, `date`, `category`, `status`, `question`

### Update Current Focus

Edit `src/data/focus.yaml` — no code changes needed.

---

## Deployment (GitHub Pages)

### One-Time Setup

1. Push to GitHub
2. Go to **Settings → Pages → Source → GitHub Actions**
3. Go to **Settings → Actions → General → Workflow permissions → Read and write**


### Ongoing Deployment

```bash
git push origin main
# → GitHub Actions builds automatically
# → Site live within ~60 seconds
```

---

## SDD Workflow

This project follows Specification-Driven Development.

Before making significant changes:

```
Requirement → Specification → Task → Implementation → Verification
```

Quick changes allowed without SDD:
- Typo fixes
- Content updates (Markdown)
- Image replacements
- Date/meta corrections

SDD required for:
- New pages or routes
- Schema changes
- New features
- Layout/architecture changes

See [docs/DEVELOPMENT.md](docs/DEVELOPMENT.md) for the full workflow.

---

## Project Structure

```
d:\Github-blog\
├── .github/workflows/deploy.yml     ← Auto deploy
├── docs/                            ← SDD docs
│   ├── PROJECT.md
│   ├── ARCHITECTURE.md
│   ├── DEVELOPMENT.md
│   └── DECISIONS.md
├── specs/                           ← Feature specs
├── tasks/                           ← Task tracking
├── references.md                    ← Research references
├── src/
│   ├── content/
│   │   ├── config.ts                ← Schema definitions
│   │   ├── blog/
│   │   ├── projects/
│   │   ├── notes/
│   │   ├── journey/
│   │   └── research/
│   ├── data/focus.yaml              ← Current Focus (edit freely)
│   ├── layouts/
│   ├── pages/
│   └── styles/
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── resume.pdf                   ← Replace with real PDF
└── astro.config.mjs
```

---

## Truthfulness Pledge

This site will never contain:
- Fabricated work experience
- Inflated project metrics
- Research results that don't exist
- Open-source projects claimed as original
- Awards or publications not received

Missing content uses: `Coming Soon` · `In Progress` · `Exploring`

---

## License

Site code: MIT  
Content: All rights reserved — do not reproduce without permission.
