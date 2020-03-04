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

function qsearch(data) {
  return request({
    url: '/api/public/v1/goods/qsearch',
    data,
    showLoading: false
  })
}

export {
  search,
  detail,
  qsearch
}
