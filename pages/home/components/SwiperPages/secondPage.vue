<script lang="ts" setup>
const props = defineProps({
  active: { type: Boolean, default: false },
});

// banner 切换
const bannerActivatedIndex = ref<number>(1);
const bannerMaxIndex: number = 5;
let nextBannerTimer: NodeJS.Timeout | undefined;
const handleNextBanner = () => {
  if (nextBannerTimer) return;
  nextBannerTimer = setTimeout(() => {
    nextBannerTimer = undefined;
    if (bannerActivatedIndex.value === bannerMaxIndex) {
      bannerActivatedIndex.value = 1;
      return;
    }
    bannerActivatedIndex.value += 1;
  }, 3200);
};

watch(
  () => props.active,
  () => {
    if (props.active) {
      handleNextBanner();
    } else {
      bannerActivatedIndex.value = 1;
      nextBannerTimer && clearTimeout(nextBannerTimer);
      nextBannerTimer = undefined;
    }
  }
);
</script>

<template>
  <div class="full-page" :class="{ animate: props.active }">
    <div class="role-banner">
      <transition-group name="fade" @after-leave="handleNextBanner">
        <div
          class="pic-role"
          v-for="index in bannerMaxIndex"
          v-show="index === bannerActivatedIndex"
          :key="index"
        ></div>
      </transition-group>
    </div>
    <div class="layer">
      <div class="content">
        <div class="title-en">Tencent Game</div>
        <h2 class="title">腾讯游戏</h2>
        <div class="desc <2xl:w-32vw">
          <p>腾讯游戏成立于2003年，是全球领先的游戏开发商和运营商。</p>
          <p>
            腾讯游戏希望从游戏最本质的体验和精神出发，以快乐的基因和不变的初心为原点，为游戏赋予更多元的价值和意义。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.full-page {
  position: relative;
  height: 100%;
  width: 100%;
  background-size: auto 80%, cover;
  background-position: left, center;
  background-repeat: no-repeat;
  background-color: #fff;
  background-image: url("~/assets/images/index/secondPage/bg/pvp-logo-bg.png"),
    url("~/assets/images/index/secondPage/bg/pvp-bg.webp");
}

.role-banner {
  position: absolute;
  height: 100%;
  width: 100%;
  .pic-role {
    position: absolute;
    width: 100%;
    height: 100%;
    background-size: auto 100%;
    background-position: left bottom;
    background-repeat: no-repeat;
    &:nth-child(1) {
      background-image: url("~/assets/images/index/secondPage/img/role1.png");
    }
    &:nth-child(2) {
      background-image: url("~/assets/images/index/secondPage/img/role2.png");
    }
    &:nth-child(3) {
      background-image: url("~/assets/images/index/secondPage/img/role3.png");
    }
    &:nth-child(4) {
      background-image: url("~/assets/images/index/secondPage/img/role4.png");
    }
    &:nth-child(5) {
      background-image: url("~/assets/images/index/secondPage/img/role5.png");
    }
  }
}

.layer {
  position: relative;
  height: 100%;
  background-size: 120% 100%;
  background-position: left bottom;
  background-repeat: no-repeat;
  background-image: url("~/assets/images/index/secondPage/bg/pvp-gold-bg.png");
  z-index: 9;
}

.content {
  position: absolute;
  top: 10%;
  right: 2%;
  .title,
  .title-en {
    font-size: 48px;
    font-weight: bold;
    line-height: 60px;
  }
  .title-en {
    color: rgb(242, 190, 97, 0.7);
  }
  .title {
    color: #2c2c2c;
  }
  .desc {
    max-width: 560px;
    margin-top: 60px;
    color: #353434;
    font-size: 20px;
    line-height: 40px;
  }
}

.full-page.animate {
  .content {
    .title,
    .title-en {
      opacity: 0;
      animation: slide-in 1s 400ms ease-in-out forwards;
    }
    .desc {
      opacity: 0;
      animation: slide-in 0.8s 800ms ease-in-out forwards;
    }
  }
  .role-banner {
    animation: slide-right-in 0.8s ease-in-out forwards;
  }
}

// 动画
.fade-enter-active,
.fade-leave-active {
  transition: 0.5s opacity ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@keyframes slide-in {
  0% {
    transform: translateX(100px);
    opacity: 0;
  }
  100% {
    transform: translateX(0%);
    opacity: 1;
  }
}

@keyframes slide-right-in {
  0% {
    transform: translateX(-100px);
    opacity: 0.78;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
