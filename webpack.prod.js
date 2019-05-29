const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const optimizeCss = require('optimize-css-assets-webpack-plugin')
const uglify = require('uglifyjs-webpack-plugin')
const merge = require("webpack-merge")
const common = require("./webpack.common")

let prodConfig = module.exports = {
    entry:"./src/index.js",
    mode: "production",
    output: {
        // filename: "[name].bundle.[hash].js",
        // path: path.join(__dirname, "dist")
        path: path.resolve(__dirname, 'dist'),
        filename: "main.[hash].js"
    },
    module: {
        rules: [
            {
                test: /\.(sc|c|sa)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: (loader) => [
                                require('autoprefixer')({
                                    browsers: ['last 30 versions', "> 2%", "Firefox >= 10", "ie 6-11"]
                                })
                            ]
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].[hash].css", //输出最终输出的文件名
            chunkFilename: '[id].[hash].css'
        }),
    ],
    optimization: {//优化项
        minimizer: [
            new optimizeCss({}), //压缩css
            new uglify({
                cache: true,//缓冲
                parallel: true, //并发打包,一次打包多个
                sourceMap:true,//源码调试
            }),  //压缩js

        ]
    }
}

module.exports = merge(common,prodConfig)