// 每个组件的入口文件，可以单独 install
import type { App } from "vue";

import Component from "./index.vue";

function install(app: App) {
  app.component("Vue3NumberScroller", Component);
}

Component.install = install;

const Vue3NumberScroller = Component;

export { Vue3NumberScroller };
