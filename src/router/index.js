import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import routes from './routes'
import hooks from './hooks'

const router = new VueRouter({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    // https://router.vuejs.org/en/advanced/scroll-behavior.html
    // 按需求，每次回到顶部
    return { x: 0, y: 0 }
  },
  routes
})
hooks(router)

export default router
