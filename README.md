# action-VitePress

## VitePress 是什么？
VitePress 是一个静态站点生成器 (SSG)，专为构建快速、以内容为中心的站点而设计。简而言之，VitePress 获取用 Markdown 编写的内容，对其应用主题，并生成可以轻松部署到任何地方的静态 HTML 页面。

VitePress 一般用来做在线文档，对零基础小白并不友好，网络上资料也相对较少，使用方法可见 [官方文档](https://vitepress.dev/zh/guide/getting-started)。

## 启动并运行

- 本地预览：`npm run docs:dev`
- 渲染输出：`npm run docs:build`

```BASH
{
  ...
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:preview": "vitepress preview docs"
  },
  ...
}
```

## 文件结构

```BASH
.
├─ docs //项目根目录
│  ├─ .vitepress    //配置目录
│  │  └─ config.js  //网站配置
│  │  └─ public  //该目录下的文件直接复制使用
│  │  └─ theme  //主题自定义
│  │  └─ dist  //渲染后的HTML目录
│  │  └─ cache  //缓存目录
│  └─ Examples  //内容源
│  │  └─ api-examples.md
│  │  └─ markdown-examples.md
│  └─ hello //内容源
│  │  └─ Hello-Test.md
│  └─ index.md  //首页内容
└─ package.json //依赖包信息
└─ node_modules //npm依赖包目录
```
