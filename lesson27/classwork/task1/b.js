var sum = require('./a').sum;

function randomIntInRange (low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);
}

var x = randomIntInRange(0, 100);
var y = randomIntInRange(0, 100);

console.log('x = ' + x);
console.log('y = ' + y);
console.log('x + y => ');

sum(x, y);