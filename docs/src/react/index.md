<!--
 * @Author: zhangdi 1258956799@qq.com
 * @Date: 2022-12-17 23:38:15
 * @LastEditors: zhangdi 1258956799@qq.com
 * @LastEditTime: 2022-12-20 18:00:07
 * @FilePath: /MyBlog/docs/src/react/index.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
# 使用create-react-app脚手架创建工程
* _查看reate-react-app版本命令 reate-react-app -V_
* 在reate-react-app 5.0以上版本使用tailwind不需要额外配置

```javascript
yarn add -D tailwindcss postcss autoprefixer
 yarn tailwindcss init --full -p
 ```
 * 同时，tailwind.config.js 有一个属性(purge)修改，其余配置属性没有改变

```javascript
 module.exports = {
 -  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
 +  content: ['./src/**/*.{js,jsx,ts,tsx}']
    ...
 }
 ```
 在 全局css 中引入 tailwind
```javascript
/* ./src/index.{css, less, sass, scss} */
@tailwind base;
@tailwind components;
@tailwind utilities;
 ```
在根组件引入
```javascript
// ./src/index,tsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
 ```


