const {log} = require('./log')
const fs = require('fs');

const myReadStream = fs.createReadStream(__dirname + '/ReadMe_BigFile.txt');

setTimeout(() => {
    const data = myReadStream.read(3)
    log(data);
}, 500);