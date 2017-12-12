(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.clipIt = factory());
}(this, function () { 'use strict';

  var index = (function (value) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return copyByInput(value, options) || copyByContentEditable(value, options);
  });

  var insertInvisibleEl = function insertInvisibleEl($el) {
    $el.style.zoom = '0';
    $el.style.width = '0';
    $el.style.height = '0';
    $el.style.opacity = '0';
    $el.style.pointerEvents = 'none';
    $el.style.top = '-1000px';
    $el.style.position = 'absolute';
    document.body.appendChild($el);
  };

  var excuteCopy = function excuteCopy($el, value, options) {
    $el.addEventListener('copy', function (e) {
      return e.clipboardData.setData(options.contentType || 'text/plain', value);
    });
    var result = document.execCommand('copy');
    document.body.removeChild($el);
    return result;
  };

  var copyByContentEditable = function copyByContentEditable(value, options) {
    var $el = document.createElement('span');
    $el.innerHTML = value;
    $el.contentEditable = true;
    insertInvisibleEl($el);

    var range = document.createRange();
    range.selectNodeContents($el);
    var selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);

    return excuteCopy($el, value, options);
  };

  var copyByInput = function copyByInput(value, options) {
    var $el = document.createElement('textarea');
    $el.setAttribute('readonly', '');
    insertInvisibleEl($el);

    $el.value = value;
    $el.selectStart = 0;
    $el.selectEnd = $el.value.length;
    $el.select();

    return excuteCopy($el, value, options);
  };

  return index;

}));