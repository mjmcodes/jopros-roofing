/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
   theme: {
      extend: {
         colors: {
            primary: "#19679a",
            secondary: "#ceb563",
         },
         fontFamily: {
            heading: ["Ubuntu", "sans-serif"],
         },
      },
   },
   plugins: [],
};
