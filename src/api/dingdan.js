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