const fs = require('fs');
let input = (
  process.env.platform === "linux"
  ? fs.readFileSync(`/dev/stdin`)
  : fs.readFileSync(`${__dirname}/input.txt`)
).toString();

input = input.trim().split('\n');