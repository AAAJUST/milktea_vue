import request from '@/utils/request'
// 分页接口
export function getGoodsTypePage(params){
    return request({
      url: 'http://localhost:8080/goodstype/page',
      method: 'get',
      params
    })
  }

  // 删除接口
export function deleteGoodsType(id){
  return request({
    url: 'http://localhost:8080/goodstype/',
    method: 'delete',
    params: { id }
  })
}

// 新增接口
export function addType(params){
  return request({
    url: 'http://localhost:8080/goodstype',
    method: 'post',
    data: { ...params }
  })
}

// 修改接口
export function editType(params){
  return request({
    url: 'http://localhost:8080/goodstype',
    method: 'put',
    data: { ...params }
  })
}