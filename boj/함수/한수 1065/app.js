const fs = require("fs");
const input = fs.readFileSync(`${process.cwd()}/함수/한수 1065/input.txt`).toString().trim();

let validArithmeticSequence = 0;
for (let i = 1; i <= Number(input); i++) {
  if (i < 100) {
    validArithmeticSequence++;
    continue;
  }
  const stringIndex = i.toString();
  if (
    Number(stringIndex[1]) - Number(stringIndex[0]) === Number(stringIndex[2]) - Number(stringIndex[1])
  ) {
    validArithmeticSequence++;
  }
}
console.log(validArithmeticSequence);