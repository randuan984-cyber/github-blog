// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // TODO: Replace with your actual GitHub username and repo name
  // If using a custom domain, set site to your domain and remove base
  site: 'https://YOUR_USERNAME.github.io',
  base: '/Github-blog-antigravity/',
  integrations: [
    mdx(),
    sitemap(),
  ],
  markdown: {
    shikiConfig: {
      // Using a clean dark theme for code blocks
      theme: 'github-dark-dimmed',
      wrap: true,
    },
  },
});
