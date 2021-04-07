const fs = require('fs');

const myReadStream = fs.createReadStream(__dirname + '/ReadMe_BigFile.txt');

myReadStream.on('data', chunk => {
    console.log('---------------------------------');
    console.log(chunk);
    console.log('---------------------------------');
});
  
myReadStream.on('open', () => {
    console.log('******************** STREAM OPENED *************************\n\n');
});
  
myReadStream.on('end', () => {
    console.log('\n\n******************** STREAM CLOSED *************************');
});

