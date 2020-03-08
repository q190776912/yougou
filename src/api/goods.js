import request from '../utils/request'

function search(data) {
  return request({
    url: '/api/public/v1/goods/search',
    data,
    showLoading: false
  })
}

function detail(data) {
  return request({
    url: '/api/public/v1/goods/detail',
    data,
    showLoading: false
  })
}

function goodslist(data) {
  return request({
    url: '/api/public/v1/goods/goodslist',
    data,
    showLoading: false
  })
}

export {
  search,
  detail,
  goodslist
}
