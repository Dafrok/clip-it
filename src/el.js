export default tag => {
  const $el = document.createElement(tag)
  $el.style.pointerEvents = 'none'
  $el.style.top = '-1000px'
  $el.style.left = '-1000px'
  $el.transform = 'scale(0)'
  $el.style.position = 'absolute'
  document.body.appendChild($el)
  return $el
}
