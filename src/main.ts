import Vue from 'vue'
import vueAxios from 'vue-axios'
import vueCookies from 'vue-cookies'
import axios from './plugins/axios'
import App from './App.vue'
import router from './plugins/router'
import store from './store'
import './registerServiceWorker'
import './plugins/element'
import './assets/sass/common.scss'
import './assets/sass/element-theme.scss'

Vue.use(vueCookies)

Vue.config.productionTip = true

Vue.use(vueAxios, axios)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
