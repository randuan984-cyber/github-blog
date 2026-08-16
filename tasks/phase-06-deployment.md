# tasks/phase-06-deployment.md
# Phase 06: Deployment

**Status:** ⏳ Ready to Deploy  
**Workflow:** .github/workflows/deploy.yml is configured

## Pre-Deployment Checklist

- [ ] Replace `YOUR_USERNAME` with real GitHub username in:
  - `astro.config.mjs` → `site` URL
  - `src/layouts/BaseLayout.astro` → footer GitHub link
  - `src/pages/index.astro` → hero CTA + GitHub strip
  - `src/pages/projects/index.astro` → empty state link
  - `src/pages/about.astro` → links section
  - `public/robots.txt` → sitemap URL
  - `README.md` → site URL

- [ ] Push to GitHub repository

- [ ] GitHub Setup (one-time):
  1. Go to **Settings → Pages → Source → GitHub Actions**
  2. Go to **Settings → Actions → General → Workflow permissions → Read and write permissions**

## Deployment Command

```bash
git init  # if not already a git repo
git remote add origin https://github.com/YOUR_USERNAME/Github-blog-antigravity.git
git add .
git commit -m "feat: initial SDD portfolio site"
git push -u origin main
```

## Post-Deployment Verification

- [ ] Site accessible at `https://YOUR_USERNAME.github.io/Github-blog-antigravity/`
- [ ] GitHub Actions workflow passed (check Actions tab)
- [ ] All nav links work
- [ ] Dark mode toggle works
- [ ] Sitemap accessible at `/sitemap-index.xml`
- [ ] Run Lighthouse audit and record scores

## Ongoing Deployment

```bash
# Adding content:
git add src/content/blog/new-post.mdx
git commit -m "add: blog post about X"
git push
# → Auto deploys in ~60 seconds
```
