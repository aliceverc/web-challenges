// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "@nabla/vite-plugin-eslint";  // ← swapped here
import svgr from "vite-plugin-svgr";

export default defineConfig(() => {
  return {
    build: {
      outDir: "build",
    },
    plugins: [react(), eslint(), svgr()],
    server: {
      open: true,
      port: 3000,
    },
    define: {
      "process.env": {},
    },
  };
});
