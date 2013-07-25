var copy = require('../');

var obj = { a: 3, b: 4, c: 5 };
var dup = copy(obj);
dup.b *= 111;

console.log('original: ', obj);
console.log('copy: ', dup);
