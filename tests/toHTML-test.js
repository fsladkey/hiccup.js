const test = require('tape');
const toHTML = require('../lib/toHTML');

test('toHTML', function (t) {
  t.plan(7);

  result = "<h1></h1>"
  t.equal(toHTML(["h1"]), result);

  result = "<p></p>"
  t.equal(toHTML(["p"]), result);

  result = "<li class=\"active\"></li>"
  t.equal(toHTML(["li", { class: "active" }]), result);

  result = "<p class=\"active\">text</p>"
  t.looseEqual(toHTML(["p", { class: "active" }, "text"]), result);

  result = "<p>text</p>"
  t.looseEqual(toHTML(["p", "text"]), result);

  result = "<html><h1></h1></html>"
  t.equal(toHTML(
    ["html",
      ["h1"]]
  ), result);

  result = "<section class=\"container\"><h1 class=\"banner\">Title</h1><article><p>content 1</p><p>content 2</p></article></section>"

  t.equal(toHTML(
    ["section", { class: "container" },
      ["h1", { class: "banner" }, "Title"],
      ["article",
        ["p", "content 1"],
        ["p", "content 2"]]]
  ), result);
});
