const fs = require('fs');
const path = require('path');

const myDir = path.join(__dirname, "AAA");
const myFile = path.join(myDir, 'MyFile.txt');

// fs.mkdir( myDir, (err)=> {
//     if(err)throw err;
//     console.log('Directory added');
// });

// fs.appendFile( myFile, 'xxxxxxxx44444444444444444\n33333', (err)=> {
//     if(err)throw err;
//     console.log('Directory added');
// });

// fs.unlink( myFile, (err)=> {
//     if(err)throw err;
//     console.log('File deleted');
// });

fs.rmdir( myDir, (err)=> {
    if(err)throw err;
    console.log('Directory removed');
});