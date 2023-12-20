import axios from 'axios'
import { ElMessage } from 'element-plus'
// 创建axios实例
let request = axios.create({
  //打印请求地址
  baseURL: import.meta.env.VUE_APP_BASE_API, // api的base_url
  timeout: 5000, // 请求超时时间
})

// request请求拦截器
request.interceptors.request.use((config) => {
  // 请求前的处理
  return config
})

// request响应拦截器
request.interceptors.response.use(
  (response) => {
    // 请求响应后的处理
    return response
  },
  (error) => {
    // 请求响应错误的处理
    //处理网络错误
    let message = ''
    let status = error.response.status
    switch (status) {
      case 401:
        message = 'token过期'
        break
      case 403:
        message = '无权访问'
        break
      case 404:
        message = '请求地址错误'
        break
      case 500:
        message = '服务器出现问题'
        break
      default:
        message = '无网络'
    }
    ElMessage({
      type: 'error',
      message: message,
    })
    return Promise.reject(error)
  },
)
export default request
