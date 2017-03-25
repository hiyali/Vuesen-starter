
/*
 * More see: http://router.vuejs.org/zh-cn/advanced/navigation-guards.html
 */
import store from '../store'

const hooks = (router) => {
  router.beforeEach((to, from, next) => {
    console.log(store)

    /* Must be called */
    next()
  })

  router.afterEach((to, from) => {
  })
}

export default hooks
