const fs = require('fs');
let input = fs.readFileSync(`${process.cwd()}/문자열 단계/크로아티아 알파벳 2941/input.txt`).toString().trim();
// const input = fs.readFileSync(`/dev/stdin`).toString().trim();

const croatianAlphabets = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

for (const alphabet of croatianAlphabets) {
  input = input.split(alphabet).join("?");
}

console.log(input.length);