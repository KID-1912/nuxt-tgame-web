<script lang="ts" setup>
import dayjs from "dayjs";
type News = {
  com_cover: string;
  com_title: string;
  com_url: string;
  com_tag_info_list: { name: string; id: number }[];
  com_update_time: string;
  com_biz: number;
};
type NewsResponseData = {
  data: { items: News[] };
};

// 资讯列表
let newsList: News[] = [];
const api_url: string = "https://apps.game.qq.com/cmc/common_list";
const api_params = {
  com_biz: 191,
  com_type: 1,
  source: "gameqq",
  sortby: "com_idx_time",
  sign: "2155aa37981020f90e717be4dcf731d6",
  t: 1734867706,
  pagesize: 18,
  page: 1,
  com_tag_id: 134445,
};
try {
  const { data } = await useFetch<NewsResponseData>(api_url, {
    query: api_params,
  });
  newsList = data.value?.data.items || [];
} catch (error) {
  console.warn(error);
}
</script>

<template>
  <div class="wrap">
    <div class="news-list flex flex-wrap justify-between">
      <div v-for="news in newsList" :key="news.com_biz" class="news-box">
        <div class="news-cover">
          <a :href="news.com_url" target="_blank">
            <img class="picture" :src="news.com_cover" :alt="news.com_title" />
          </a>
        </div>
        <div class="my-12px">
          <a :href="news.com_url" target="_blank">
            <div class="title">{{ news.com_title }}</div>
          </a>
        </div>
        <div class="flex items-center">
          <div class="tag">{{ news.com_tag_info_list[0]?.name }}</div>
          <div class="date ml-12px">
            {{ dayjs(news.com_update_time, "YYYY-MM-DD").format("YYYY年MM月") }}
          </div>
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

.news-list {
  width: 1200px;
  margin: 0 auto;
}

.news-box {
  width: 367px;
  margin-top: 24px;
  .news-cover {
    width: 100%;
    height: 172px;
    margin-top: 24px;
    border-radius: 8px;
    overflow: hidden;
    .picture {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }
    &:hover .picture {
      transform: scale(1.2);
    }
  }
  .title {
    color: #ffffff;
    font-size: 20px;
    line-height: 1.2;
  }
  .tag {
    min-width: 76px;
    padding: 2px 10px;
    color: #999ab0;
    border-radius: 4px;
    background-color: #31346c;
  }
  .date {
    color: #7d7e8c;
    line-height: 1.2;
  }
}
</style>
