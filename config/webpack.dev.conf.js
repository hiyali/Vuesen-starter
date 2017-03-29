const webpack = require('webpack')
const merge = require('webpack-merge')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpackBaseConfig = require('./webpack.base.conf.js')

// add hot-reload related code to entry chunks
Object.keys(webpackBaseConfig.entry).forEach(function (name) {
  webpackBaseConfig.entry[name] = ['./config/dev-client'].concat(webpackBaseConfig.entry[name])
})

module.exports = merge(webpackBaseConfig, {
  devtool: '#eval-source-map',
  module: {
    rules: [
			{
        test: /\.styl$/,
        use: ExtractTextPlugin.extract({
          use: [ 'css-loader?-autoprefixer', 'stylus-loader' ],
          fallback: 'style-loader'
        })
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin({
      filename: 'css/style.css',
      /*
         filename:  (getPath) => {
         return getPath('css/[name].css').replace('css/js', 'css');
       }, // */
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
      inject: true
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        eslint: {
          formatter: require('eslint-friendly-formatter')
        }
      }
    })
  ]
})

