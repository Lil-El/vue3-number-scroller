import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import Components from "unplugin-vue-components/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    Components({
      dts: "src/components.d.ts",
    }),
  ],
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "Vue3NumberScroller",
      fileName: (format) => (format === "es" ? `index.mjs` : `index.${format}.js`),
      formats: ["es", "umd", "cjs"],
    },
    rollupOptions: {
      external: ["vue"],
      output: [
        {
          format: "es",
          preserveModules: true, // 只在es格式下有效
          preserveModulesRoot: "src",
          entryFileNames: "[name].mjs",
          dir: "es",
        },
        {
          format: "umd",
          name: "Vue3NumberScroller", // 必须为UMD格式指定name
          globals: {
            vue: "Vue",
          },
          inlineDynamicImports: true, // umd 格式生效
          dir: "dist",
        },
        {
          format: "commonjs", // 和 cjs 等价
          preserveModules: true,
          preserveModulesRoot: "src",
          entryFileNames: "[name].js",
          dir: "lib",
        },
      ],
    },
    emptyOutDir: true,
  },
});
