import Vue from 'vue'

// For show Yuan (RMB)
Vue.filter('currency', (value) => '¥ ' + (parseInt(value) || 0).toFixed(2))
