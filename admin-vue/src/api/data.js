import request from '@/utils/request'

export function initData(url, params) {
  const data = convertData(params)
  return request({
    url: url,
    method: 'post',
    data
  })
}

export function convertData(params) {
  return JSON.stringify(params)
}

export function download(url, params) {
  const data = convertData(params)
  return request({
    url: url,
    method: 'post',
    data,
    responseType: 'blob'
  })
}

