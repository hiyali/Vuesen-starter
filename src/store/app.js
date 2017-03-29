import API from '../api'

const state = {
  splitterOpen: false
}

const getters = {
  payInfoIsFunction: state => {
    return typeof state.payInfo === 'function'
  }
}

const actions = {
  getSome ({ commit, state }, data) {
    return API.UnionPay.getUnionAccount(data).then(res => {
      commit('setSome', res.body)
    })
  }
}

const mutations = {
  toggleSplitterOpen (state, data) {
    state.splitterOpen = !state.splitterOpen
  },
  setSplitterOpen (state, data) {
    state.splitterOpen = !!data
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
