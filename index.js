(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.clipIt = factory());
}(this, function () { 'use strict';

  var index = str => {
    const $input = document.createElement('input');
    document.body.appendChild($input)
    $input.value = str
    $input.focus()
    $input.selectStart = 0
    $input.selectEnd = $input.value.length
    $input.select()
    document.body.clientWidth
    document.execCommand('copy')
    document.body.removeChild($input)
  }

  return index;

}));