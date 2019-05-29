const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry:"./src/index.js",
    module: {
        rules: [
            {
                test:/\.(png|svg|jpg|gif|jpeg|ico|woff|woff2|eot|ttf|otf)$/,
                // use:['file-loader?name=[name].[ext]&outputPath=img/', 'image-webpack-loader']
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            limit:10000
                        }
                    },
                    {
                        loader:"image-webpack-loader"
                    }
                ]
            },
            {
                test:/\.js$/,
                exclude:/(node_modules|bower_components)/,//排除掉node_module目录
                use:{
                    loader:'babel-loader',
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ //配置
            title:"webpackDemo",
            filename: 'index.html',//输出文件名
            template:path.resolve(__dirname,"src/index.html"),//以当前目录下的index.html文件为模板生成dist/index.html文件
        }),
        new CleanWebpackPlugin()
    ],
}