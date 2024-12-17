# 理解Nuxt——基于Nuxt SSG纯前端实现游戏官网(SEO)

## 理解Nuxt

Nuxt 想干什么？

评价Nuxt，胃口很大，混乱

我们能用它做什么？

2件事

统一目录结构

不依赖服务端数据渲染，SSG，以vue的方式开发页面，且伪静态
不够纯粹



几种特性

渲染模式

水合

SEO

## SSG

# Nuxt

[nuxt官网](https://nuxt.com/) [nuxt中文官网](https://nuxt.com.cn/)

Nuxt中web全栈开发 = 前端开发 + 现代SSR(水合) + 基于nodejs服务端开发

**特性**

为**前端开发**提供的特性：

- 基于文件目录(/pages)的自动路由
  
- 自动导入component/utils/composables目录，支持拓展
  
- vite(默认)/webpack双支持的，配置好的构建工具
  
- TS类型支持
  

为**现代SSR**提供的特性：

- useFetch 等相关数据获取
  
- 内置服务端渲染（无需配置服务器与手动注入数据）
  

为**基于nodejs服务**端提供的特性：

- 支持 `/server` 目录编写API层与中间件（基于Nitro服务器引擎）
  
- nuxt前端开发部分可通过 `$fetch` 直接调用server下API
  

**其它**特性：

- SSG： 静态网站生成，实现静态托管