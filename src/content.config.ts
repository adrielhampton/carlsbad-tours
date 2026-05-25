import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const sharedFields = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  heroImage: z.string().optional(),
  heroImageAlt: z.string().optional(),
  tags: z.array(z.string()).default([]),
  draft: z.boolean().default(false),
  featured: z.boolean().default(false),
  author: z.string().default('Adriel Hampton'),
  authorCredential: z.string().default('California Naturalist, Certified 2026'),
});

const places = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/places' }),
  schema: sharedFields.extend({
    location: z.string().optional(),
    habitat: z.array(z.string()).default([]),
    birdSpeciesCount: z.number().optional(),
    acreage: z.number().optional(),
    accessInfo: z.string().optional(),
    inatBoundingBox: z.object({
      nelat: z.number(),
      nelng: z.number(),
      swlat: z.number(),
      swlng: z.number(),
    }).optional(),
  }),
});

const wildlife = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/wildlife' }),
  schema: sharedFields.extend({
    taxon: z.string().optional(),
    habitat: z.array(z.string()).default([]),
    seasonalPeak: z.string().optional(),
    relatedPlaces: z.array(z.string()).default([]),
  }),
});

const seasons = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/seasons' }),
  schema: sharedFields.extend({
    season: z.enum(['spring', 'summer', 'fall', 'winter']).optional(),
    month: z.string().optional(),
    highlights: z.array(z.string()).default([]),
    relatedPlaces: z.array(z.string()).default([]),
  }),
});

const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: sharedFields.extend({
    guideType: z.enum(['family', 'birding', 'tide-pooling', 'gear', 'audio', 'general']).default('general'),
    difficulty: z.enum(['easy', 'moderate', 'challenging']).optional(),
    duration: z.string().optional(),
    relatedPlaces: z.array(z.string()).default([]),
  }),
});

export const collections = { places, wildlife, seasons, guides };
