# clip-it

A totally easy way for modern browsers to put something into clipboard.

## Install

```
$ npm i --save clip-it
```

## Usage

**ATTENTION:** The `clip-it` API must be triggered in the same callstack with a trusted event.

```html
<button>COPY</button>
```

```javascript
import clipIt from 'clip-it'

const $btn = document.querySelector('button')
$btn.addEventListner('click', e => clipIt('Hello world!'))
```
