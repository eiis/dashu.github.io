<!--
 * @Author: zhangdi 1258956799@qq.com
 * @Date: 2022-12-10 23:52:34
 * @LastEditors: zhangdi 1258956799@qq.com
 * @LastEditTime: 2022-12-26 20:26:39
 * @FilePath: /MyBlog/docs/src/vue2/index.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

## 2002年12月20日
* 小程序使用vant时应该使用vantWeapp
* 同时其他端使用vant时应该要加上编译条件 不然会一直卡在编译中 卡在编译中应该看看编译条件
* 小程序内嵌webview的h5不可以设置导航栏自定义  webview取消全屏

## 2002年12月26日
* 在同时兼容h5和小程序时 小程序是不支持动态components的,h5端支持，在小程序端需采用条件渲染方案
* 小程序跳转tarbar页面使用uni.switchTab是不能传参数的,应该使用uni.reLunch
