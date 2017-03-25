import Vue from 'vue'

const configurations = (router, store) => {
  Vue.http.options.root = '/api'
  Vue.http.headers.common['version'] = '1'

  Vue.http.interceptors.push((request, next) => {
    let timeoutID = null
    if (request.params.NoLoader) { // 如果参数中有 'NoLoader', 就不显示loader
      console.log('no loader for request:', request.url)
    } else {
      // Indicator.open()
      timeoutID = setTimeout(() => {
        // 全局超时逻辑写在这里
        // Indicator.close()
        console.log('time out')

        request.abort() // cancel request
      }, 15 * 1000)
    }

    next((response) => {
      if (timeoutID) {
        clearTimeout(timeoutID)
        // Indicator.close()
      }

      if (!response.ok) {
        switch (response.status) {
          // 根据不同的错误，处理
          case 401:
            router.replace({ name: 'signin', query: { redirect: router.currentRoute.path }})
            console.log('login first')
            break
          case 404:
            // 不知道有没有报 404 但不需要跳转的页面
            router.replace({ name: 'home' })
            global.logger.toast(404, '此内容不存在', response.url)
            break
          case 500:
            if (response.url.indexOf('NoHandleErr') > 0) {
              break
            }
            const errorData = response.body
            if (errorData.type === 'BUSINESS') { // 业务的错误，使用 Indicator 显示，阻止用户的交互，显示3秒
              // Indicator.open({ text: errorData.message, duration: 3000, spinnerType: 'message' })
            } else if (errorData.message) { // 系统的错误，只在debug模式下面显示，用toast显示
              global.logger.toast(errorData.message)
            } else {
              global.logger.toast('Response does not have message, see url', response.url)
            }
            break
          default:
            break
        }
      }
    })
  })
}
export default configurations
