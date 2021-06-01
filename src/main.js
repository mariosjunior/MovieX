import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {
  createProvider
} from './vue-apollo'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

const id = localStorage.getItem('user_id');
console.log(id)


new Vue({
  apolloProvider: createProvider(),
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')