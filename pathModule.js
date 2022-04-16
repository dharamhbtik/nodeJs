const path = require('path');

console.log(path.sep);

const myPath = path.join('/content','txtfiles','test.txt');
console.log(myPath);
const pathBase = path.basename(myPath);
console.log(pathBase);

const absolutePath = path.resolve(__dirname,'content','txtfiles','test.txt');
console.log(absolutePath);