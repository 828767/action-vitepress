import { defineConfig } from 'vitepress';
import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'My Awesome Project',
  description: 'A VitePress Site',
  base: '/action-vitepress/', //站点非部署在根 URL 上
  locales: { //多语言支持
    root: { //默认语言
      label: 'English',
      lang: 'en'
    },
    zh: {
      label: '中文',
      lang: 'zh', // 可选，将作为 `lang` 属性添加到 `html` 标签中
      link: '/zh/guide' // 默认 /zh/ -- 显示在导航栏翻译菜单上，可以是外部的
      // 其余 locale 特定属性...
    },
  },
  vite: {
    plugins: [
      // add plugin
      AutoSidebar({ //与 themeConfig.sidebar 手动侧边目录二选一
        ignoreList: ['README.md','.vitepress','public'], // 忽略文件夹
        path: '/docs', // 侧边栏扫描路径，默认 '/docs'
        ignoreIndexItem: true, // 忽略首页
        collapsed: false, // 是否启用折叠，默认为false展开
        deletePrefix: '', // 删除路径前缀
        sideBarResolved(data) {
          // 接收完整的侧边栏对象以进行自定义修改
          return data;
        },
        sideBarItemsResolved(data) {
          // 接收完整的侧边栏 subItem 对象以进行自定义修改
          return data;
        },
        beforeCreateSideBarItems(data) {
          // 获取生成侧边栏子项之前扫描的文件名列表。如果要对侧边栏数据进行排序，建议使用
          return data;
        },
        titleFromFile: true, // 从文件内容中提取一级标题
        titleFromFileByYaml: false // read title from yaml config
      }),
    ]
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '导览', link: '/zh/guide' }
    ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/Examples/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/Examples/api-examples' }
    //     ]
    //   },
    //   {
    //     text: 'Hello',
    //     items: [
    //       { text: 'Hello Test', link: '/hello/Hello-Test' }
    //     ]
    //   }
    // ],
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
