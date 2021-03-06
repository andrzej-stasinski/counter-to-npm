// const HtmlWebpackPlugin = require('html-webpack-plugin')
// const CopyPlugin = require("copy-webpack-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        libraryTarget: 'commonjs2',
    },
    plugins: [
        new CleanWebpackPlugin(),
        // new HtmlWebpackPlugin({
        //     template: './public/index.html'
        // }),
        // new CopyPlugin({
        //     patterns: [
        //       { from: "./public", to: "./" },
        //     ],
        // }),
    ],
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
          {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'file-loader',
              },
            ],
          },
          {
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }                    
        ],
    },
}