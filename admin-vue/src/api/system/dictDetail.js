import request from '@/utils/request'
import { convertData } from '@/api/data'

export function get(dictName) {
  const data = convertData({
    dictName,
    current: 1,
    size: 9999
  })
  return request({
    url: 'dictDetail/list',
    method: 'post',
    data
  })
}

export function getDictMap(dictName) {
  const params = {
    dictName,
    current: 1,
    size: 9999
  }
  return request({
    url: 'api/dictDetail/map',
    method: 'get',
    params
  })
}

export function add(data) {
  return request({
    url: 'dictDetail/save',
    method: 'post',
    data
  })
}

export function del(id) {
  const data = { id: id }
  return request({
    url: 'dictDetail/delete',
    method: 'post',
    data
  })
}

export function edit(data) {
  return request({
    url: 'dictDetail/update',
    method: 'post',
    data
  })
}

export default { add, edit, del }
