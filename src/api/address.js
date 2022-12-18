import request from '@/utils/request'
// 插入接口
export function setaddress(params){
    return request({
      url: 'http://localhost:8080/address',
      method: 'post',
      params: {...params }
    })
  }

export function getaddress(){
  return request({
    url: 'http://localhost:8080/address',
    method: 'get',
  })
}

export function getoneaddress(){
  return request({
    url: 'http://localhost:8080/address/one',
    method: 'get',
  })
}

export function getonesaddress(id){
  return request({
    url: `http://localhost:8080/address/${id}`,
    method: 'get',
  })
}

export function updateaddress(id){
  return request({
    url: `http://localhost:8080/address/${id}`,
    method: 'put',
  })
}