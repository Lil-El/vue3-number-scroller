import "vue";

declare module "vue" {
  export interface GlobalComponents {
    Vue3NumberScroller: typeof import("@lil-el/vue3-number-scroller")["Vue3NumberScroller"];
  }
}
