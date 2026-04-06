import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    image: z.string().optional(),
    video: z.string().optional(),
    gallery: z.array(z.string()).optional(),
    prevPost: z.string().nullable().optional(),
    nextPost: z.string().nullable().optional(),
  }),
});

export const collections = { posts };
