const fs = require("fs");
const input = fs.readFileSync(`${process.cwd()}/문자열 단계/문자열 반복 2675/input.txt`).toString().trim().split('\n');
// const input = fs.readFileSync(`dev/stdin`).toString().trim().split('\n');

for (let i = 1; i < input.length; i++) {
  const count = Number(input[i].split(' ')[0]);
  const chars = input[i].split(' ')[1];
  let string = "";
  for (let j = 0; j < chars.length; j++) {
    string += chars[j].repeat(count);
  }
  console.log(string);
}