const chalk = require('chalk')
const getInstallCmd = require('./utils/get-install-cmd')
const output = require('./utils/output')

const program = {
  name: 'create-confluenza-page'
}

exports.help = function() {
  return `
    Only ${chalk.green('<page-name>')} is required.

    If you have any problems, do not hesitate to file an issue:
      ${chalk.cyan('https://github.com/charterhouse/create-confluenza-page/issues/new')}
  `
}

exports.missingPageName = function() {
  return `
Please specify the page name:

  ${chalk.cyan(program.name)} ${chalk.green('<page-name>')}

For example:

  ${chalk.cyan(program.name)} ${chalk.green('intro-page')}

Run ${chalk.cyan(`${program.name} --help`)} to see all options.
`
}

exports.start = function(projectName) {
  const cmd = getInstallCmd()

  return `
  ${chalk.green('Awesome!')} You're now ready to start editting the page.

  Questions? Feedback? Please let us know!

  ${chalk.green('https://github.com/charterhouse/create-confluenza-page/issues')}
`
}
