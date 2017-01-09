const repl = require('repl');
const hiccup = require('./lib/hiccup')

const r = repl.start('> ')
Object.assign(r.context, hiccup)
