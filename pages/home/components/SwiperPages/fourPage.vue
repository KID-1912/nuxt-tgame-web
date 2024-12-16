<script lang="ts" setup>
const props = defineProps({
  active: { type: Boolean, default: false },
});
</script>

<template>
  <div class="full-page" :class="{ animate: props.active }">
    <div class="role-banner">
      <div class="pic-role"></div>
    </div>
    <div class="layer">
      <div class="content">
        <div class="title-en">Join Us</div>
        <h2 class="title">加入我们</h2>
        <div class="desc <2xl:w-32vw">
          <p>与志同道合的伙伴共赴游戏梦想之旅，</p>
          <p>创造无限可能的游戏未来</p>
        </div>
        <a href="https://game.qq.com/web202406/#/pc/Join-us" target="_blank">
          <div class="btn-join">加入我们</div>
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.full-page {
  position: relative;
  height: 100%;
  width: 100%;
  background-position: cover;
  background-image: url("~/assets/images/index/fourPage/bg/gp-bg.jpg");
}

.role-banner {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  .pic-role {
    position: absolute;
    width: 100%;
    height: 100%;
    background-size: auto 96%;
    background-position: right bottom;
    background-repeat: no-repeat;
    background-image: url("~/assets/images/index/fourPage/img/role.png");
  }
}

.layer {
  position: relative;
  height: 100%;
  z-index: 9;
}

.content {
  position: absolute;
  top: 10%;
  left: 20%;
  .title,
  .title-en {
    font-size: 48px;
    font-weight: bold;
    line-height: 60px;
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
  }
  .btn-join {
    width: 120px;
    margin-top: 24px;
    color: #3d6898;
    font-size: 18px;
    line-height: 42px;
    text-align: center;
    letter-spacing: 1px;
    border: 2px solid #3d6898;
    transition: all 0.3s;
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
    .btn-join {
      opacity: 0;
      animation: slide-in 0.6s 1000ms ease-in-out forwards;
    }
  }
  .pic-role {
    animation: float-in 1s ease-in-out forwards;
  }
}

// 动画
@keyframes slide-in {
  0% {
    transform: translateY(-50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0%);
    opacity: 1;
  }
}
@keyframes float-in {
  0% {
    transform: translateX(-40px);
    opacity: 0.78;
  }
  100% {
    transform: translate(0, 0);
    opacity: 1;
  }
}
</style>
