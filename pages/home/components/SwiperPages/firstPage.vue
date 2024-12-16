<script setup></script>

<template>
  <div class="full-page">
    <video
      class="video-player"
      src="@/assets/media/video/index-layer.mp4"
      muted
      autoplay
      loop
    ></video>
    <div class="layer">
      <div class="slogan"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.full-page {
  position: relative;
  height: 100%;
  width: 100%;
}
.video-player {
  position: absolute;
  width: 100%;
  height: 100vh;
  bottom: 0;
  object-fit: cover;
}
.layer {
  position: relative;
  height: 100%;
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.9),
    transparent 40%
  );
  .slogan {
    position: absolute;
    width: 592px;
    height: 162px;
    top: 40%;
    left: 50%;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url("~/assets/images/index/firstPage/slogan.webp");
    transform: translate(-50%, -50%);
  }
}
</style>
