#使用最简单的逻辑查看react 打包后的大小(without es6)

##webpack
###过程
wepack 配置了dev-tool为压缩率最高的, NODE环境变量（用于去除一些test），压缩了js并去掉了sourcemap和注释； 结果依然在130KB左右（dist下的bundle.js）
##browserify
##过程
NODE_ENV=production browserify -t reactify src/test.js | uglifyjs -cm > browser.bundle.js 命令（各个插件直接npm 安装）后也有150KB

###结论
由于react原有库已经接近124KB，webpack打包效率看来很不错了，但是对于移动端的弱网络环境来说还是太大了

###进一步gzip
本地gzip命令bundle.js会进一步被压缩到37KB, 所以服务器上gzip最好能够开启
