const fs = require('fs');

const data = fs.readFileSync('C:/Users/jblun/Downloads/data.txt', 'utf8');

let result = '';
for (let i = 0; i < data.length; i += 2) {
  result += data[i];
}

console.log(result);
