import Vue from 'vue'
interface INFO {
  id?: any
  userName?: string
  mobile?: string
}
interface VueCache {
  setToken(token: string): this
  getToken(): string
  removeToken(): this
  setInfo(data: INFO): this
  getInfo(): object
  removeInfo(): this
  updataInfo(data: INFO): this
}

declare module 'vue/types/vue' {
  interface Vue {
    $Cache: VueCache
  }

  interface VueConstructor {
    Cache: VueCache
  }
}
