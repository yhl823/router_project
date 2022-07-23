import axios from 'axios'

const baseURL = 'https://mock.apifox.cn/m1/1244885-0-default'
// axios创建前的配置
const http = axios.create({
  baseURL,
  headers: { 'Content-Type': 'application/json' }
  // timeout : 10000
})

// 请求拦截
http.interceptors.response.use(
  res => {
    return res
  },
  error => {
    // eslint-disable-next-line no-console
    console.error(error, '接口出错')
  }
)

export default http
