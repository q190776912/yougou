export default function request(option) {
  const BASE_URL = 'https://api-hmugo-web.itheima.net/api/public/v1'
  return new Promise((resolve, reject) => {
    uni.request({
      url: `${BASE_URL}${option.url}`,
      data: option.data,
      method: option.method || 'GET',
      success: (res) => {
        if (res.data.meta.status === 200) {
          resolve(res.data.message)
        } else {
          uni.showToast({
            title: '获取数据有误！',
            icon: 'none'
          })
          console.log(res.message)
        }
      },
      fail: reject || null
    })
  })
}