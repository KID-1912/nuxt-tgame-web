<script setup></script>

<template>
  <div class="header flex justify-between items-center">
    <!-- logo -->
    <div class="logo">
      <a class="logo-link" href="/news" title="腾讯游戏">腾讯游戏</a>
    </div>
    <!-- 网站导航 -->
    <div class="tabs-nav flex">
      <div class="tab-item">
        <NuxtLink class="nav-link" to="/">首页</NuxtLink>
      </div>
      <div class="tab-item">
        <NuxtLink class="nav-link" to="/product">产品信息</NuxtLink>
      </div>
      <div class="tab-item">
        <NuxtLink class="nav-link" to="/news">最新资讯</NuxtLink>
      </div>
      <div class="tab-item">
        <a
          class="nav-link"
          href="https://game.qq.com/web202406/#/pc/Join-us"
          target="_blank"
          >加入我们</a
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  --header-text-color: #ffffff;
  --header-bg-color: transparent;
  position: fixed;
  padding: 0 120px;
  top: 0;
  left: 0;
  width: 100%;
  height: 64px;
  color: var(--header-text-color);
  background-color: var(--header-bg-color);
  z-index: 99;
}

.logo {
  background-size: cover;
  background-image: url("~/assets/images/logo/logo.webp");
  text-indent: -999px;
  .logo-link {
    display: block;
    width: 128px;
    height: 64px;
  }
}

.tabs-nav {
  .tab-item {
    position: relative;
    & + .tab-item {
      margin-left: 48px;
    }
    .nav-link {
      display: block;
      padding: 6px 2px;
      &.router-link-active {
        font-weight: bold;
      }
      &::after {
        position: absolute;
        content: "";
        width: 0;
        height: 2px;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 1px;
        background-image: linear-gradient(
          to top,
          currentColor,
          currentColor 80%,
          transparent 80%
        );
        transition: 0.6s width;
      }
      &:hover::after {
        width: 100%;
      }
    }
  }
}
</style>
