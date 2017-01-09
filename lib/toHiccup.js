function isAttrs(obj) {
  return typeof obj === 'object' && obj !== null && !Array.isArray(obj)
}

function includesAttrs(args) {
  return args.length > 0 && isAttrs(args[0])
}

module.exports = function toHiccup(toResult) {
  return function html([tag, ...rest]) {
    const attrs = includesAttrs(rest) ? rest.shift() : {}
    const children = rest.map(child =>
      (typeof child === 'string') ?
        child :
        toHiccup(toResult)(child)
    )
    return toResult({ tag: tag, attrs: attrs, children: children })
  }
}
