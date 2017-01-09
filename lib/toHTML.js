const toHiccup = require('./toHiccup');

function formatAttrs(attrs) {
  const attrNames = Object.keys(attrs)
  if (attrNames.length === 0) return ''
  return ' ' + attrNames.map(name => `${name}="${attrs[name]}"`).join(" ")
}

module.exports = toHiccup(function ({ tag, attrs, children }) {
  return `<${tag}${formatAttrs(attrs)}>\n` + children.join('') + `\n</${tag}>`
})
