// Webpack CSS import
import 'onsenui/css/onsenui.css'
import 'onsenui/css/onsen-css-components.css'

// JS import
import Vue from 'vue'
import 'onsenui'
import VueOnsen from 'vue-onsenui'

import './main'
import Home from './pages/Home'

Vue.use(VueOnsen)

new Vue({
  components: { Home },
  el: '#app',
  template: '<Home />'
})

window.console.log(new Date().getTime(), 'h')
