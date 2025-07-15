// 每个组件的入口文件，可以单独 install
import type { App } from "vue";

import Vue3NumberScroller from "./index.vue";

export function install(app: App) {
  app.component("Vue3NumberScroller", Vue3NumberScroller);
}

export { Vue3NumberScroller };
