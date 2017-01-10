const test = require('tape');
const React = require('react')
const toReact = require('../lib/toReact')(React.createElement);

test('toReact', function (t) {
  const createElement = React.createElement
  t.plan(7);

  result = createElement('h1')
  t.looseEqual(toReact(["h1"]), result);

  result = createElement('p')
  t.looseEqual(toReact(["p"]), result);

  result = createElement('li', { className: "active" })
  t.looseEqual(toReact(["li", { class: "active" }]), result);

  result = createElement('p', { className: "active" }, "text")
  t.looseEqual(toReact(["p", { class: "active" }, "text"]), result);

  result = createElement('p', null, 'text')
  t.looseEqual(toReact(["p", "text"]), result);

  result = createElement('html', null, createElement('h1'))
  t.looseEqual(toReact(
    ["html",
      ["h1"]]
  ), result);

  result = "<section class=\"container\"><h1 class=\"banner\">Title</h1><article><p>content 1</p><p>content 2</p></article></section>"
  result = createElement(
    'section',
    { className: "container" },
    createElement(
      'h1',
      { className: "banner" },
      'Title'
    ),
    createElement(
      'article',
      null,
      createElement(
        'p',
        null,
        'content 1'
      ),
      createElement(
        'p',
        null,
        "content 2"
      )
    )
  )

  t.looseEqual(toReact(
    ["section", { class: "container" },
      ["h1", { class: "banner" }, "Title"],
      ["article",
        ["p", "content 1"],
        ["p", "content 2"]]]
  ), result);
});
