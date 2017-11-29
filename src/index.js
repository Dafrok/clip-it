<<<<<<< HEAD
export default (value, options = {}) => {
  return copyByInput(value, options) || copyByContentEditable(value, options)
=======
export default (str, options = {}) => {
  const $input = document.createElement('textarea');
  $input.setAttribute('readonly', '')
  $input.style.fontSize = '12pt';
  $input.style.width = '0'
  $input.style.height = '0'
  $input.style.opacity = '0'
  $input.style.top = '-1000px'
  $input.style.position = 'absolute'
  document.body.appendChild($input)
  $input.addEventListener('copy', e => {
    e.preventDefault()
    e.clipboardData.setData(options.contentType || 'text/plain', str)
  })
  $input.value = str
  $input.selectStart = 0
  $input.selectEnd = $input.value.length
  $input.select()
  document.execCommand('copy')
  document.body.removeChild($input)
>>>>>>> 273027a86d28c87bcf00178f8d27651773f6e1d6
}

const insertInvisibleEl = $el => {
  $el.style.zoom = '0'
  $el.style.width = '0'
  $el.style.height = '0'
  $el.style.opacity = '0'
  $el.style.pointerEvents = 'none'
  $el.style.top = '-1000px'
  $el.style.position = 'absolute'
  document.body.appendChild($el)
}

const excuteCopy = ($el, value, options) => {
  $el.addEventListener('copy', e => e.clipboardData.setData(options.contentType || 'text/plain', value))
  const result = document.execCommand('copy')
  document.body.removeChild($el)
  return result
}

const copyByContentEditable = (value, options) => {
  const $el = document.createElement('span')
  $el.innerHTML = value
  $el.contentEditable = true
  insertInvisibleEl($el);

  const range = document.createRange()
  range.selectNodeContents($el)
  const selection = window.getSelection()
  selection.removeAllRanges()
  selection.addRange(range)

  return excuteCopy($el, value, options)
}

const copyByInput = (value, options) => {
  const $el = document.createElement('textarea')
  $el.setAttribute('readonly', '')
  insertInvisibleEl($el)

  $el.value = value
  $el.selectStart = 0
  $el.selectEnd = $input.value.length
  $el.select()

  return excuteCopy($el, value, options)
}