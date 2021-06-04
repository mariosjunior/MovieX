import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {
  createProvider
} from './vue-apollo'
import vuetify from './plugins/vuetify'
import store from "./store"

Vue.config.productionTip = false

new Vue({
  apolloProvider: createProvider(),
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')