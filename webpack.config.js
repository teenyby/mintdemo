const path = require('path')
const htmlwebpackplugin = require('html-webpack-plugin')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: path.join(__dirname, 'src', 'main.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',

    },
    //打包模式
    mode: 'development',

    //处理非js文件
    module: {
        rules: [
            //处理css文件
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            //处理less文件
            {
                test: /\.less$/,
                use: ["style-loader", "css-loader", "less-loader"]
            },
            //处理图片
            {
                test: /\.(png|jpg|jpeg|bmp)$/,
                use: [{
                    loader: "url-loader",
                    options: {
                        limit: 8 * 1024
                    }
                }],

            },
            //处理字体图标
            {
                test: /\.(svg|woff|woff2|eot|ttf)$/,
                use: [{
                    loader: "url-loader",
                    options: {
                        limit: 50 * 1024
                    }
                }]
            },
            //处理babel
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: ["babel-loader"]
            },
            {
                test: /\.vue$/,
                use: ['vue-loader']
            }

        ]
    },
    //处理插件
    plugins: [new htmlwebpackplugin({
            template: path.join(__dirname, 'src', 'index.html')
        }),
        new webpack.HotModuleReplacementPlugin(),
        new VueLoaderPlugin()
    ],
    //webpack-dev-server配置 项目无用
    devServer: {
        port: 3030,
        contentBase: path.join(__dirname, 'dist'),
        open: true,
        //开启热更新，局部
        hot: true,
        // proxy: {
        //     '/api': {
        //       target: 'http://www.liulongbin.top:3005/api',
        //       changeOrigin: true,
        //       pathRewrite: { '^/api': '' }
        //     }
        //   }
    },

}