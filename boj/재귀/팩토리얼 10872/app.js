const fs = require('fs');
const input = fs.readFileSync(`${__dirname}/input.txt`).toString().trim();
const input = fs.readFileSync(`/dev/stdin`).toString().trim();

function factorial(n) {
  console.log(n);
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(Number(input)));