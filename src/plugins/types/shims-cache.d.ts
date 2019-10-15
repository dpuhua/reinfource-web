import Vue from 'vue'

interface VueCache {
  setToken(token: string): this,
  getToken(): string,
  removeToken(): this
}

declare module 'vue/types/vue' {
  interface Vue {
    $Cache: VueCache
  }

  interface VueConstructor {
    Cache: VueCache
  }
}
