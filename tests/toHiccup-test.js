const test = require('tape');
const toHiccup = require('../lib/toHiccup');

test('toHiccup', function (t) {
  t.plan(7);
  subject = toHiccup(a => a)

  result = { tag: "h1", attrs: {}, children: [] }
  t.looseEqual(subject(["h1"]), result);

  result = { tag: "p", attrs: {}, children: [] }
  t.looseEqual(subject(["p"]), result);

  result = {
    tag: "li",
    attrs: { class: "active" },
    children: []
  }
  t.looseEqual(subject(["li", { class: "active" }]), result);

  result = { tag: "p", attrs: {}, children: ["text"] }
  t.looseEqual(subject(["p", "text"]), result);

  result = {
    tag: "html",
    attrs: {},
    children: [ { tag: "h1", attrs: {}, children: [] } ]
  }

  t.looseEqual(subject(
    ["html",
      ["h1"]]
  ), result);

  result = {
    tag: "li",
    attrs: { class: "active" },
    children: ["text"]
  }
  t.looseEqual(subject(["li", { class: "active" }, "text"]), result);

  result = {
    tag: "section",
    attrs: { class: "container" },
    children: [
      {
        tag: "h1",
        attrs: { class: "banner" },
        children: [ "Title" ]
      },
      {
        tag: "article",
        attrs: {},
        children: [
          {
            tag: "p",
            attrs: {},
            children: [ "content 1" ]
          },
          {
            tag: "p",
            attrs: {},
            children: [ "content 2" ]
          }
        ]
      }
    ]
  }

  t.looseEqual(subject(
    ["section", { class: "container" },
      ["h1", { class: "banner" }, "Title"],
      ["article",
        ["p", "content 1"],
        ["p", "content 2"]]]
  ), result);
});
