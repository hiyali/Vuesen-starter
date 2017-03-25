const path = require('path')
const express = require('express')
const webpack = require('webpack')
const opn = require('opn')
const config = require('./config')
const webpackConfig = require('./webpack.dev.conf')

if (!process.env.NODE_ENV) process.env.NODE_ENV = JSON.parse(config.env.NODE_ENV)
const port = config.dev.port
const app = express()
const compiler = webpack(webpackConfig)

const devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: '/',
  stats: {
    colors: true,
    chunks: false
  }
})

const hotMiddleware = require('webpack-hot-middleware')(compiler)
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)


// proxy middleware
const proxyMiddleware = require('http-proxy-middleware')
const proxyOptions = {
  target: 'http://yzmz.hiyali.org',
  changeOrigin: true
}
app.use('/api', proxyMiddleware(proxyOptions));

// serve pure static assets
const staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./'))

const uri = 'http://localhost:' + port

devMiddleware.waitUntilValid(function () {
  console.info('> Listening at ' + uri + '\n')
})

module.exports = app.listen(port, function (err) {
  if (err) {
    console.error(err)
    return
  }

  // when env is testing, don't need open it
  if (process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
})
