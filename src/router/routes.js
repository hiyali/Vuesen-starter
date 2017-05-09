import Login from '../pages/login'

global.beforeImportJs = (name = '') => {
  // global.logger.log(`begin load js ${name}`, new Date().getTime())
  // Indicator.open('正在加载资源...')
}

const routes = [
  { path: '/login', name: 'login', component: Login },

  { path: '*', redirect: '/login' },
  { path: '/', redirect: '/login' }

    /*
     * For lazyload
      component: r => {
        global.beforeImportJs('pages/invite/Friend')
        require.ensure([], () => r(require('../../pages/invite/Friend')), 'user-group')
      }
      */
]

export default routes
