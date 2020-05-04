import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/operator/login',
    method: 'post',
    data
  })
}

export function getInfo() {
  return request({
    url: '/operator/getInfo',
    method: 'post'
  })
}

export function getCodeImg() {
  return request({
    url: '/operator/code',
    method: 'get'
  })
}

export function logout() {
  return request({
    url: '/operator/loginOut',
    method: 'post'
  })
}
