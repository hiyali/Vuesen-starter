const webpack = require('webpack')
const merge = require('webpack-merge')
const stylusLoader = require("stylus-loader")
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpackBaseConfig = require('./webpack.base.conf.js')

var AutoPrefixerBrowsers = [
  'iOS >= 8.1',
  'Android >= 4.2',
  'IE >= 9',
  'Safari >= 7'
]

module.exports = merge(webpackBaseConfig, {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [ 'css-loader?-autoprefixer', 'postcss-loader' ],
          fallback: 'style-loader'
        })
      },
			{
        test: /\.styl$/,
        use: ExtractTextPlugin.extract({
          use: [ 'css-loader?-autoprefixer', 'postcss-loader', 'stylus-loader' ],
          fallback: 'style-loader'
        })
      },
    ]
  },
  output: {
    filename: "js/[name].[hash:6].min.js"
  },
  plugins: [
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      beautify: false,
      compress: {
        warnings      : false,
        sequences     : true,  // join consecutive statemets with the “comma operator”
        properties    : true,  // optimize property access: a["foo"] → a.foo
        dead_code     : true,  // discard unreachable code
        drop_debugger : true,  // discard “debugger” statements
        drop_console  : true,  // discard “console” statements
        unsafe        : true, // some unsafe optimizations (see below)
        conditionals  : true,  // optimize if-s and conditional expressions
        comparisons   : true,  // optimize comparisons
        evaluate      : true,  // evaluate constant expressions
        booleans      : true,  // optimize boolean expressions
        loops         : true,  // optimize loops
        unused        : true,  // drop unused variables/functions
        hoist_funs    : true,  // hoist function declarations
        hoist_vars    : true, // hoist variable declarations
        if_return     : true,  // optimize if-s followed by return/continue
        join_vars     : true,  // join var declarations
        cascade       : true,  // try to cascade `right` into `left` in sequences
        side_effects  : true,  // drop side-effect-free statements
        global_defs   : {},
        keep_fnames: true
      },
      output: {
        comments: false
      }
    }),
    new stylusLoader.OptionsPlugin({
      default: {
        use: [
          require('poststylus')([
            require('autoprefixer')({
              browsers: AutoPrefixerBrowsers
            }),
            'rucksack-css'
          ])
        ],
      },
    }),
    new ExtractTextPlugin({
      filename: "css/style.[hash:6].min.css",
      /*
         filename:  (getPath) => {
         return getPath('css/[name].css').replace('css/js', 'css');
       }, // */
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: 'src/index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      },
      chunksSortMode: 'dependency'
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
      options: {
        postcss: [
          require('autoprefixer')({
            browsers: AutoPrefixerBrowsers
          }),
          require('postcss-discard-comments')({
            // removeAllButFirst: true
            // or
            remove: function(comment) { return comment[0] != "$"; }
            // or
            // removeAll: true
          })
        ]
      }
    })
  ]
})
