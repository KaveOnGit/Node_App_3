const chalk = require('chalk');
const printError = text => {
    console.log(chalk.red(text));
}

module.exports = {printError};