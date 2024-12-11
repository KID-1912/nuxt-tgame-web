<script setup>
import Header from "./Header/Header.vue";
</script>

<template>
  <div class="default-layouts">
    <Header></Header>
    这里是可重用布局
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.default-layouts {
  position: relative;
  height: 100vh;
  padding-top: 74px;
  background-color: #85d297;
}
</style>
