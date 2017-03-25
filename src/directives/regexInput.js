import Vue from 'vue'

const addEvent = (el, binding, vnode, oldVnode) => {
  let inputEl = null
  if (el.tagName.toLowerCase() === 'input') {
    inputEl = el
  } else {
    inputEl = el.getElementsByTagName('input')[0]
  }

  if (!inputEl) {
    global.logger.warn('Can not find input element', el)
    return
  }

  if (inputEl.regexHandler) {
    return
  } else {
    const regex = vnode.data.attrs.regex
    const regexErrorCallback = vnode.data.attrs.regexErrorCallback

    inputEl.regexHandler = function (ev) {
      const newVal = ev.target.value

      /* 可以是空值，       可以是自定义正则表示，         没指定就是正整数 */
      if (newVal === '' || regex && (new RegExp(regex)).test(newVal) || /^[1-9]\d*$/.test(newVal)) {
        inputEl.lastTrueValue = newVal
      } else {
        inputEl.value = inputEl.lastTrueValue ? inputEl.lastTrueValue : ''
        regexErrorCallback && regexErrorCallback()
      }
    }
    inputEl.addEventListener('input', inputEl.regexHandler, false)

    /* 不能在 value 拿到的特殊字符在 keydown 处理 */
    inputEl.numberHandler = function (ev) {
      const inputKey = ev.keyCode
      // '0' charCode 48
      // ...
      // '9' charCode 57
      if (inputKey > 57 || inputKey < 48) { // 不是数字的 字符被按时
        ev.preventDefault()
        return
      }
    }
    if (!regex) {
      inputEl.addEventListener('keypress', inputEl.numberHandler, false)
    }
  }
}

Vue.directive('regex-input', {
  bind: addEvent,
  update: addEvent
})
