import "vue";

declare module "vue" {
  export interface GlobalComponents {
    Vue3NumberScroller: typeof import("./src/components/vue3-number-scroller/index.vue")["default"];
  }
}
