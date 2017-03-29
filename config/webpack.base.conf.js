const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const roots = [
  path.resolve(__dirname, '../node_modules'),
  path.resolve(__dirname, '../src')
]

module.exports = {
  entry: {
    app: './src'
  },
  output: {
    filename: 'js/[name].js',
		path: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  },
  resolve: {
    modules: roots,
    extensions: ['.js', '.styl', '.vue'],
    alias: {
      vue: 'vue/dist/vue.js'
    }
  },
  resolveLoader: {
    modules: roots,
  },
  module: {
		rules: [
      {
        enforce: 'pre',
        test: /\.(js|vue)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          extends: path.join(__dirname, '/.eslintrc'),
          configFile: '.eslintrc',
          failOnWarning: true,
          failOnError: true,
          cache: false,
        }
      },
      { test: /\.html$/, loader: 'html-loader' },
			{ test: /\.png$/, use: 'file-loader?name=img/[name].[hash:6].[ext]' },
			{
        test: /\.js$/,
        use: 'babel-loader',
        include: [
          path.join(__dirname, '../src')
        ],
        exclude: /node_modules/
      },
			{
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              loaders: {
                js: 'babel-loader',
                stylus: ExtractTextPlugin.extract({
                  use: ['css-loader?-autoprefixer', 'stylus-loader'],
                  fallback: 'vue-style-loader' // <- this is a dep of vue-loader, so no need to explicitly install if using npm3
                })
              }
            }
          }
        ]
      },
      { test: /\.(woff2?|ttf|eot|svg)$/, use: 'file-loader?name=font/[name].[hash:6].[ext]' }
		]
  },
  plugins: [ ]
}
