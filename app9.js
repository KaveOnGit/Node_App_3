const fs = require('fs');

const file = fs.createWriteStream('./Big.file');

for(let i=0; i<= 100000; i++) {
  file.write('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip .\n');
}

file.end();