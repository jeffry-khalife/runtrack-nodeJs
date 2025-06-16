const fs = require('fs');

const newContent = "Je manipule les fichiers avec un module node !";

fs.writeFileSync('C:/Users/jblun/Downloads/data.txt', newContent, 'utf8');

const data = fs.readFileSync('C:/Users/jblun/Downloads/data.txt', 'utf8');

console.log(data);