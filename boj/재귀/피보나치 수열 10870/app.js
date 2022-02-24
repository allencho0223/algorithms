const fs = require('fs');
// const input = Number(fs.readFileSync(`${__dirname}/input.txt`).toString().trim());
const input = Number(fs.readFileSync(`/dev/stdin`).toString().trim());

function fibonacci(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

let fibonacciNumber = fibonacci(input);
console.log(fibonacciNumber);