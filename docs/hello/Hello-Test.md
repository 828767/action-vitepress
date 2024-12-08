---
title: "测试 Hello"
---
这是篇测试文档.

## 自动侧边栏插件
### `vite-plugin-vitepress-auto-sidebar`
能自动生成侧边栏，但只会按单个文件夹生成侧边，不能将多个文件夹自动归类生成侧边栏导航。
使用方法可见[别人写的教程][auto-sidebar]，比作者写得详细。

### `vite-plugin-vitepress-auto-nav`
这个插件别人推荐的，但实测不生效，各种问题，官方根本相当于没文档，作者自己的网站挂的[教程][auto-nav]照做也没成功，不知道为何。

## 二级标题
离离原上草，一岁一枯荣。
野火烧不尽，春风吹又生。
远芳侵古道，晴翠接荒城。
又送王孙去，萋萋满别情。


# 一级标题
`vite-plugin-vitepress-auto-sidebar` 插件配置：
- `titleFromFile: true`：将提取 MarkDown 文档中的 `第1个一级标题` 作为侧边导航
- `titleFromFile: false`：将使用 MarkDown 文档的 `文件名` 作为侧边导航
> 如果 MarkDown 文档中不存在 `一级标题` ，那么将使用 `文件名` 作为侧边导航


[auto-nav]: https://xaviw.github.io/XaviDocs/%E5%B7%A5%E5%85%B7%E7%B3%BB%E5%88%97/VitePress%E6%90%AD%E5%BB%BA/%E8%87%AA%E5%8A%A8%E7%94%9F%E6%88%90%E7%9B%AE%E5%BD%95.html "自动侧边和导航栏"
[auto-sidebar]: https://github.com/QC2168/vite-plugin-vitepress-auto-sidebar "自动生成侧边栏"