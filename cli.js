#! /usr/bin/env node

const chalk = require('chalk')
const program = require('commander')
const lib = require('.')
const pkg = require('./package.json')

const messages = lib.messages
const createConfluenzaPage = lib.createConfluenzaPage

let pageName

program
  .version(pkg.version)
  .arguments('<page-name>')
  .usage(`${chalk.green('<page-name>')} [options]`)
  .action(function(name) {
    pageName = name
  })
  .allowUnknownOption()
  .on('--help', messages.help)
  .parse(process.argv)

const example = program.example

createConfluenzaPage({
  pageName,
  example
})
