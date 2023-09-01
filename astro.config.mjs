import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import NetlifyCMS from "astro-netlify-cms";

// https://astro.build/config
export default defineConfig({
  site: "https://www.sybcoffee.com",
  experimental: {
    assets: true,
  },
  integrations: [
    tailwind(),
    react(),
    NetlifyCMS({
      config: {
        disableIdentityWidgetInjection: true,
        backend: {
          name: "git-gateway",
          branch: "main",
        },
        media_folder: "src/assets/images/coffeeImages/",
        public_folder: "_astro/",
        collections: [
          {
            name: "drinks",
            label: "Drinks",
            folder: "src/content/drinks",
            create: true,
            delete: true,
            fields: [
              { name: "title", widget: "string", label: "Menu Item Name" },
              { name: "image", widget: "image", label: "Image" },
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
