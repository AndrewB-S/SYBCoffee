import { defineCollection, z } from "astro:content";

const drinksCollection = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      image: z.string(),
    }),
});

const blogCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      image: z.string(),
    }),
});

export const collections = {
  drinks: drinksCollection,
  blog: blogCollection,
};
