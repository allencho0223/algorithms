const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const count = Number(input[0]);
const numberStr = input[1].split(' ');

const numbers = numberStr.map(function(cur) {
  return Number(cur);
});

const minValue = Math.min.apply(Math, numbers);
const maxValue = Math.max.apply(Math, numbers);

console.log(`${minValue} ${maxValue}`);