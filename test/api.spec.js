import clipIt from '@/index.js'
import copyByContentEditable from '@/contenteditable.js'
import copyByInput from '@/input.js'

let clipboard = ''

const execCommand = document.execCommand
const customExecCommand = name => {
  switch (name) {
    case 'copy':
      clipboard = document.activeElement.value
      return true
    case 'paste':
      const $board = document.createElement('span')
      $board.innerHTML = clipboard
      document.activeElement.value = $board.innerText
      return true
    default:
      return false
  }
}

document.execCommand = customExecCommand

describe('Main API', function () {
  it ('clip plain text', function () {
    clipIt(2333)
    const $input = document.createElement('input')
    document.body.appendChild($input)
    $input.focus()
    document.execCommand('paste')
    expect($input.value).toBe('2333')
  })

  it ('clip html', function () {
    clipIt('<span>6666</span>', {
      contentType: 'text/html'
    })
    const $input = document.createElement('input')
    document.body.appendChild($input)
    $input.focus()
    document.execCommand('paste')
    expect($input.value).toBe('6666')
  })
})

describe('Clip functions', function () {
  it ('copy by contenteditable', function () {
    expect(copyByContentEditable()).toBe(true)
  })

  it ('copy by input', function () {
    expect(copyByInput()).toBe(true)
  })
})