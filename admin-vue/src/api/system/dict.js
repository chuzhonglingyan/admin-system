import request from '@/utils/request'

export function getDicts() {
  return request({
    url: 'dict/all',
    method: 'get'
  })
}

export function add(data) {
  return request({
    url: 'dict/save',
    method: 'post',
    data
  })
}

export function del(id) {
  const data = { id: id }
  return request({
    url: 'dict/delete',
    method: 'post',
    data
  })
}

export function edit(data) {
  return request({
    url: 'dict/update',
    method: 'post',
    data
  })
}

export default { add, edit, del }
