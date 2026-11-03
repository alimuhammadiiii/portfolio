import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  // Project site on GitHub Pages: https://alimuhammadiiii.github.io/ali-muhammadi-portfolio/
  base: "/ali-muhammadi-portfolio",
  plugins: [react(), tailwindcss()],
});

