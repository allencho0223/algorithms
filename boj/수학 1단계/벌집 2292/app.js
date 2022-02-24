const fs = require('fs');
const input = fs.readFileSync(`${process.cwd()}/수학 1단계/벌집 2292/input.txt`).toString().trim();
// const input = fs.readFileSync(`/dev/stdin`).toString().trim();

let stepsCount = 1;
let sum = 1;

while (sum < Number(input)) {
  sum += 6 * stepsCount;
  stepsCount++;
}

console.log(stepsCount);
