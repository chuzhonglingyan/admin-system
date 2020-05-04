import request from '@/utils/request'

// 获取所有的Role
export function getAll() {
  return request({
    url: 'role/getEnableList',
    method: 'post'
  })
}

export function add(data) {
  return request({
    url: 'role/save',
    method: 'post',
    data
  })
}

export function get(data) {
  return request({
    url: 'role/getInfo',
    method: 'post',
    data
  })
}

export function getLevel() {
  return request({
    url: 'api/roles/level',
    method: 'get'
  })
}

export function del(ids) {
  return request({
    url: 'role/deleteList',
    method: 'post',
    data: ids
  })
}

export function edit(data) {
  return request({
    url: 'role/update',
    method: 'post',
    data
  })
}

export function changeState(data) {
  return request({
    url: 'role/changeState',
    method: 'post',
    data
  })
}

export function editMenu(data) {
  return request({
    url: 'role/menu/saveMenuList',
    method: 'post',
    data
  })
}

export default { add, edit, del, get, editMenu, getLevel, changeState }
