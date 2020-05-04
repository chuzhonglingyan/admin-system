import request from '@/utils/request'

export function getMenusTree() {
  return request({
    url: '/menu/getAllMenuTree',
    method: 'post'
  })
}

export function getEnableMenusTree() {
  return request({
    url: '/menu/getEnabledMenuTree',
    method: 'post'
  })
}

export function buildMenus() {
  return request({
    url: '/menu/build',
    method: 'post'
  })
}

export function add(data) {
  return request({
    url: '/menu/save',
    method: 'post',
    data
  })
}

export function del(ids) {
  return request({
    url: '/menu/deleteList',
    method: 'post',
    data: ids
  })
}

export function edit(data) {
  return request({
    url: '/menu/update',
    method: 'post',
    data
  })
}

export function changeState(data) {
  return request({
    url: 'menu/changeState',
    method: 'post',
    data
  })
}

export default { add, edit, del, getMenusTree, changeState }
