import copyByContentEditable from './contenteditable.js'
import copyByInput from './input.js'

export default (value, options = {}) =>
  /* istanbul ignore next */
  copyByInput(value, options) || copyByContentEditable(value, options)

