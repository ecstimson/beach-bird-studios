import { defineCollection, z } from 'astro:content';

const industries = defineCollection({
  schema: z.object({
    title: z.string(),
    category: z.enum(['home-services', 'medical', 'professional', 'specialty']),
    description: z.string(),
    icon: z.string(),
    services: z.array(z.string()),
    targetAudience: z.string(),
    keyBenefits: z.array(z.string()),
    priceRange: z.string(),
    timeline: z.string(),
  }),
});

const locations = defineCollection({
  schema: z.object({
    city: z.string(),
    state: z.string(),
    region: z.enum(['coastal', 'piedmont', 'mountains', 'major-city']),
    description: z.string(),
    population: z.string(),
    keyIndustries: z.array(z.string()),
    serviceAreas: z.array(z.string()),
    competitionLevel: z.enum(['low', 'medium', 'high']),
  }),
});

export const collections = {
  industries,
  locations,
};