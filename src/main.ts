import Vue from 'vue'
import vueAxios from 'vue-axios' // 用于包装axios
import vueCookies from 'vue-cookies' // cookie操作，目前主要用于保存token
import axios from './plugins/axios' // 请求接口
import App from './App.vue'
import router from './plugins/router'
import store from './store'
import cache from './plugins/cache'
import './registerServiceWorker'
import './plugins/element'
import './tools/title'
import './assets/sass/common.scss'
import './assets/sass/element-theme.scss'

Vue.use(vueCookies)

Vue.config.productionTip = true

Vue.use(vueAxios, axios)
Vue.use(cache)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
