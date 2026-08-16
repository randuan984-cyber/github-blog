import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// ─── Blog Collection ──────────────────────────────────────────────────────────
const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(200),
    date: z.coerce.date(),
    categories: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

// ─── Projects Collection ──────────────────────────────────────────────────────
const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    status: z.enum(['planning', 'learning', 'in-progress', 'completed', 'archived']),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    tech_stack: z.array(z.string()).default([]),
    original_repository: z.string().url().optional(),
    my_repository: z.string().url().optional(),
    demo: z.string().url().optional(),
    featured: z.boolean().default(false),
    source_type: z.enum(['original', 'fork', 'study', 'contribution']).default('original'),
    my_contribution: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

// ─── Notes Collection ─────────────────────────────────────────────────────────
const notes = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.enum([
      'bug', 'debugging', 'architecture', 'api', 'deployment',
      'performance', 'refactoring', 'testing', 'decision', 'general'
    ]),
    tags: z.array(z.string()).default([]),
    problem: z.string(),
    draft: z.boolean().default(false),
  }),
});

// ─── Journey Collection ───────────────────────────────────────────────────────
const journey = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/journey' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.string(),
    status: z.enum(['exploring', 'learning', 'practicing', 'completed']),
    summary: z.string(),
    what_i_learned: z.string().optional(),
    related_projects: z.array(z.string()).default([]),
    related_posts: z.array(z.string()).default([]),
  }),
});

// ─── Research Collection ──────────────────────────────────────────────────────
const research = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/research' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.string(),
    status: z.enum(['question', 'exploring', 'experimenting', 'concluded']),
    question: z.string(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, projects, notes, journey, research };
