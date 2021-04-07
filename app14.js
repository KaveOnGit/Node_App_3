const http = require("http");
const fs = require("fs");
let filename;

const server = http.createServer((req, res) => {
  /////////////////////////////////////
  // /
  // /IMAGES/OrdenLenina.png
  // /IMAGES/BoevogoKrasnogoZnameni_CCCP.png
  // /IMAGES/TrudovogoKrasnogoZnameni.png
  // /IMAGES/Kutuzov1.png
  // /IMAGES/Suvorov_1.png
  // /IMAGES/Suvorov_2.png
  // /IMAGES/Kutuzov2.png
  // /IMAGES/Suvorov_3.png
  // /IMAGES/RedBarxat.png
  // /IMAGES/Nachimov2.png
  // /IMAGES/Nachimov1.png
  // /IMAGES/Red-star.png
  // /IMAGES/patriotic-war.png
  // /favicon.ico
  ////////////////////////////////////
  switch (req.url) {
    case "/":
      filename = "./PUBLIC/About.html";
      break;
    case "/contacts":
      filename = "./PUBLIC/Contacts.html";
      break;
    case "/about":
      filename = "./PUBLIC/About.html";
      break;
    case "/home":
      filename = "./PUBLIC/Home.html";
      break;
    case "/main":
      filename = "./PUBLIC/Main.html";
      break;
    default:
      filename = "." + req.url;
      break;
  }

  console.log(req.url);
  res.writeHead(200, { "Content-Type": "text/html" });
  //const readFile = fs.createReadStream("./PUBLIC/About.html");

  const readFile = fs.createReadStream(filename);
  readFile.pipe(res);
});

server.listen(3000, () => {
  console.log("Server starts listen port 3000");
});
