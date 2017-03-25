import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// Modules
import reserve from './reserve'

// Create store
const store = new Vuex.Store({
  modules: {
    reserve
  }
})

export default store
