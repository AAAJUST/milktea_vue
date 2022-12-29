import request from '@/utils/request'
// 插入接口
export function getdatagoods(){
    return request({
      url: 'http://39.103.211.19:8080/data/goods',
      method: 'get',
    })
  }

export function getdatagoodsname(){
  return request({
    url: 'http://39.103.211.19:8080/data/goodsname',
    method: 'get',
  })
}

export function getdatagoodsnumber(){
  return request({
    url: 'http://39.103.211.19:8080/data/goodsnumber',
    method: 'get',
  })
}