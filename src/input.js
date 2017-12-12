import excuteCopy from './copy.js'
import createInvisibleEl from './el.js'

export default (value, options) => {
  const $el = createInvisibleEl('textarea')
  $el.setAttribute('readonly', '')

  $el.value = value
  $el.selectStart = 0
  $el.selectEnd = $el.value.length
  $el.select()

  return excuteCopy($el, value, options)
}