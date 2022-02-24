const fs = require("fs");
// const input = fs.readFileSync(`${process.cwd()}/문자열 단계/상수 2908/input.txt`).toString().split(' ');
const input = fs.readFileSync(`dev/stdin`).toString().split(' ');

const fisrtNumber = Number(input[0].split('').reverse().join(''));
const secondNumber = Number(input[1].split('').reverse().join(''));

console.log(fisrtNumber > secondNumber ? fisrtNumber : secondNumber);