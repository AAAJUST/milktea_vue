import request from '@/utils/request'
// 插入接口
export function setdingdan(ids){
    return request({
      url: 'http://localhost:8080/dingdan',
      method: 'post',
      params: { ids }
    })
  }

// 查询接口
export function getdingdan(){
    return request({
      url: 'http://localhost:8080/dingdan',
      method: 'get',
    })
  }

// 后台查询接口
export function getdingdanback(params){
  return request({
    url: 'http://localhost:8080/dingdanback/page',
    method: 'get',
    params
  })
}

// 后台修改接口
export function updatedingdanback(ids){
  return request({
    url: 'http://localhost:8080/dingdanback',
    method: 'put',
    params:{ids}
  })
}