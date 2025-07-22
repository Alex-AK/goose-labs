import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const project = defineCollection({
  loader: glob({ base: './src/content/project', pattern: '**/*.{md,mdx}' }),
  schema: () =>
    z.object({
      title: z.string(),
      description: z.string(),
      status: z.enum(['Ongoing', 'Completed', 'Archived']).default('Ongoing'),
      date: z.coerce.date(),
      stack: z.array(z.string()),
      github: z.string().url().optional(),
    }),
});

export const collections = { project };
