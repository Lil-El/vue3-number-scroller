import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss()],
  build: {
    cssCodeSplit: false,
    emptyOutDir: true,
    lib: {
      entry: "index.js",
      formats: ["es"],
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        entryFileNames: "[name].js",
        chunkFileNames: "[name].js",
        assetFileNames: "index.[ext]",
      },
    },
  },
});
