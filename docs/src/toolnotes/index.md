<!--
 * @Author: zhangdi 1258956799@qq.com
 * @Date: 2022-12-22 21:11:46
 * @LastEditors: zhangdi 1258956799@qq.com
 * @LastEditTime: 2022-12-22 21:20:22
 * @FilePath: /MyBlog/docs/src/toolnotes/index.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
# mac使用nvm管理node版本
*安装
```javascript
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
 ```
 或者
```javascript
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
 ```
## 想要成功的安装 nvm，Mac 系统下必须要先安装 Xcode 软件
* 查看nvm安装成功
输入
```javascript
nvm --version
 ```




* nvm常用的命令
1. 安装最新稳定版 node
```javascript
nvm install stable
 ```
 2. 安装指定版本，可模糊安装，如：安装 v17.4.0，既可 $ nvm install v17.4.0，又可 $ nvm install 17.4
```javascript
 nvm install <version>
 ```
3. 切换使用指定的版本 node
```javascript
nvm use <version>
 ```


 


