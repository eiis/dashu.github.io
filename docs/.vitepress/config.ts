/*
 * @Author: zhangdi 1258956799@qq.com
 * @Date: 2022-12-03 22:23:50
 * @LastEditors: zhangdi 1258956799@qq.com
 * @LastEditTime: 2022-12-05 20:14:33
 * @FilePath: /MyBlog/docs/.vitepress/config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from "vitepress";

export default defineConfig({
  title: "coderdashu",
  description: "大叔的博客",
  base: "/dashu.github.io/",
  lastUpdated: true,
  head:[
    ['link', { rel: 'icon', href: './favicon.ico' }]
  ]
});
