export default ($el, value, options) => {
  /* istanbul ignore next */
  $el.addEventListener('copy', e => e.clipboardData.setData(options.contentType || 'text/plain', value))
  const result = document.execCommand('copy')
  document.body.removeChild($el)
  return result
}