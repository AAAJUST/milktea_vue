import request from '@/utils/request'
// 分页接口
export function getGoodsPage(params){
    return request({
      url: 'http://localhost:8080/goods/page',
      method: 'get',
      params
    })
  }

// 查询详情
export function queryGoodsById(id){
  return request({
    url: `http://localhost:8080/goods/${id}`,
    method: 'get'
  })
}

// 删除接口
export function deleteGoods(ids){
  return request({
    url: 'http://localhost:8080/goods',
    method: 'delete',
    params: { ids }
  })
}

// 新增接口
export function addGoods(params){
  return request({
    url: 'http://localhost:8080/goods',
    method: 'post',
    data: { ...params }
  })
}

// 修改接口
export function editGoods(params){
  return request({
    url: 'http://localhost:8080/goods',
    method: 'put',
    data: { ...params }
  })
}

export function getallGoods(params){
  return request({
     url:'http://localhost:8080/goods/getGoods',
     method: 'get',
     params
  })
}

export function getGoodsById(idss){
  return request({
    url: `http://localhost:8080/goods/danpin/${idss}`,
    method:'get'
})
}