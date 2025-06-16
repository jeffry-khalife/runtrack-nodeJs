const fs = require('node:fs');
fs.readFile('C:/Users/jblun/Downloads/data.txt', 'utf8', (err, data) => {
  console.log(data);
});