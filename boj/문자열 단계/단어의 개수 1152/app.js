const fs = require("fs");
const input = fs.readFileSync(`${process.cwd()}/문자열 단계/단어의 개수 1152/input.txt`).toString().trim().split(' ');
// const input = fs.readFileSync(`dev/stdin`).toString().trim().split('\n');

// Solution 1 (hackish)
// if (input.length === 1 && input[0] === '') {
//   console.log(0);
//   return;
// }
// console.log(input.length);

// Solution 2
let wordsCount = 0;
for (const word of input) {
    if (word !== '') {
        wordsCount++;
    }
}
console.log(wordsCount);