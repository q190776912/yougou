import request from '../utils/request'

function swiperdata() {
  return request({
    url: '/home/swiperdata'
  })
}

function catitems() {
  return request({
    url: '/home/catitems'
  })
}

function floordata() {
  return request({
    url: '/home/floordata'
  })
}

export {
  swiperdata,
  catitems,
  floordata
}
