/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
    css: true, // Adicione isso se estiver testando componentes com Tailwind
    coverage: {
      provider: "v8", // ou 'istanbul'
      reporter: ["text", "json", "html"],
    },
  },
});
