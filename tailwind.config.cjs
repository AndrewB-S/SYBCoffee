/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        orangered: "#D55E2D",
        concrete: "#D8D8D6",
        royal: "#2F5D8C",
        slate: "#A0B3C1",
        offwhite: "#F9F9F9",
        black: "#000000",
      },
    },
  },
  plugins: [require("daisyui")],
};
