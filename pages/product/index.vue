<script lang="ts" setup>
import gameJSON from "@/assets/json/game.json";
type gameItem = {
  cover: string;
  title: string;
  description: string;
  link: string;
};
const gameList: gameItem[] = gameJSON;
</script>

<template>
  <div class="wrap">
    <div class="game-list flex flex-wrap justify-between">
      <div class="game-box" v-for="game in gameList" :key="game.title">
        <a :href="game.link" target="_blank">
          <img :src="game.cover" />
        </a>
        <div class="title">
          <a :href="game.link" target="_blank">{{ game.title }}</a>
        </div>
        <div class="desc">
          <a :href="game.link" target="_blank">{{ game.description }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrap {
  padding: 64px 0;
  background-image: linear-gradient(0deg, #0e0e0e, #292875);
}
.game-list {
  width: 960px;
  margin: 0 auto;
}
.game-box {
  width: 220px;
  margin-top: 20px;
  transition: 0.3s transform ease;
  &:hover {
    transform: translateY(-4%);
  }
  .title {
    color: #ffffff;
    font-size: 14px;
    line-height: 2;
    font-weight: bold;
  }
  .desc {
    color: hsla(0, 0%, 100%, 0.5);
    font-size: 12px;
  }
}
</style>
