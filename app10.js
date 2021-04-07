const {log} = require('./log');
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res)=>{

  const readStream = fs.createReadStream('./Big.file');
  
  readStream.on('data', (content)=>{
    res.end(content);
  });
 
});

server.listen(3000, ()=>{
  log('Server listening port 3000 ');
});