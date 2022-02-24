const fs = require('fs');
const input = fs.readFileSync(`${process.cwd()}/수학 1단계/손익분기점 1712/input.txt`).toString().trim().split(' ').map(input => Number(input));
// const input = fs.readFileSync(`/dev/stdin`).toString().trim().split(' ').map(input => Number(input));

const margin = input[2] - input[1];
const breakEvenPoint = Math.floor(input[0] / margin) + 1;

console.log(margin <= 0 ? -1 : breakEvenPoint);