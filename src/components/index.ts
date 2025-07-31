import type { App } from "vue";
import { Vue3NumberScroller } from "./vue3-number-scroller";

const components = {
  Vue3NumberScroller,
};

export function installAll(app: App) {
  Object.values(components).forEach((comp) => {
    if ("install" in comp) {
      comp.install(app);
    } else {
      console.warn(`Component ${comp} has no install method`);
    }
  });
}

export { Vue3NumberScroller };
