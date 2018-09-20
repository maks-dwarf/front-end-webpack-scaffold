// thanks to https://www.valentinog.com/blog/webpack-tutorial/
// https://www.sitepoint.com/beginners-guide-webpack-module-bundling/ - good article to read about these and other functions..

const path = require("path");
// plugin to extract css code from webpack to a file
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");

module.exports = {
    entry: "./src/js",
    output: {
        path: path.resolve(__dirname, "dist/js")
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['babel-preset-env']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, // extracts scss code to separate file
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS, using Node Sass(node-sass) by default
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "./../css/[name].css",
            chunkFilename: "[id].css"
        }),
        new BrowserSyncPlugin({
            // browse to http://localhost:3000/ during development,
            // ./public directory is being served if option is set
            host: 'localhost',
            port: 3000,
            server: {  } // baseDir: ['public']
        })
    ],
    watch: true
};