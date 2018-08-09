const fs = require('fs');
const path = require("path");
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ["./src/index.js", "./src/scss/main.scss"],
    output: {
        path: path.join(__dirname, "public"),
        filename: "dist/app.bundle.js"
    },
    module: {
        rules: [
            {
                loader: "babel-loader",
                test: /\.(js|jsx)$/,
                exclude: /node-modules/
            },
            {
                test: /data\.json$/,
                loader: "json-loader"
            },
            // {
            //     test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
            //     use: [{
            //         loader: "file-loader",
            //         options: {
            //             name: "[name].[ext]",
            //             outputPath: path.join(__dirname, "/public/fonts/")
            //         }
            //     }]
            // },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, 
                    'css-loader'
                ]
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader, 
                    'css-loader',
                    // 'postcss-loader', 
                    'sass-loader'
                ],
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "dist/app.css",
            minimize: {
                removeComments: true,
                removeEmptyAttributes: true,
                minifyCSS: true
            }
        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.min\.css$/,
            cssProcessorOptions: { discardComments: { removeAll: true } }
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            inject: 'body',
            hash: true,
            minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: true,
                html5: true,
                removeComments: true,
                removeEmptyAttributes: true,
                minifyCSS: true,
            },
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
    ],
    devtool: "eval",
    devServer: {
        https: true,
        cert: fs.readFileSync('/Users/desb/Projects/ssl/localhost/ia.localhost.crt'),
        key: fs.readFileSync('/Users/desb/Projects/ssl/localhost/ia.localhost.key'),
        contentBase: path.join(__dirname, "public"),
        historyApiFallback: true,
        compress: true,
        port: 8443
    }
}