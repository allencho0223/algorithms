const fs = require("fs");
const input = fs.readFileSync(`${process.cwd()}/문자열 단계/숫자의 합 11720/input.txt`).toString().trim().split('\n');
// const input = fs.readFileSync(`dev/stdin`).toString().trim().split('\n');

const sumOfDigits = input[1].split('').reduce((prev, curr) => Number(prev) + Number(curr), 0);
console.log(sumOfDigits);