# 官网

参考页：https://www.dodjoy.com/?slide=5
https://game.qq.com/web202406/#/pc/Latest-news
https://www.honorofkings.com/global-en/
https://ieg.tencent.com/2023/index.html#games

https://www.deviantart.com/sineerie/gallery/62273611/renders

页面结构：顶部√，底部 √

导航：首页 产品信息 最新资讯 加入我们 √

路由拆分(pages结构) √

layout拆分 实现header √

尝试SSG看效果 √

npm run generate 顺利生成SSG静态资源 √

npm run build 顺利构建生产代码 √

首页整屏滚动，底部footer留最后 √

swiper11使用与文档与API查询，swiper9文档

完成 video wz lol pubg √

产品信息 √ 最新资讯 √

header背景 nav选中 √

swiper回到重置 √

header设置 √

生成问题 中文戳与自定义路由 √：

自定义路由下pages所有都会被生成路由,router.options.ts覆写,

generate 生成：最容易报错的步骤，注意根目录必须存在index.vue

部署与笔记

## 页面路由

基于pages新建页面，映射路由，路由规则如下

每一个目录对应一个路由

index.vue匹配根路径，pages/index.vue即匹配根路径

嵌套路由，通过news/news/xx.vue实现

专有NuxtPage组件替代router-view

NuxtLink替代router-link(支持a标签且自动转换路径)

## layouts

## 其他

nuxt3默认基于vite，也支持webpack5

vite的node-sass默认legacy模式调整为modern-compiler模式

通过nuxt module支持windicss， `npm i nuxt-windicss -D`

```
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: [
    'nuxt-windicss',
  ],
})
```
注：其它所有项目模板windicss增加extract,eslint增加exclude,ts的exclude

nuxt generate 生成页面，预渲染静态页

注意components，自定义路由导致所有definePageMeta等失效

## 思考

vercle基于serverless 云服务(云函数)方式模拟实现基于nodejs服务的ssr

单静态资源单域名托管服务（直接托管），思考短域名去映射资源路径：nignx所有短域名/二级域名整个直接映射到资源目录下


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
