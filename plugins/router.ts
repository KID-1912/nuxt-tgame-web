import { createRouter, createWebHistory } from "vue-router";

// 定义自定义路由
const routes = [
  {
    name: "home",
    path: "/",
    component: () => import("~/pages/home/index.vue"),
  },
  {
    name: "news",
    path: "/news",
    component: () => import("~/pages/news/index.vue"),
  },
  {
    name: "product",
    path: "/product",
    component: () => import("~/pages/product/index.vue"),
  },
];

// 创建 Vue Router 实例
export default defineNuxtPlugin((nuxtApp) => {
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });

  nuxtApp.vueApp.use(router); // 将路由注册到 Nuxt 应用
});
