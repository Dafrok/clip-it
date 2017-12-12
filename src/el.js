export default tag => {
  const $el = document.createElement(tag)
  $el.style.zoom = '0'
  $el.style.width = '0'
  $el.style.height = '0'
  $el.style.opacity = '0'
  $el.style.pointerEvents = 'none'
  $el.style.top = '-1000px'
  $el.style.position = 'absolute'
  document.body.appendChild($el)
  return $el
}
