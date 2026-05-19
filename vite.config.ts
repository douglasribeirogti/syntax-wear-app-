import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
<<<<<<< HEAD
  plugins: [react(), tailwindcss()],
=======
  plugins: [tailwindcss(), react()],
>>>>>>> 5133ce810d3b5c0a4a86ba892e1c0bdff8f436bb
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
