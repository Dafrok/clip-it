const 

export default (str, options = {}) => {
  const $input = document.createElement('input');
  document.body.appendChild($input)
  $input.addEventListener(e => {
    e.preventDefault()
    e.clipboardData.setData(options.contentType || 'text/plain', e.target.value)
  })
  $input.value = str
  $input.focus()
  $input.selectStart = 0
  $input.selectEnd = $input.value.length
  $input.select()
  setTimeout(setTimeout => {
    document.execCommand('copy')
    document.body.removeChild($input)
  })
}
