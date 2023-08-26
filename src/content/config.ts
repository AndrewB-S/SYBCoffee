import { defineCollection, z } from "astro:content";

const drinksCollection = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    image: z.string(),
  }),
});

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    image: z.string(),
    author: z.string(),
    pubDate: z.date(),
  }),
});

export const collections = {
  drinks: drinksCollection,
  blog: blogCollection,
};
