// Astro 5 content collections — locale_routed branch (per Phase 1 handoff §5).
// Each locale gets parallel collections; routes read `pages-{locale}` etc.
// Phase 5 wires this up against the Sanity export (or crawl fallback).

import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const pageSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  ogImage: z.string().optional(),
  publishedAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  draft: z.boolean().default(false),
});

const blogSchema = pageSchema.extend({
  excerpt: z.string().optional(),
  author: z.string().optional(),
  category: z.string().optional(),
  tags: z.array(z.string()).default([]),
  hero: z.string().optional(),
});

const serviceSchema = z.object({
  title: z.string(),
  summary: z.string().optional(),
  href: z.string(),
});

const faqSchema = z.object({
  question: z.string(),
  answer: z.string(),
  order: z.number().default(0),
});

const settingsSchema = z.object({
  siteTitle: z.string().optional(),
  phone: z.string().optional(),
  rebateAmount: z.string().optional(),
  currency: z.enum(['USD', 'CAD']).optional(),
});

function buildCollections(locale: string) {
  return {
    [`pages-${locale}`]: defineCollection({
      loader: glob({ pattern: '**/*.{md,mdx}', base: `./src/content/${locale}/pages` }),
      schema: pageSchema,
    }),
    [`blog-${locale}`]: defineCollection({
      loader: glob({ pattern: '**/*.{md,mdx}', base: `./src/content/${locale}/blog` }),
      schema: blogSchema,
    }),
    [`services-${locale}`]: defineCollection({
      loader: glob({ pattern: '**/*.{md,mdx,json}', base: `./src/content/${locale}/services` }),
      schema: serviceSchema,
    }),
    [`faq-${locale}`]: defineCollection({
      loader: glob({ pattern: '**/*.{md,mdx,json}', base: `./src/content/${locale}/faq` }),
      schema: faqSchema,
    }),
    [`settings-${locale}`]: defineCollection({
      loader: glob({ pattern: '**/*.{json,yml,yaml}', base: `./src/content/${locale}/settings` }),
      schema: settingsSchema,
    }),
  };
}

export const collections = {
  ...buildCollections('en'),
  ...buildCollections('es'),
  ...buildCollections('en-ca'),
  ...buildCollections('fr-ca'),
};
