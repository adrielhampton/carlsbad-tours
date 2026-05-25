import { defineCollection, z } from 'astro:content';

const baseSchema = z.object({
  title:       z.string(),
  description: z.string(),
  pubDate:     z.date().optional(),
  updatedDate: z.date().optional(),
  heroImage:   z.string().optional(),
  draft:       z.boolean().default(false),
  tags:        z.array(z.string()).default([]),
  // Schema.org / AI citation helpers
  faqItems:    z.array(z.object({
    question: z.string(),
    answer:   z.string(),
  })).optional(),
});

export const collections = {
  places:  defineCollection({ type: 'content', schema: baseSchema.extend({
    locationType: z.enum(['lagoon','preserve','coastline','tidepools','trail']).optional(),
    birdCount:    z.number().optional(),
    acres:        z.number().optional(),
  }) }),
  wildlife: defineCollection({ type: 'content', schema: baseSchema.extend({
    wildlifeType: z.enum(['birds','marine','plants','mammals','insects']).optional(),
    habitat:      z.array(z.string()).default([]),
  }) }),
  seasons: defineCollection({ type: 'content', schema: baseSchema.extend({
    season:       z.enum(['spring','summer','fall','winter','evergreen']).optional(),
    months:       z.array(z.string()).default([]),
  }) }),
  guides:  defineCollection({ type: 'content', schema: baseSchema.extend({
    guideType:    z.enum(['family','birding','tidepools','gear','audio']).optional(),
    difficulty:   z.enum(['easy','moderate','challenging']).optional(),
  }) }),
};
