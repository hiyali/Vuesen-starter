// Main import
import Vue from 'vue'

// Import libs / directives / filters
import './lib'
import './directives'
import './filters'

// Custom style
import './assets/style'

// Router / Store
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'
sync(store, router)

// Root render
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(
		Vue.extend({ template: '<router-view />' })
	)
})
