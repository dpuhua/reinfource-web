import Vue from 'vue'
const tokenName: string = 'REIN-TOKEN'

export default {
  install (Vue: any) {
    Vue.prototype.$Cache = this
    Vue.Cache = this
  },
  setToken (token: string) {
    Vue.cookies.set(tokenName, token)
    return this
  },
  getToken () {
    return Vue.cookies.get(tokenName)
  },
  removeToken () {
    Vue.cookies.remove(tokenName)
    return this
  }
}
