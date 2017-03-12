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
<button>COPY</button>
```

JavaScript
```javascript
import clipIt from 'clip-it'

const $btn = document.querySelector('button')
$btn.addEventListner('click', e => clipIt('Hello world!'))
```
