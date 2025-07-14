# vue3-number-scroller

数字滚动组件

![npm version](https://img.shields.io/npm/v/@lil-el/vue3-number-scroller?color=green)  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## install

```bash
pnpm i vue3-number-scroller
```

## usage

### basic

```html
<template>
  <h2>Number</h2>
  <vue3-number-scroller :num="value" />
  <el-input v-model="value" />

  <h2>String</h2>
  <vue3-number-scroller :num="'0097.11'" />
</template>

<script setup>
  const value = ref(0);
</script>
```

### custom

```html
<template>
  <vue3-number-scroller :num="value" :duration="1200" :height="32" :back-style="style" />
  <el-input v-model="value" />
</template>

<script setup>
  const value = ref(0);

  const style = {
    width: '20px',
    color: 'white',
    fontSize: '20px',
    backgroundColor: 'white',
    borderRight: '1px solid white'
  };
</script>
```

## props

| name      | type             | default | description  |
| --------- | ---------------- | ------- | ------------ |
| num       | number \| string | 0       | 数字         |
| duration  | number           | 1000    | 滚动时长     |
| height    | number           | 16      | 高度、行高   |
| backStyle | CSSProperties    | { }     | 单个数字样式 |
