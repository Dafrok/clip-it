(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.clipIt = factory());
}(this, function () { 'use strict';

  var index = (function (str) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var $input = document.createElement('input');
    document.body.appendChild($input);
    $input.addEventListener(function (e) {
      e.preventDefault();
      e.clipboardData.setData(options.contentType || 'text/plain', e.target.value);
    });
    $input.value = str;
    $input.focus();
    $input.selectStart = 0;
    $input.selectEnd = $input.value.length;
    $input.select();
    setTimeout(function () {
      document.execCommand('copy');
      document.body.removeChild($input);
    });
  });

  return index;

}));