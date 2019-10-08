import Vue from 'vue'
import vueAxios from 'vue-axios'
import axios from './plugins/axios'
import App from './App.vue'
import router from './plugins/router'
import store from './store'
import './registerServiceWorker'
import './plugins/element'

Vue.config.productionTip = false
Vue.use(vueAxios, axios)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
