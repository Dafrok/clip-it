import excuteCopy from './copy.js'
import createInvisibleEl from './el.js'

export default (value, options) => {
  const $el = createInvisibleEl('span')
  $el.innerHTML = value
  $el.contentEditable = true

  const range = document.createRange()
  range.selectNodeContents($el)
  const selection = window.getSelection()
  selection.removeAllRanges()
  selection.addRange(range)

  return excuteCopy($el, value, options)
}