import { installAll } from "./components/index";
import { components } from "./components/index";

export default {
  install: installAll,
  ...components,
};

export * from "./components/index";
