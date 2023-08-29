import { defineConfig, sharpImageService } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import NetlifyCMS from "astro-netlify-cms";

// https://astro.build/config
export default defineConfig({
  experimental: {
    assets: true,
  },
  image: {
    service: sharpImageService(),
  },
  integrations: [
    tailwind(),
    react(),
    NetlifyCMS({
      config: {
        backend: {
          name: "git-gateway",
          branch: "main",
        },

        media_folder: "./src/assets/images/coffeeImages/",
        public_folder: "dist/_astro",
        collections: [
          {
            name: "drinks",
            label: "Drinks",
            folder: "src/content/drinks",
            create: true,
            delete: true,
            fields: [
              { name: "title", widget: "string", label: "Drink Name" },
              { name: "body", widget: "markdown", label: "Drink Description" },
            ],
          },
          {
            name: "blog",
            label: "Blog Posts",
            folder: "src/content/blog",
            create: true,
            delete: true,
            fields: [
              { name: "title", widget: "string", label: "Post Title" },
              {
                name: "image",
                widget: "image",
                label: "Blog Post Image",
                required: false,
              },
              { name: "body", widget: "markdown", label: "Post Content" },
            ],
          },
        ],
      },
    }),
  ],
});
