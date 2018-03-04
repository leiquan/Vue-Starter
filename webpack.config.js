const webpack = require('webpack');
const path = require('path');
const os = require('os');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = env => {

    // 默认dist，调试环境则是src
    let dir = path.resolve(__dirname, 'dist');

    if (env.NODE_ENV == 'dev') {
        dir = path.resolve(__dirname, 'src');
    }

    return {
        entry: './src/index.js',
        output: {
            filename: 'bundle.js',
            path: dir
        },
        devtool: 'inline-source-map',
        devServer: {
            contentBase: './src',
            progress: true,
            // 将所有的请求都转发到8989接口，也就是Dora的Mock接口
            proxy: {
                // "/v2/**": "http://10.95.156.136",        //卢禹的接口
                "**": "http://localhost:8989",          //本地 mock 的接口
            },
            disableHostCheck: true
        },
        plugins: [
            // 清除 dist文件夹
            new CleanWebpackPlugin(['dist']),
            // 处理html拼接js和css
            new HtmlWebpackPlugin({
                template: 'src/index.html',
                hash: true
            }),
            // 导出css为单独文件
            new ExtractTextPlugin("static/css/styles.css")
        ],
        resolve: {
            alias: {
                // 别名，供代码内直接使用
            }
        },
        module: {
            rules: [{
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'img/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'fonts/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            }, {
                test: /\.less/,
                use: ExtractTextPlugin.extract(["css-loader", "less-loader"])
            }
            ]
        }
    };
}