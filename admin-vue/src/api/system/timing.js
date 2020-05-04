import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'scheduleJob/save',
    method: 'post',
    data
  })
}

export function del(ids) {
  return request({
    url: 'scheduleJob/deleteList',
    method: 'post',
    data: ids
  })
}

export function edit(data) {
  return request({
    url: 'scheduleJob/update',
    method: 'post',
    data
  })
}

export function changeState(data) {
  return request({
    url: 'scheduleJob/changeState',
    method: 'post',
    data
  })
}

export function execution(id) {
  const data = { id: id }
  return request({
    url: 'scheduleJob/exec',
    method: 'post',
    data
  })
}

export default { del, changeState, execution, add, edit }
