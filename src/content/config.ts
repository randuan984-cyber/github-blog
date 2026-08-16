import { defineCollection, z } from 'astro:content';

// ─── Blog Collection ──────────────────────────────────────────────────────────
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().max(160),
    date: z.coerce.date(),
    categories: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

// ─── Projects Collection ──────────────────────────────────────────────────────
const projects = defineCollection({
  type: 'content',
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
  type: 'content',
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
  type: 'content',
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
  type: 'content',
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
