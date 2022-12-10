import request from '@/utils/request'
// 查询接口
export function getGoods(){
    return request({
      url: 'http://localhost:8080/frontgoods',
      method: 'get',
    })
  }
