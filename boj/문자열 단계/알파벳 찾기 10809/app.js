const fs = require('fs');
// const input = fs.readFileSync(`${process.cwd()}/문자열 단계/알파벳 찾기 10809/input.txt`).toString().split(' ');
// console.log({ input: input }); // [ 'baekjoon' ]

const input = fs.readFileSync(`${process.cwd()}/문자열 단계/알파벳 찾기 10809/input.txt`).toString().trim();
// console.log({ input: input }); // 'baekjoon'

let positionString = "";
for (let i = 97; i <= 122; i++) {
  let matched = false;
  for (let j = 0; j < input.length; j++) {
    const idx = input.indexOf(input[j]);
    if (input[j] === String.fromCharCode(i)) {
      positionString += `${idx.toString()} `;
      matched = true;
      break;
    }
  }
  if (!matched) {
    positionString += "-1 ";
  }
}

console.log(positionString);