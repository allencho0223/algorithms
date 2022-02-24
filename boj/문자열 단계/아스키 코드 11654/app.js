const fs = require("fs");
const input = fs.readFileSync(`${process.cwd()}/문자열 단계/아스키 코드 11654/input.txt`).toString().trim();
// const input = fs.readFileSync(`dev/stdin`).toString().trim();

console.log(input.charCodeAt(0));