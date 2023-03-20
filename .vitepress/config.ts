import { getThemeConfig, defineConfig } from "@sugarat/theme/node";

const blogTheme = getThemeConfig({
  // 文章默认作者
  // author: "我的个人博客",
  // comment: {
  //   repo: 'ATQQ/sugar-blog',
  //   repoId: 'MDEwOlJlcG9zaXRvcnkyNDEyNDUyOTk',
  //   category: 'Announcements',
  //   categoryId: 'DIC_kwDODmEcc84COVc6',
  //   inputPosition: 'top'
  // },
  // popover: {
  //   title: '公告',
  //   body: [
  //     { type: 'text', content: '👇公众号👇---👇 微信 👇' },
  //     {
  //       type: 'image',
  //       src: 'https://img.cdn.sugarat.top/mdImg/MTYxNTAxODc2NTIxMA==615018765210'
  //     },
  //     {
  //       type: 'text',
  //       content: '欢迎大家私信交流'
  //     }
  //   ],
  //   duration: -1
  // },
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
  // search: false,
});

// const extraHead: any =
//   process.env.NODE_ENV === "production"
//     ? [
//         [
//           "script",
//           {
//             charset: "UTF-8",
//             id: "LA_COLLECT",
//             src: "//sdk.51.la/js-sdk-pro.min.js",
//           },
//         ],
//         [
//           "script",
//           {},
//           'LA.init({id: "Jgmg5avjAUvoyePS",ck: "Jgmg5avjAUvoyePS",hashMode: true})',
//         ],
//         [
//           "script",
//           {},
//           `if ('serviceWorker' in navigator) {
//           navigator.serviceWorker.getRegistrations().then((registrations) => {
//             registrations.forEach(sw => sw.unregister())
//           })
//         }`,
//         ],
//       ]
//     : [];

export default defineConfig({
  lang: "zh-cmn-Hans",
  title: "LiMuBai",
  description: "我的博客网站，记录bug，学习，工作中遇到的问题",

  head: [
    // ["meta", { name: "theme-color", content: "#ffffff" }],
    // ["link", { rel: "icon", href: "/favicon.ico", type: "image/png" }],
    // [
    //   "link",
    //   {
    //     rel: "alternate icon",
    //     href: "/favicon.ico",
    //     type: "image/png",
    //     sizes: "16x16",
    //   },
    // ],
    // ["meta", { name: "author", content: "粥里有勺糖" }],
    // ["link", { rel: "mask-icon", href: "/favicon.ico", color: "#ffffff" }],
    // [
    //   "link",
    //   { rel: "apple-touch-icon", href: "/favicon.ico", sizes: "180x180" },
    // ],
    // ...extraHead,
  ],
  vite: {
    server: {
      port: 7686,
      host: "0.0.0.0",
    },
    optimizeDeps: {
      include: ["element-plus"],
      exclude: ["@sugarat/theme"],
    },
  },
  lastUpdated: true,
  themeConfig: {
    ...blogTheme,
    lastUpdatedText: "上次更新于",
    footer: {
      message: "自定义底部内容",
      copyright:
        'MIT Licensed | <a target="_blank" href="https://github.com/limubai1223/"> 我的github </a>',
    },

    nav: [
      {
        text: "关于我",
        link: "/pages/about/",
      },
      {
        text: "备战春秋",
        items: [
          { text: "校招考点汇总", link: "/pages/offer/campus/" },
          { text: "面经汇总", link: "/pages/offer/sum-interview/" },
          { text: "复习自查", link: "/pages/offer/review/" },
        ],
      },
      {
        text: "技术笔记",
        items: [
          { text: "技术教程", link: "/pages/technology/learn/" },
          { text: "模板工程", link: "/pages/technology/tpl/" },
          { text: "源码学习", link: "/pages/technology/source/" },
          { text: "技术概念", link: "/pages/technology/theory/" },
          { text: "学习笔记", link: "/pages/technology/study/" },
        ],
      },
      {
        text: "计算机基础",
        items: [
          { text: "算法与数据结构", link: "/pages/computerBase/algorithm/" },
          { text: "操作系统", link: "/pages/computerBase/os/" },
          { text: "计算机网络", link: "/pages/computerBase/Internet/" },
          { text: "设计模式", link: "/pages/computerBase/design/" },
          { text: "剑指offer", link: "/pages/computerBase/offer/" },
          { text: "力扣", link: "/pages/computerBase/leetcode/" },
        ],
      },
      {
        text: "大前端",
        items: [
          { text: "javascript", link: "/pages/bigWeb/js/" },
          { text: "vue", link: "/pages/bigWeb/vue/" },
          { text: "html", link: "/pages/bigWeb/html/" },
          { text: "css", link: "/pages/bigWeb/css/" },
          { text: "🌏浏览器专题", link: "/pages/bigWeb/browser/" },
          { text: "Web性能优化", link: "/pages/bigWeb/performance/" },
          { text: "regexp", link: "/pages/bigWeb/regexp/" },
          { text: "node", link: "/pages/bigWeb/node/" },
        ],
      },
      {
        text: "面试",
        items: [
          { text: "校招考点汇总", link: "/pages/offer/campus/" },
          { text: "面经汇总", link: "/pages/offer/sum-interview/" },
          { text: "复习自查", link: "/pages/offer/review/" },
          { text: "问解", link: "/pages/interview/problem/" },
          { text: "javascript", link: "/pages/interview/js/" },
          { text: "css", link: "/pages/interview/css/" },
          { text: "手撕代码", link: "/pages/interview/code/" },
          { text: "性能优化", link: "/pages/interview/performance/" },
          { text: "网络", link: "/pages/interview/internet/" },
          { text: "操作系统", link: "/pages/interview/os/" },
          { text: "设计模式", link: "/pages/interview/design/" },
          { text: "综合问题", link: "/pages/interview/other/" },
          { text: "面经汇总", link: "/pages/offer/sum-interview/" },
          { text: "小程序", link: "/pages/interview/mini/" },
        ],
      },
      {
        text: "手撕代码",
        items: [
          { text: "数据结构与算法", link: "/pages/coding/algorithm/" },
          { text: "javascript", link: "/pages/coding/js/" },
          { text: "css", link: "/pages/coding/css/" },
        ],
      },
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
