import "./style.css";

import { installAll, components } from "./components/index";

export default {
  install: installAll,
  ...components,
};

export * from "./components/index";
