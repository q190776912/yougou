export default function request({ url, method = 'GET', data, showLoading }) {
  const BASE_URL = 'https://api-hmugo-web.itheima.net'
  return new Promise((resolve, reject) => {
    if (showLoading) {
      uni.showToast({
        title: '加载中',
        icon: 'loading',
        mask: true
      })
    }
    uni.request({
      url: `${BASE_URL}${url}`,
      data,
      method,
      success: ({ data: { message, meta: { status } }} ) => {
        if (status === 200) {
          resolve(message)
        } else {
          uni.showToast({
            title: message,
            icon: 'none'
          })
        }
      },
      fail: reject || null
    })
  })
}