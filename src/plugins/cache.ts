/**
 * author: dph
 * date: 2019/11/27
 * description: cookie存储
 */
import Vue from 'vue'
const tokenName: string = 'REIN-TOKEN'
const infoName: string = 'REIN-INFO'

export default {
  install (Vue: any) {
    Vue.prototype.$Cache = this
    Vue.Cache = this
  },
  setToken (data: string) {
    Vue.cookies.set(tokenName, data)
    return this
  },
  getToken () {
    return Vue.cookies.get(tokenName)
  },
  removeToken () {
    Vue.cookies.remove(tokenName)
    return this
  },
  setInfo (data: INFO) {
    Vue.cookies.set(infoName, data)
    return this
  },
  getInfo () {
    return Vue.cookies.get(infoName)
  },
  removeInfo () {
    Vue.cookies.remove(infoName)
    return this
  },
  updateInfo (data: INFO) {
    const oldInfo = this.getInfo()
    const newInfo = Object.assign({}, oldInfo, data)
    Vue.cookies.set(infoName, newInfo)
    return this
  }
}

interface INFO {
  id?: any
  userName?: string
  mobile?: string
}
