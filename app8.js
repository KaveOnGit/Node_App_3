const {log} = require('./log')
const fs = require('fs');

const readStream = fs.createReadStream(__dirname + '/ReadMe_BigFile.txt');
const writeStream = fs.createWriteStream(__dirname + '/ReadMe_ConvertedFile.txt');

readStream.on('data', (chunk)=>{
    //                  Buffer.toString()
   const convertedData = chunk.toString().toLowerCase();
   writeStream.write(convertedData);
})