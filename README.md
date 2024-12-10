# 官网

参考页：https://www.dodjoy.com/?slide=5
https://game.qq.com/web202406/#/pc/Latest-news

页面结构：顶部，底部

导航：首页 产品信息 最新资讯 加入我们

路由拆分(pages结构)

layout拆分

首页滚动

## 页面路由

基于pages新建页面，映射路由，路由规则如下

每一个目录对应一个路由

index.vue匹配根路径，pages/index.vue即匹配根路径

嵌套路由，通过news/news/xx.vue实现

专有NuxtPage组件替代router-view

## layouts

## 其他

nuxt3默认基于vite，也支持webpack5

vite的node-sass默认legacy模式调整为modern模式

# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build
```

Locally preview production build:

```bash
# npm
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
