# clip-it

A totally easy way for modern browsers to put something into clipboard.

## Install

```bash
$ npm i --save clip-it
```

## Usage

**ATTENTION:** The `clip-it` API must be triggered in the same callstack with a trusted event.

HTML

```html
<button>Copy as Text</button>
<button>Copy as HTML</button>
```

JavaScript

```javascript
import clipIt from 'clip-it'

const $btnCopyText = document.querySelector('button')
const $btnCopyHTML = document.querySelector('button')

$btnCopyText.addEventListner('click', e => clipIt('Hello World'))

// Some browsers only supports plain text. (e.g. iOS Safari)
$btnCopyHTML.addEventListner('click', e => clipIt('<span style="color: red;">Hello world!</span>', {
  contentType: 'text/html'
}))
```
