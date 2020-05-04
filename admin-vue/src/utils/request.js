import axios from 'axios'
import router from '@/router/routers'
import { Notification, MessageBox } from 'element-ui'
import store from '../store'
import { getToken } from '@/utils/auth'
import Config from '@/settings'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  timeout: Config.timeout // 请求超时时间
})
const TokenKey = Config.TokenKey
// request拦截器
service.interceptors.request.use(
  config => {
    // 让每个请求携带自定义token 请根据实际情况自行修改
    if (store.getters.token) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      config.headers[TokenKey] = getToken()
    }
    config.headers['Content-Type'] = 'application/json'
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  response => {
    const code = response.status

    if (code < 200 || code > 300) {
      Notification.error({
        title: response.message
      })
      return Promise.reject('error')
    } else {
      const res = response.data
      const resCode = res.code
      const resData = res.data
      if (resCode === null || resCode === undefined) {
        return res
      }

      if (resCode !== 200) {
        if (resCode === 401) {
          MessageBox.confirm(
            '登录状态已过期，您可以继续留在该页面，或者重新登录',
            '系统提示',
            {
              confirmButtonText: '重新登录',
              cancelButtonText: '取消',
              type: 'warning'
            }
          ).then(() => {
            store.dispatch('LogOut').then(() => {
              location.reload() // 为了重新实例化vue-router对象 避免bug
            })
          })
        } else if (resCode === 403) {
          router.push({ path: '/401' })
        } else {
          Notification.error({
            message: res.message || 'Error',
            duration: 3 * 1000
          })
        }
        return Promise.reject(res.message || 'Error')
      }
      return resData
    }
  },
  error => {
    console.log('err' + error) // for debug
    if (error.toString().indexOf('Error: timeout') !== -1) {
      Notification.error({
        message: '接口网络超时',
        duration: 3 * 1000
      })
    } else {
      Notification.error({
        message: error.message,
        duration: 3 * 1000
      })
    }
    return Promise.reject(error)
  }
)

export default service
