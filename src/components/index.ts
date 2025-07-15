import type { App } from "vue";
import * as NumberScroller from "./vue3-number-scroller";

export const components = {
  NumberScroller,
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
