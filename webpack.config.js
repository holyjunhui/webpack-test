const path = require('path');
const proxy = require('http-proxy-middleware')
module.exports = {
    // 入口文件
    entry: {
        app: './src/index.js'
    },
    // 输出到dist文件夹, 文件名字为bundle.js
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'./dist')
    },
        module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    mode:'development',
    devServer:{
         port: 3000,
        contentBase: './dist',
        proxy: {
      "/interview": {
            target: "https://teamtreehouse.com",
            pathRewrite: {"^/interview" : ""},
            secure: false,
            changeOrigin: true
          },
          "/api/interview":{
            target:"https://bot.testing2.ifchange.com",
            secure:false,
            changeOrigin:true
          }
        }
    }
}