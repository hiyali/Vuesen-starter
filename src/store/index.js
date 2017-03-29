import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// Modules
import app from './app'
import reserve from './reserve'

// Create store
const store = new Vuex.Store({
  modules: {
    app,
    reserve
  }
})

export default store
