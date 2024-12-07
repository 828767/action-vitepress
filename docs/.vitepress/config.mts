import { defineConfig } from 'vitepress';
import AutoSidebar from "vite-plugin-vitepress-auto-sidebar";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  vite: {
    plugins: [
      // add plugin
      AutoSidebar({
        ignoreList: ["README.md",".vitepress","public"], // 忽略文件夹
        path: "/docs", // 侧边栏扫描路径，默认 "/docs"
        ignoreIndexItem: true, // 忽略首页
        collapsed: false, // 是否启用折叠，默认为false展开
        deletePrefix: "", // 删除路径前缀
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
      { text: 'Hello', link: '/hello/Hello-Test' }
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
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
