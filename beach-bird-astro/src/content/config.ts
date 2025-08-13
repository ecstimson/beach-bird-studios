import { defineCollection, z } from 'astro:content';

const industries = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['home-services', 'medical-healthcare', 'professional-services', 'specialty-high-end']),
    slug: z.string(),
    featured: z.boolean().default(false),
    services: z.array(z.string()),
    keyBenefits: z.array(z.string()),
    commonChallenges: z.array(z.string()),
    targetAudience: z.string(),
    averageInvestment: z.string().optional(),
    deliveryTime: z.string(),
    seoKeywords: z.array(z.string()),
    metaTitle: z.string(),
    metaDescription: z.string(),
    canonicalUrl: z.string().optional(),
    socialImage: z.string().optional(),
  })
});

const locations = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    city: z.string(),
    state: z.string(),
    region: z.enum(['wilmington-area', 'major-nc-cities']),
    slug: z.string(),
    featured: z.boolean().default(false),
    population: z.number().optional(),
    keyIndustries: z.array(z.string()),
    localAdvantages: z.array(z.string()),
    nearbyAreas: z.array(z.string()),
    marketingTips: z.array(z.string()),
    seoKeywords: z.array(z.string()),
    metaTitle: z.string(),
    metaDescription: z.string(),
    canonicalUrl: z.string().optional(),
    socialImage: z.string().optional(),
  })
});

export const collections = {
  'industries': industries,
  'locations': locations,
};