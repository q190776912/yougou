import request from '../utils/request'

function swiperdata() {
  return request({
    url: '/api/public/v1/home/swiperdata'
  })
}

function catitems() {
  return request({
    url: '/api/public/v1/home/catitems'
  })
}

function floordata() {
  return request({
    url: '/api/public/v1/home/floordata'
  })
}

export {
  swiperdata,
  catitems,
  floordata
}
