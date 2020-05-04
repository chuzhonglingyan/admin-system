import request from '@/utils/request'
import { encrypt } from '@/utils/rsaEncrypt'

export function add(data) {
  return request({
    url: 'operator/save',
    method: 'post',
    data
  })
}

export function del(ids) {
  return request({
    url: 'operator/deleteList',
    method: 'post',
    data: ids
  })
}

export function edit(data) {
  return request({
    url: 'operator/update',
    method: 'post',
    data
  })
}

export function editUser(data) {
  return request({
    url: 'api/users/center',
    method: 'put',
    data
  })
}

export function updatePass(user) {
  const data = {
    oldPass: encrypt(user.oldPass),
    newPass: encrypt(user.newPass)
  }
  return request({
    url: 'api/users/updatePass/',
    method: 'post',
    data
  })
}

export function updateEmail(form) {
  const data = {
    password: encrypt(form.pass),
    email: form.email
  }
  return request({
    url: 'api/users/updateEmail/' + form.code,
    method: 'post',
    data
  })
}

export function changeState(data) {
  return request({
    url: 'operator/changeState',
    method: 'post',
    data
  })
}

export default { add, edit, del, changeState }

