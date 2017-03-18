var path = require('path')

var NODE_ENV = JSON.stringify('development')
if (process.argv.indexOf('--production') > -1) {
  NODE_ENV = JSON.stringify('production')
}

var env = {
  NODE_ENV,
  'IS_DEBUG_MODE': process.argv.indexOf('--development') > -1
}

module.exports = {
  env,
  build: {
    index: path.resolve(__dirname, '../example/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: '',
    assetsPublicPath: '/',
    productionSourceMap: false,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css']
  },
  dev: {
    port: 8888,
    assetsSubDirectory: '',
    assetsPublicPath: '/',
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}
