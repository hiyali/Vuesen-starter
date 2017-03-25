import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

import router from '../router'
import store from '../store'
import configurations from './configurations'
configurations(router, store)

export default {
  JSSdkTicket: Vue.resource('wx/jsticket'),
  ShareActivity: Vue.resource('user/share{/action}', {}, {
    share: { method: 'POST' },
    click: { method: 'POST', params: { action: 'click' }},
    signin: { method: 'POST', params: { action: 'signin' }},
    inviteSignup: { method: 'GET', url: 'user/share/inviteSignup' }
  })
}
