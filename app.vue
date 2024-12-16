<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup>
useHead({
  title: "腾讯游戏",
  meta: [
    {
      name: "description",
      content:
        "腾讯游戏成立于2003年，是全球领先的游戏研发和运营商。作为“超级数字场景”理念的倡导者和实践者，腾讯游戏致力于为用户创造高品质数字生活体验，为产业和社会发展创造更多建设性的价值。",
    },
    {
      name: "keywords",
      content:
        "腾讯游戏,Tencent Games,腾讯游戏嘉年华,Tencent Games Carnival,腾讯游戏竞技平台,Tencent Games Arena,腾讯游戏公会,Tencent Games Guild,腾讯游戏爱心联盟,Tencent Games Social Responsibility,腾讯游戏公益,Tencent Games Social Responsibility,腾讯小游戏,腾讯网页游戏,腾讯QQ游戏,QQ小游戏,QQ网页游戏,QQ腾讯游戏,腾讯网游,腾讯网络游戏,腾讯大型网游,腾讯大型网络游戏,腾讯游戏平台,QQ游戏平台",
    },
  ],
});
</script>

<style lang="scss">
@forward "@/assets/styles/global.scss";
</style>
