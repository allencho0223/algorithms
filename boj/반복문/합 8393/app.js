const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : `${__dirname}/input.txt`;
const input = Number(fs.readFileSync(filePath).toString().trim());

let sum = 0;

for (let idx = 1; idx <= input; idx++) {
  sum += idx;
}

console.log(sum);

function sum(num) {
  if (num === 0) return 0;
  return num + sum(num - 1);
}

console.log(sum(input));