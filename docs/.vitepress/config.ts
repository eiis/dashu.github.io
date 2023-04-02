/*
 * @Author: zhangdi 1258956799@qq.com
 * @Date: 2022-12-03 22:23:50
 * @LastEditors: zhangdi 1258956799@qq.com
 * @LastEditTime: 2023-04-02 18:54:22
 * @FilePath: /MyBlog/docs/.vitepress/config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from "vitepress";

export default defineConfig({
  // base: '/fugui.info/',
  title: "coderdashu",
  description: "大叔的博客",
  lang: 'en-US',
  // base: "/dashu.github.io/",
  lastUpdated: true, // 页面上展示最后更新的时间
  head:[
    ['link', { rel: 'icon', href: './favicon.ico' }]
  ],
  markdown: {
    theme: 'material-palenight',
    lineNumbers: true
  },
  themeConfig: {
    //左上角的文字和图标
    logo: './home.png',
    siteTitle: 'coderdashu',
    //右上角的社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Z125895699' },
    ],
    nav: [
      { text: "首页", link: "/" },
      { text: "工具笔记", link: "/src/toolnotes/" },
      {text: "笔记", link: "/src/notes/"},
      {text: "uniapp", link: "/src/uniapp/"},
      {text: "git工具", link: "/src/git/"},
      { text: 'Vue',
        items: [
          { text: 'Vue2', link: '/src/vue2/' },
          { text: 'Vue3', link: '/src/vue2/' },
        ] 
      },
      { text: 'React', link: '/src/react/' }
    ],
    // footer: {
    //   message: "Released under the MIT License.",
    //   copyright: "Copyright © 2022-12-11",
    // },
    sidebar: [
      // {
      //   text: '笔记',
      //   items: [
      //     { text: 'note1', link: '/src/notes/' },
      //     { text: 'Getting Started', link: '/src/notes/' },
      //   ]
      // }
    ]
  },
});
