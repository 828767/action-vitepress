---
title: "测试 Hello"
---
这是篇测试文档，使用 `vite-plugin-vitepress-auto-sidebar` 自动生成侧边导航

## 二级标题
离离原上草，一岁一枯荣。
野火烧不尽，春风吹又生。
远芳侵古道，晴翠接荒城。
又送王孙去，萋萋满别情。


# 一级标题

- `titleFromFile: true`：将提取 MarkDown 文档中的 `第1个一级标题` 作为侧边导航
- `titleFromFile: false`：将使用 MarkDown 文档的 `文件名` 作为侧边导航
> 如果 MarkDown 文档中不存在 `一级标题` ，那么将使用 `文件名` 作为侧边导航