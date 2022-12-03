
###
 # @Author: zhangdi 1258956799@qq.com
 # @Date: 2022-12-04 00:27:00
 # @LastEditors: zhangdi 1258956799@qq.com
 # @LastEditTime: 2022-12-04 00:27:58
 # @FilePath: /MyBlog/bin/clean.sh
 # @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
### 
rm -rf $(pnpm store path)
rm -rf node_modules
npm cache clean --force
