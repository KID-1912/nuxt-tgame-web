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
        <NuxtLink class="nav-link" to="/about-us">加入我们</NuxtLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  position: absolute;
  padding: 0 120px;
  top: 0;
  left: 0;
  width: 100%;
  height: 74px;
}

.logo {
  background-size: cover;
  background-image: url("~/assets/images/logo/logo.webp");
  text-indent: -999px;
  .logo-link {
    display: block;
    width: 149px;
    height: 74px;
  }
}

.tabs-nav {
  color: #ffffff;
  .tab-item {
    position: relative;
    & + .tab-item {
      margin-left: 48px;
    }
    .nav-link {
      display: block;
      padding: 6px 2px;
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
        #ffffff,
        #ffffff 75%,
        transparent 75%
      );
      transition: 0.6s width;
    }
    &:hover::after {
      width: 100%;
    }
  }
}
</style>
