const fs = require('fs');
let input = fs.readFileSync(`${__dirname}/input.txt`).toString();
// let input = fs.readFileSync(`/dev/stdin`).toString();

input =  input.trim().split('\n').map(value => Number(value));
const dwarfsHeightSum = input.reduce((prev, curr) => prev + curr, 0);
let legitDwarfs = input;

for (let i = 0; i < input.length; i++) {
  for (let j = i + 1; j < input.length; j++) {
    if (dwarfsHeightSum - input[i] - input[j] === 100) {
      legitDwarfs = legitDwarfs.filter((_, index) => index !== i && index !== j).sort((a, b) => a - b);
      console.log(legitDwarfs.join('\n'));
      return;
    }
  }
}