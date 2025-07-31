import type { CSSProperties } from "vue";

export interface Vue3NumberScrollerProps {
  num?: number | string;
  duration?: number;
  height?: number;
  backStyle?: CSSProperties;
}

export interface DigitType {
  digit: number;
  initial: number;
  offset: number;
}
