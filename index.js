(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.clipIt = factory());
}(this, function () { 'use strict';

  var index = (function (str) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var $input = document.createElement('textarea');
    $input.setAttribute('readonly', '');
    $input.style.fontSize = '12pt';
    $input.style.width = '0';
    $input.style.height = '0';
    $input.style.opacity = '0';
    $input.style.top = '-1000px';
    $input.style.position = 'absolute';
    document.body.appendChild($input);
    $input.addEventListener('copy', function (e) {
      e.preventDefault();
      e.clipboardData.setData(options.contentType || 'text/plain', e.target.value);
    });
    $input.value = str;
    $input.selectStart = 0;
    $input.selectEnd = $input.value.length;
    $input.select();
    document.execCommand('copy');
    document.body.removeChild($input);
  });

  return index;

}));