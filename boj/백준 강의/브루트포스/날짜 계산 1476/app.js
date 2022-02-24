const fs = require('fs');
let input = (
  process.env.platform === "linux"
  ? fs.readFileSync(`/dev/stdin`)
  : fs.readFileSync(`${__dirname}/input.txt`)
).toString();

let [E, S, M] = input.trim().split(' ').map(value => Number(value - 1));
let year = 1;
console.log(E, S, M);
while (true) {
  if (year % 15 === E && year % 28 === S && year % 19 === M) {
    console.log(year + 1);
    return;
  }
  year++;
}