const path = require("path")
const merge = require("webpack-merge")
const common = require("./webpack.common")
const webpack = require("webpack")

let devConfig = module.exports = {
    mode:"development",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "main.js"
    },
    devtool:'inline-source-map',  //js
    module: {
        rules: [
            {
                test: /\.(sc|c|sa)ss$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader:"css-loader",
                        options:{
                            sourceMap:true
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
                    }
                ]
            }
        ]
    },
    devServer:{
        hot:true,
        host:'0.0.0.0',
        port:5800,
        open:true
    },
    plugins:[
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
}

module.exports = merge(common,devConfig)