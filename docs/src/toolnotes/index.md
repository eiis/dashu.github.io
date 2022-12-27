<!--
 * @Author: zhangdi 1258956799@qq.com
 * @Date: 2022-12-22 21:11:46
 * @LastEditors: zhangdi 1258956799@qq.com
 * @LastEditTime: 2022-12-27 21:59:16
 * @FilePath: /MyBlog/docs/src/toolnotes/index.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
## mac使用nvm管理node版本
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

 ## 使用lazygit
 * 安装
```javascript
 brew install jesseduffield/lazygit/lazygit
 ```
* 使用
1. 直接在需要使用的仓库中输入lazygit 如果觉得命令很麻烦可以配置别名lg,如下 然后可以直接输入lg就能打开lazygit页面

```javascript
open ~/.bash_profile
alias lg='lazygit'
source ~/.bash_profile
 ```

2. 按x可以查看菜单  同时支持1234切换状态区

3. 按c可以commit p拉取远程代码 P推送远程



 


