const {printError} = require('./printError');
const KawehModule = require('./KawehModule1');

const mul = KawehModule.multiply(20, 30);
const div = KawehModule.divide(30, 2);


console.log(`20 * 30 = ${mul}, 30 / 2 = ${div}` );

printError('This is example of error message');