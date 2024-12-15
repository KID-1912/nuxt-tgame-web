<script setup>
import Header from "@/layouts/Header/Header.vue";
import Footer from "@/layouts/Footer/Footer.vue";
import { swiperPageComponents } from "./_components/SwiperPages";
import {
  Swiper,
  SwiperSlide,
  modules as swiperModules,
} from "@/lib/vue-swiper";

definePageMeta({
  layout: false, // 关闭default布局，自定义布局
});

const swiperOptions = {
  modules: swiperModules,
  direction: "vertical",
  mousewheel: true,
  slidesOffsetAfter: 200,
};
</script>

<template>
  <NuxtLayout name="default">
    <template #header>
      <Header></Header>
    </template>
    <div class="wrap">
      <swiper v-bind="swiperOptions">
        <swiper-slide
          v-for="page in swiperPageComponents"
          #default="{ isActive }"
        >
          <component :is="page" :class="{ animate: isActive }"></component>
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
  position: relative;
}

.swiper {
  width: 100vw;
  height: 100vh;
}

.default-layout {
  position: relative;
  .footer {
    position: absolute;
    width: 100%;
    bottom: 0;
  }
}
</style>
