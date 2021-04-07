const {log} = require('./log')
const fs = require('fs');

const myReadStream = fs.createReadStream(__dirname + '/ReadMe.txt');

setTimeout(() => {

    const data1 = myReadStream.read(3);
    console.log(data1);
  
    const data2 = myReadStream.read(3);
    console.log(data2);

    const data3 = myReadStream.read(3);
    console.log(data3);

}, 500);

