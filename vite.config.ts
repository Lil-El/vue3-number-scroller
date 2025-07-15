/**
 * 作为 lib 库打包时，cssCodeSplit 默认会是 false，所以需要显式设置；
 * 而打包格式为 umd，又开启代码分割，会导致 css 文件无法生成，所以分开配置设置 cssCodeSplit 为 true
 */

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import Components from "unplugin-vue-components/vite";

import type { UserConfig } from "vite";

const baseConfig = {
  plugins: [vue(), tailwindcss(), Components()],
};

// es / cjs 配置
const esConfig: UserConfig = {
  build: {
    cssCodeSplit: true, // build.lib 会默认启用 cssCodeSplit: false；需要显示设置；
    lib: {
      entry: "./src/index.ts",
      // name: "Vue3NumberScroller",
      // fileName: (format) => (format === "es" ? `index.mjs` : `index.${format}.js`),
      // formats: ["es", "umd", "cjs"],
    },
    rollupOptions: {
      external: ["vue"],
      output: [
        {
          format: "es",
          preserveModules: true, // 只在es格式下有效
          preserveModulesRoot: "src",
          entryFileNames: "[name].mjs",
          assetFileNames: (assetInfo) => {
            if (assetInfo.names[0] === "style.css") return "base.css";
            return "[name].css";
          },
          dir: "es",
        },
        {
          format: "commonjs", // 和 cjs 等价
          preserveModules: true,
          preserveModulesRoot: "src",
          entryFileNames: "[name].js",
          assetFileNames: (assetInfo) => {
            if (assetInfo.names[0] === "style.css") return "base.css";
            return "[name].css";
          },
          dir: "lib",
        },
      ],
    },
    emptyOutDir: true,
  },
};

// umd 配置
const umdConfig: UserConfig = {
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "Vue3NumberScroller",
      fileName: (format) => (format === "es" ? `index.mjs` : `index.${format}.js`),
      formats: ["umd"],
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        // name: "Vue3NumberScroller", // 必须为UMD格式指定name
        globals: {
          vue: "Vue",
        },
        dir: "dist",
        assetFileNames: "index.[ext]", // 固定CSS文件名
        inlineDynamicImports: false,
        manualChunks: undefined,
      },
    },
    emptyOutDir: true,
  },
};

export default defineConfig(({ mode }) => {
  return {
    ...baseConfig,
    ...(mode === "es" ? esConfig : umdConfig),
  };
});
