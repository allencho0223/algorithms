const fs = require('fs');
const input = fs.readFileSync(`${process.cwd()}/수학 1단계/달팽이는 올라가고 싶다 2869/input.txt`).toString().trim().split(' ').map(value => Number(value));
// const input = fs.readFileSync(`/dev/stdin`).toString().trim().split(' ').map(value => Number(value));

const up = input[0], // 5
      down = input[1], // 1
      height = input[2]; // 6

console.log(Math.ceil((height - down) / (up - down)));