const fs = require('fs');

const readStream = fs.createReadStream('./Big.file');
const writeStream = fs.createWriteStream('./Big2.file');

readStream.pipe(writeStream);