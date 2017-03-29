import Home from '../pages/home.vue' // added ext .vue for travis build
import Splitter from '../pages/splitter.vue'

global.beforeImportJs = (name = '') => {
  // global.logger.log(`begin load js ${name}`, new Date().getTime())
  // Indicator.open('正在加载资源...')
}

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/reserve', name: 'reserve', component: Splitter },
  { path: '/order', name: 'order', component: Splitter },

  { path: '*', redirect: '/' }

    /*
     * For lazyload
      component: r => {
        global.beforeImportJs('pages/invite/Friend')
        require.ensure([], () => r(require('../../pages/invite/Friend')), 'user-group')
      }
      */
]

export default routes
