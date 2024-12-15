<script lang="ts" setup>
// banner 切换
const bannerActivatedIndex = ref<number>(1);
const bannerMaxIndex: number = 4;
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
  }, 3600);
};
onMounted(handleNextBanner);
</script>

<template>
  <div class="full-page">
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
        <div class="title-en">Team Vision</div>
        <h2 class="title">团队愿景</h2>
        <div class="desc <2xl:w-32vw">
          <p>
            作为“超级数字场景”理念的倡导者和实践者，腾讯游戏致力于为用户创造高品质数字生活体验，
          </p>
          <p>为产业和社会发展创造更多建设性的价值。</p>
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
  background-size: 100% auto;
  background-position: top;
  background-repeat: no-repeat;
  background-image: url("~/assets/images/index/thirdPage/bg/lol-bg-top.webp"),
    linear-gradient(43deg, #551ed7 20%, #6e87ff 60%);
}

.role-banner {
  position: absolute;
  height: 100%;
  width: 100%;
  right: 0;
  top: 0;
  .pic-role {
    position: absolute;
    width: 100%;
    height: 100%;
    background-size: auto 100%;
    background-position: right;
    background-repeat: no-repeat;
    &:nth-child(1) {
      background-image: url("~/assets/images/index/thirdPage/img/role1.png");
    }
    &:nth-child(2) {
      background-image: url("~/assets/images/index/thirdPage/img/role2.png");
    }
    &:nth-child(3) {
      background-image: url("~/assets/images/index/thirdPage/img/role3.png");
    }
    &:nth-child(4) {
      background-image: url("~/assets/images/index/thirdPage/img/role4.png");
    }
  }
}

.layer {
  position: relative;
  height: 100%;
  z-index: 9;
}

.content {
  position: absolute;
  bottom: 20%;
  left: 2%;
  .title,
  .title-en {
    font-size: 48px;
    font-weight: bold;
    line-height: 60px;
    text-align: right;
  }
  .title-en {
    color: rgb(256, 256, 256, 0.7);
  }
  .title {
    color: #ffffff;
  }
  .desc {
    max-width: 560px;
    margin-top: 60px;
    color: #ffffff;
    font-size: 20px;
    line-height: 40px;
    text-align: right;
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
    animation: slide-left-in 0.8s ease-in-out forwards;
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
    transform: translateX(-100px);
    opacity: 0;
  }
  100% {
    transform: translateX(0%);
    opacity: 1;
  }
}

@keyframes slide-left-in {
  0% {
    transform: translateX(100px);
    opacity: 0.78;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
