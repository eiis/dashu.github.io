<!--
 * @Author: zhangdi 1258956799@qq.com
 * @Date: 2022-12-17 23:38:15
 * @LastEditors: zhangdi 1258956799@qq.com
 * @LastEditTime: 2022-12-26 21:06:25
 * @FilePath: /MyBlog/docs/src/react/index.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
## 使用create-react-app脚手架创建工程
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

 ## 复习redux
* Redux 是 JavaScript 状态容器，提供可预测化的状态管理。Redux 和 React 之间没有关系。Redux 支持 React、Angular、Ember、jQuery 甚至纯 JavaScript
1. 要点
* 应用中所有的 state 都以一个对象树的形式储存在一个单一的 store 中。 惟一改变 state 的办法是触发 action，一个描述发生什么的对象

```javascript
import redux from 'redux';

//初始化数据 放在reducer中
const initialState = {
  counter: 0,
};
 ```
 * 为了描述 action 如何改变 state 树，你需要编写 reducer 作用就是接收旧的 state 和 action，返回新的 state。
 * 在 default 情况下返回旧的 state。遇到未知的 action 时，一定要返回旧的 state
```javascript
 //reducer
//state给一个初始化值
function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, counter: state.counter + 1 };
    case 'DECREMENT':
      return { ...state, counter: state.counter - 1 };
    case 'ADD_NUMBBER':
      return { ...state, counter: state.counter + action.num };
    case 'SUB_NUMBER':
      return { ...state, counter: state.counter - action.num };
    default:
      return state;
  }
}
 ```

 * 创建一个store(创建的时候需要传入一个reducer)

```javascript
 //store(创建的时候需要传入一个reducer)
const store = redux.createStore(reducer);

//store订阅 可以手动订阅更新，也可以事件绑定到视图层。
store.subscribe(() => {
  console.log('counter:', store.getState().counter);
});
 ```

* 改变内部 state 惟一方法是 dispatch 一个 action,它是 store 数据的唯一来源,一般来说你会通过 store.dispatch() 将 action 传到 store。
* action 可以被序列化，用日记记录和储存下来，后期还可以以回放的方式执行

```javascript
//actions
const action1 = { type: 'INCREMENT' };
const action2 = { type: 'DECREMENT' };
const action3 = { type: 'ADD_NUMBBER', num: 5 };
const action4 = { type: 'SUB_NUMBER', num: 12 };

//派发action   把action传入reducer里面 实现initialState的修改.一个action可以多次派发
store.dispatch(action1);
store.dispatch(action2);
store.dispatch(action3);
store.dispatch(action3);
store.dispatch(action4);
 ```

