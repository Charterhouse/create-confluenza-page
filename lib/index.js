const path = require('path')
const fs = require('fs')
const messages = require('./messages')

module.exports = function createConfluenzaPage(opts) {
  const pageName = opts.pageName

  if (!pageName) {
    console.log(messages.missingPageName())
    process.exit(1)
  }

  console.log(messages.start())
}
