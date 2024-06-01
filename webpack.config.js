const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { watchFile } = require('fs');

module.exports = {
    mode: 'development',

    entry: './src/js/index.js',

    output:{
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },

    module: {
        rules: [ 
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(ttf)$/i,
                type: 'asset/resource',
            },
        ],
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