const fs = require("fs");
// const input = fs.readFileSync("dev/stdin").toString().trim().split('\n');
const input = fs.readFileSync(`${process.cwd()}/2577/input.txt`).toString().trim().split('\n').map(num => Number(num));

const multiplyOfNumbers = (input.reduce((prev, curr) => prev * curr, 1)).toString();
console.log(multiplyOfNumbers);
for (i = 0; i <= 9; i++) {
  let count = 0;

  for (let j = 0; j < multiplyOfNumbers.length; j++) {
    if (Number(multiplyOfNumbers[j]) === i) {
      count++
    }
  }
  console.log(count);
}