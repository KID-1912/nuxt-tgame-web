<script lang="ts" setup>
import Header from "@/layouts/Header/Header.vue";
import Footer from "@/layouts/Footer/Footer.vue";
import { swiperPageComponents } from "./_components/SwiperPages/index";
import {
  Swiper,
  SwiperSlide,
  modules as swiperModules,
} from "@/lib/vue-swiper";
import type { SwiperOptions, Swiper as SwiperType } from "swiper/types";

definePageMeta({
  layout: false, // 关闭default布局，自定义布局
});

// swiper
const swiperOptions: SwiperOptions = {
  modules: swiperModules,
  direction: "vertical",
  mousewheel: true,
  slidesOffsetAfter: 200,
  resistanceRatio: 0,
};
const activePageIndex = ref(0);
const onSlideChange = (swiper: SwiperType) => {
  activePageIndex.value = swiper.activeIndex;
};
</script>

<template>
  <NuxtLayout name="default">
    <template #header>
      <Header :class="`active-${activePageIndex}`"></Header>
    </template>
    <div class="wrap">
      <swiper v-bind="swiperOptions" @slideChange="onSlideChange">
        <swiper-slide
          v-for="page in swiperPageComponents"
          #default="{ isActive }"
        >
          <component :is="page" :active="isActive"></component>
        </swiper-slide>
      </swiper>
    </div>
    <template #footer>
      <Footer></Footer>
    </template>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
.wrap {
}

.swiper {
  padding-top: 64px;
  width: 100vw;
  height: 100vh;
}

.default-layout {
  position: relative;
  .header {
    &.active-0 {
      --header-bg-color: #f2be61;
    }
    &.active-1 {
      --header-bg-color: #551ed7;
    }
    &.active-2 {
      --header-bg-color: #68acfa;
    }
  }
  .footer {
    position: absolute;
    width: 100%;
    bottom: 0;
  }
}
</style>
