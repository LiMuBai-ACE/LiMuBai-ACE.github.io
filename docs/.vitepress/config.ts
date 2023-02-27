import { getThemeConfig, defineConfig } from "@sugarat/theme/node";

const blogTheme = getThemeConfig({
  // 文章默认作者
  // author: "我的个人博客",
  // friend: [
  //   {
  //     nickname: "粥里有勺糖",
  //     des: "你的指尖用于改变世界的力量",
  //     avatar:
  //       "https://img.cdn.sugarat.top/mdImg/MTY3NDk5NTE2NzAzMA==674995167030",
  //     url: "https://sugarat.top",
  //   },
  //   {
  //     nickname: "Vitepress",
  //     des: "Vite & Vue Powered Static Site Generator",
  //     avatar:
  //       "https://img.cdn.sugarat.top/mdImg/MTY3NDk5NTI2NzY1Ng==674995267656",
  //     url: "https://vitepress.vuejs.org/",
  //   },
  // ],
});

export default defineConfig({
  lang: "zh-cmn-Hans",
  title: "我的个人博客",
  description: "我的博客网站，记录bug，学习，工作中遇到的问题",
  vite: {
    optimizeDeps: {
      include: ["element-plus"],
      exclude: ["@sugarat/theme"],
    },
  },
  themeConfig: {
    ...blogTheme,
    lastUpdatedText: "上次更新于",
    footer: {
      message: "自定义底部内容",
      copyright:
        'MIT Licensed | <a target="_blank" href="https://github.com/limubai1223/"> 我的github </a>',
    },
    nav: [
      { text: "我的", link: "/about" },
      { text: "标签", link: "/tag/index" },
    ],
    logo: "/logo.png",
    // editLink: {
    //   pattern:
    //     'https://github.com/ATQQ/sugar-blog/tree/master/packages/blogpress/:path',
    //   text: '去 GitHub 上编辑内容'
    // },
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/limubai1223/",
      },
    ],
  },
});
