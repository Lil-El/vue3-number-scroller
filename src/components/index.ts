import type { App } from "vue";
import * as NumberScroller from "./vue3-number-scroller";
import * as HelloWorld from "./hello-world";

export const components = {
  NumberScroller,
  HelloWorld,
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
