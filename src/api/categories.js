import request from '../utils/request'

function categories() {
  return request({
    url: '/api/public/v1/categories'
  })
}

export {
  categories
}
