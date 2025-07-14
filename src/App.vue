<template>
  <NumberScroller class="mt-4" :num="numStr" />
  <NumberScroller class="mt-4" :num="num" />
  <NumberScroller
    class="mt-4"
    :num="num"
    :duration="1000"
    :height="32"
    :back-style="{
      background: 'red',
      color: 'white',
      width: '20px',
      borderRight: '1px solid white',
    }"
  />

  <div class="border border-gray-400 w-50 mt-4">
    <input type="text" id="input" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import NumberScroller from "./components/vue3-number-scroller.vue";

const num = ref(0);

const numStr = ref("0");

onMounted(() => {
  const input = document.getElementById("input") as HTMLInputElement;
  input.addEventListener("input", () => {
    num.value = parseFloat(input.value);
    numStr.value = input.value;
  });
});
</script>
