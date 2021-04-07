const fs = require('fs');

const myReadStream = fs.createReadStream(__dirname + '/ReadMe_BigFile.txt');

myReadStream.on('data', (chunk) => {
   console.log('new chunk received');
   console.log(chunk);
})