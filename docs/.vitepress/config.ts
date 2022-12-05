/*
 * @Author: zhangdi 1258956799@qq.com
 * @Date: 2022-12-03 22:23:50
 * @LastEditors: zhangdi 1258956799@qq.com
 * @LastEditTime: 2022-12-05 21:46:10
 * @FilePath: /MyBlog/docs/.vitepress/config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from "vitepress";

export default defineConfig({
  title: "coderdashu",
  description: "大叔的博客",
  lang: 'en-US',
  base: "/dashu.github.io/",
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
    logo: './home.jpg',
    siteTitle: 'coderdashu',
    //右上角的社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Z125895699' },
      // {icon:'twitter',link:'https://github.com/Z125895699'}
    ],
    nav: [
      { text: 'JavaScript', link: '/guide' },
      { text: 'Vue',
      items: [
        { text: 'Vue2', link: '/Vue2' },
        { text: 'Vue3', link: '/Vue3' },
      ] },
      { text: 'React', link: 'https://github.com/...' }
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Getting Started', link: '/getting-started' },
        ]
      }
    ]
  },
});
