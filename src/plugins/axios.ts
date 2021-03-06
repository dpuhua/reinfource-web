/**
 * author: dph
 * date: 2019/11/27
 * description: axios配置
 */
import axios from 'axios'
import Vue from 'vue'
import { Message, MessageBox } from 'element-ui'

const getToken = () => Vue.Cache.getToken()

axios.interceptors.request.use(
  config => {
    config.baseURL = process.env.VUE_APP_BASE_URL
    config.withCredentials = false
    config.headers.Authorization = `Bearer ${getToken()}`
    config.timeout = 20000
    return config
  },
  err => Promise.reject(err)
)

axios.interceptors.response.use(
  res => {
    const code = res.data.code
    if (code === -11) {
      MessageBox.confirm('登录已过期', '提示', {
        confirmButtonText: '重新登录',
        showCancelButton: false,
        type: 'warning',
        center: true
      }).then(() => {

      })
    } else if (code === -17) {
      MessageBox.confirm('登录已过期', '提示', {
        confirmButtonText: '重新登录',
        showCancelButton: false,
        type: 'warning',
        center: true
      }).then(() => {

      })
    } else if (code !== 1) {
      Message({ message: res.data.msg, type: 'error' })
    }
    return res
  },
  err => {
    Message({ message: err.message, type: 'error' })
    return Promise.reject(err)
  }
)

export default axios
