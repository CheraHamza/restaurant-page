const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { watchFile } = require('fs');

module.exports = {
    mode: 'development',

    entry: './src/index.js',

    output:{
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },

    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        watchFiles: ['./src/**/*'],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],

    optimization: {
        runtimeChunk: 'single',
    },
}