const fs = require("fs");
const input = fs.readFileSync(`${process.cwd()}/문자열 단계/그룹 단어 체커 1316/input.txt`).toString().trim().split('\n');
// const input = fs.readFileSync(`/dev/stdin`).toString().trim().split('\n');

let groupWordsCount = 0;
for (let i = 1; i <= Number(input[0]); i++) {
  const charsInWord = new Set();
  let prevChar = "";
  let validGroupWord = true;
  for (let j = 0; j < input[i].length; j++) {
    if (j === 0) {
      prevChar = input[i][j];
      charsInWord.add(input[i][j]);
      continue;
    }
    
    if (prevChar !== input[i][j] && charsInWord.has(input[i][j])) {
      validGroupWord = false;
      break;
    }
    prevChar = input[i][j];
    charsInWord.add(prevChar);
  }
  if (validGroupWord) {
    groupWordsCount++;
  }
}

console.log(groupWordsCount);