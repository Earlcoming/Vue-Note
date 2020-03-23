# vue.config.js
```js
const path = require('path');
// style-resources-loader
module.exports = {
    //是否打包sourceMap
    productionSourceMap: false,

    //设置输出目录
    outputDir: './MyDist',

    // 开发环境还是'/'，生成环境就是http://www.duyiedu.com
    publicPath:process.env.NODE_ENV === 'production' ? 'http://www.duyiedu.com' : '/',

    //把js img css放在assets文件夹下
    assetsDir: 'assets',

    chainWebpack: config => {
         // 设置webpack配置 config  就是module.exports 的内容
         // 把views设置成_v简写
         config.resolve.alias.set('_v', path.resolve(__dirname, 'src/views'));
         config.resolve.alias.set('_c', path.resolve(__dirname, 'src/components'));
    },

    devServer: {
        hot:true, //热更新
        open:true, //配置自动启动浏览器
        host: 'localhost',
        port: 8080, // 端口号
        proxy:{
            //  代理axios访问http://www.baidu.com
            '/api/chat/sendMsg': {
                target: 'http://www.duyiedu.com'
            }
        }
    },
    // sass 全局样式设置
    pluginOptions: {
      'style-resources-loader': {
        preProcessor: 'sass',
        patterns: [
            path.resolve(__dirname, 'src/assets/style.sass')
        ]
      }
    }
}

```