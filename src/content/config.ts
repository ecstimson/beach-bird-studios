import { defineCollection, z } from 'astro:content';

// Schema for service pages
const servicesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    featured: z.boolean().default(false),
    priority: z.number().min(0).max(100).default(50),
    tags: z.array(z.string()).optional(),
    pricing: z.object({
      starting: z.number().optional(),
      model: z.enum(['fixed', 'hourly', 'monthly', 'custom']).optional(),
    }).optional(),
    seo: z.object({
      metaTitle: z.string().optional(),
      metaDescription: z.string().max(160).optional(),
      keywords: z.array(z.string()).optional(),
    }).optional(),
  }),
});

// Schema for location pages
const locationsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    city: z.string(),
    state: z.string().default('NC'),
    population: z.number().optional(),
    marketSize: z.enum(['small', 'medium', 'large']).optional(),
    seo: z.object({
      metaTitle: z.string().optional(),
      metaDescription: z.string().max(160).optional(),
      keywords: z.array(z.string()).optional(),
    }).optional(),
  }),
});

// Schema for industry pages
const industryCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum([
      'professional-services',
      'healthcare',
      'hospitality',
      'retail',
      'construction',
      'real-estate',
      'legal',
      'financial',
    ]).optional(),
    challenges: z.array(z.string()).optional(),
    solutions: z.array(z.string()).optional(),
    seo: z.object({
      metaTitle: z.string().optional(),
      metaDescription: z.string().max(160).optional(),
      keywords: z.array(z.string()).optional(),
    }).optional(),
  }),
});

// Schema for blog posts
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string().default('Eric Stimson'),
    publishDate: z.coerce.date(),
    updateDate: z.coerce.date().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).optional(),
    category: z.enum([
      'web-design',
      'seo',
      'marketing',
      'technology',
      'business',
      'case-study',
    ]).optional(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }).optional(),
    seo: z.object({
      metaTitle: z.string().optional(),
      metaDescription: z.string().max(160).optional(),
      keywords: z.array(z.string()).optional(),
    }).optional(),
  }),
});

// Schema for homepage content
const homepageCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    hero: z.object({
      headline: z.string(),
      subheadline: z.string(),
      ctaPrimary: z.string().optional(),
      ctaSecondary: z.string().optional(),
    }).optional(),
  }),
});

// Export all collections
export const collections = {
  'services': servicesCollection,
  'locations': locationsCollection,
  'industry': industryCollection,
  'blog': blogCollection,
  'homepage': homepageCollection,
};