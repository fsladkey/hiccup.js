const toHiccup = require('./toHiccup');

const attrReplacements = {
  class: "className",
  for: "htmlFor"
}

function reactifyAttrs(attrs) {
  const result = {}
  for (let attr in attrs) {
    const replacement = attrReplacements[attr]
    const key = replacement ? replacement : key
    result[key] = attrs[attr]
  }
  return result
}

module.exports = function react(createElement) {
  return toHiccup(function ({ tag, attrs, children }) {
    return createElement(tag, reactifyAttrs(attrs), ...children)
  })
}
