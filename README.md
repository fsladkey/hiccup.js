# Hiccup.js

Hiccup is a javascript library inspired by the awesome clojure library [hiccup](https://github.com/weavejester/hiccup). Hiccup takes nested arrays and returns HTML, or React elements.

#### Generating HTML
```js
import { html } from 'hiccup'

=> html(["script"])
"<script></script>"
=> html(["p"])
"<p />"
=> html(
  ["section", { class: "container" },
    ["h1", { class: "banner" }, "Title"],
    ["article",
      ["p", "content 1"],
      ["p", "content 2"]]]
)
"<section class=\"container\"><h1 class=\"banner\">Title</h1><article><p>content 1</p><p>content 2</p></article></section>"
```

The same data can be passed to the `react` method to generate react elements, allowing readable react to be written without JSX.
```js
import React from 'react'
import { renderElement } from 'hiccup'
// hiccup takes the element creation function so that you can swap out React for Preact or something else with the same API.
const r = renderElement(React.createElement)

// no JSX
function MyComponent({ title, content, items }) {
  return r(
    ["section", { class: "container" },
      [Header, { class: "active" }, title],
      ["article",
        ["p", content],
        ["ul",
          items.map(item =>
            ["li", { key: item.id }, item.content]
          )]]]
  )
}
```
