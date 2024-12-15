<script lang="ts" setup>
type News = {
  com_cover: string;
  com_title: string;
  com_tag_info_list: { name: string; id: number }[];
  com_update_time: string;
};
type NewsResponseData = {
  data: { items: News[] };
};

let newsList: News[];
const api_url: string =
  "https://apps.game.qq.com/cmc/common_list?com_biz=191&com_type=1&source=gameqq&sortby=com_idx_time&sign=3a2ebf8cdc30f7a535f1fe66f321c01e&t=1734278860&pagesize=18&page=1&com_tag_id=134445";
const { data } = await useFetch<NewsResponseData>(api_url);
console.log(data.value?.data.items);
</script>

<template>
  <div class="">news</div>
</template>

<style lang="" scoped></style>
