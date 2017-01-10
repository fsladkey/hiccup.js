const toHiccup = require('./toHiccup');
const SELF_CLOSING_TAGS = ['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input',
'keygen', 'link', 'meta', 'param', 'source', 'track', 'wbr']

function formatAttrs(attrs) {
  const attrNames = Object.keys(attrs)
  if (attrNames.length === 0) return ''
  return ' ' + attrNames.map(name => `${name}="${attrs[name]}"`).join(" ")
}

module.exports = toHiccup(function ({ tag, attrs, children, nesting }) {
  return SELF_CLOSING_TAGS.includes(tag) ?
    `<${tag}${formatAttrs(attrs)} />` :
    `<${tag}${formatAttrs(attrs)}>` + children.join('') + `</${tag}>`
})
