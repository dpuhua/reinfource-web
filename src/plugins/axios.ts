import axios from 'axios'

axios.interceptors.request.use(
  config => {
    config.baseURL = '//192.168.1.113:8687/api'
    config.withCredentials = false
    config.headers.Authorization = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NzExMzU2ODkwOTgsIm5hbWUiOiJkcHVodWEifQ.Qa1tLX0bF8qvdiMpMQ-zNONq2-p9W5m1FYbOToFDNcA'
    config.timeout = 20000
    return config
  },
  err => Promise.reject(err)
)

axios.interceptors.response.use(
  response => {
    return response
  },
  err => Promise.reject(err)
)

export default axios
