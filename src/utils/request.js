export default function request({ url, method = 'GET', data }) {
  const BASE_URL = 'https://api-hmugo-web.itheima.net'
  return new Promise((resolve, reject) => {
    uni.request({
      url: `${BASE_URL}${url}`,
      data,
      method,
      success: ({ data: { message, meta: { status } }} ) => {
        if (status === 200) {
          resolve(message)
        } else {
          uni.showToast({
            title: '获取数据有误！',
            icon: 'none'
          })
          console.log(message)
        }
      },
      fail: reject || null
    })
  })
}