// Webpack CSS import
import 'onsenui/css/onsenui.css'
import 'onsenui/css/onsen-css-components.css'

// JS import
import Vue from 'vue'
import OnsenUI from 'onsenui'
OnsenUI.disableAutoStyling()
import VueOnsen from 'vue-onsenui'

import './main'
import Root from './pages/root'

Vue.use(VueOnsen)

new Vue({
  components: { Root },
  el: '#app',
  template: '<Root />'
})
