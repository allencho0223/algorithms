const fs = require("fs");
const input = fs.readFileSync(`${process.cwd()}/문자열 단계/다이얼 5622/input.txt`).toString().trim();
// const input = fs.readFileSync(`/dev/stdin`).toString().trim();

const obj = {
  3: 'ABC',
  4: 'DEF',
  5: 'GHI',
  6: 'JKL',
  7: 'MNO',
  8: 'PQRS',
  9: 'TUV',
  10: 'WXYZ'
};

let count = 0;
for (let i = 0; i < input.length; i++) {
  for (let j = 3; j <= 10; j++) {
    if (obj[j].includes(input[i])) {
      count += j;
    }
  }
}

console.log(count);