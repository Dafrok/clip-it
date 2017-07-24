export default (str, options = {}) => {
  const $input = document.createElement('input');
  $input.style.width = '0'
  $input.style.height = '0'
  $input.style.opacity = '0'
  $input.style.top = '-9999px'
  $input.style.position = 'fixed'
  document.body.appendChild($input)
  $input.addEventListener('copy', e => {
    e.preventDefault()
    e.clipboardData.setData(options.contentType || 'text/plain', e.target.value)
  })
  $input.value = str
  $input.focus()
  $input.selectStart = 0
  $input.selectEnd = $input.value.length
  $input.select()
  setTimeout(() => {
    document.execCommand('copy')
    document.body.removeChild($input)
  })
}
