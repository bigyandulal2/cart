import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sassPlugin from "vite-plugin-sass";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Cartreact/",
  plugins: [react(), sassPlugin()],

  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
});
