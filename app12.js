const { log } = require("./log");
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  
  const readStream = fs.createReadStream("./Big.file");

  readStream.pipe(res);

  //res.end('Bye*************')  
});

server.listen(3000, () => {
  log("Server listeninng on port 3000");
});
