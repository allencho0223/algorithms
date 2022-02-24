// 진짜 약수: 1 과 N 을 제외한 나머지 약수들
// 공식: 최소 약수와 최대 약수를 곱하면 N 을 구할 수 있음

const fs = require('fs');
const input = fs.readFileSync(`${__dirname}/input.txt`).toString().trim().split('\n');
// const input = fs.readFileSync(`/dev/stdin`).toString().trim().split('\n');

const divisors = input[1].split(' ').map(divisor => Number(divisor));
console.log(Math.min(...divisors) * Math.max(...divisors));