import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import NetlifyCMS from "astro-netlify-cms";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    react(),
    NetlifyCMS({
      config: {
        backend: {
          name: "git-gateway",
          branch: "main",
        },

        media_folder: "public/assets/drinkImages",
        public_folder: "assets/drinkImages",
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
        ],
      },
    }),
  ],
});
