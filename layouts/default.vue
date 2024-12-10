<script setup>
import Header from "./components/Header.vue";
</script>

<template>
  <div class="default-layouts">
    这里是可重用布局
    <Header></Header>
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.default-layouts {
  position: relative;
  height: 100vh;
}
</style>
