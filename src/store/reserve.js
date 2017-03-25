import API from '../api'

const state = {
  payInfo: {}
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
  setSome (state, data) {
    state.payInfo = data
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
