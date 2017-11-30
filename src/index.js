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
}
