import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sassPlugin from "vite-plugin-sass";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sassPlugin(), // Add Sass plugin
  ],
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
});
