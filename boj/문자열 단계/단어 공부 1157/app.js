const fs = require("fs");
// const input = fs.readFileSync(`/dev/stdin`).toString().toUpperCase().split('');
const input = fs.readFileSync(`${process.cwd()}/문자열 단계/단어 공부 1157/input.txt`).toString().toUpperCase().split('');

const obj = {};
for (const char of input) {
  obj[char] = obj[char] ? obj[char] + 1 : 1;
}

let highestChar = "";
let count = 0;
for (const [key, value] of Object.entries(obj)) {
  if (value > count) {
    count = value;
    highestChar = key;
  } else if (value === count) {
    console.log("?");
    return;
  }
}

console.log(highestChar);