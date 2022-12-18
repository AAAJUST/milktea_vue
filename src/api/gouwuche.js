import request from '@/utils/request'
// 添加进购物车
export function addgouwuche(params){
    return request({
      url: 'http://localhost:8080/gouwuche',
      method: 'post',
      data: { ...params }
    })
  }

// 显示购物车内容
export function getgouwuche(){
  return request({
    url: 'http://localhost:8080/gouwuche',
    method: 'get',
  })
}

// 删除购物车内容
export function deletegouwuche(id){
  return request({
    url: 'http://localhost:8080/gouwuche',
    method: 'delete',
    params: { id }
  })
}

// 批量删除购物车内容
export function deletegouwuches(ids){
  return request({
    url: 'http://localhost:8080/gouwuche/piliang',
    method: 'delete',
    params: { ids }
  })
}