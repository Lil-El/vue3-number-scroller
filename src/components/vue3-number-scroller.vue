<template>
  <div class="flex h-4 overflow-hidden" :style="{ height: height + 'px' }">
    <template v-for="(digits, index) in [integerDigits, decimalDigits]">
      <div v-if="index === 1 && digits.length" class="text-center" :style="mergedStyle">.</div>
      <div v-for="(item, index) in digits" :key="index" class="text-center" :style="mergedStyle">
        <div
          class="flex flex-col transition-transform ease-in-out animate"
          :style="{
            '--tw-duration': duration + 'ms',
            '--initial-translate': `${item.initial}px`,
            translate: `0 ${item.offset}px`,
          }"
        >
          <span v-for="(_, i) in 10">{{ i }}</span>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed, toRefs } from "vue";
import type { CSSProperties } from "vue";

interface Props {
  num?: number | string;
  duration?: number;
  height?: number;
  backStyle?: CSSProperties;
}

interface DigitType {
  digit: number;
  initial: number;
  offset: number;
}

const props = withDefaults(defineProps<Props>(), {
  num: 0,
  duration: 1000,
  height: 16,
  backStyle: () => ({}),
});

const { num, duration, height, backStyle } = toRefs(props);

const mergedStyle = computed<CSSProperties>(() => ({
  height: `${height.value}px`,
  lineHeight: `${height.value}px`,
  ...backStyle.value,
}));

const integerDigits = computed<DigitType[]>((oldValue) => {
  const [integer] = num.value.toString().split(".");
  return patchDigits(integer.split(""), oldValue!);
});

const decimalDigits = computed<DigitType[]>((oldValue) => {
  const [, decimal] = num.value.toString().split(".");
  return patchDigits(decimal?.split(""), oldValue!);
});

function patchDigits(digits: string[], patchedDigits: DigitType[]): DigitType[] {
  if (!digits) return [];
  return digits.map((d, i) => ({
    digit: patchedDigits?.[i]?.digit ?? ~~d,
    initial: patchedDigits?.[i]?.initial ?? ~~d * -1 * height.value,
    offset: patchedDigits?.[i] ? -1 * height.value * (~~d - patchedDigits[i].digit) : 0,
  }));
}
</script>

<style scoped>
.animate {
  animation: translateY var(--tw-duration) ease-in-out forwards;
}

@keyframes translateY {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(var(--initial-translate));
  }
}
</style>
