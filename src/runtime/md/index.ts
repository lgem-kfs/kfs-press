const MarkdownIt = require('markdown-it')
const fs = require('fs-extra')
const path = require('path')

const test = fs.readFileSync(path.join(__dirname, 'index.md'), 'utf-8')

const md = new MarkdownIt()
const result = md.render(test)
console.log(result)
