// g(N) = f(1) + f(2) + f(3) + .... + f(N - 1) + f(N)
// N 이하의 자연수 중 1을 약수로 갖는 수의 갯수는 [N / 1]
// N 이하의 자연수 중 2을 약수로 갖는 수의 갯수는 [N / 2]
// N 이하의 자연수 중 3을 약수로 갖는 수의 갯수는 [N / 3]
// N 이하의 자연수 중 i을 약수로 갖는 수의 갯수는 [N / i]
// g(N) = (N / 1) * 1 + (N / 2) * 2 + .... + (N / i) * i

const fs = require('fs');
const input = Number(fs.readFileSync(`${__dirname}/input.txt`).toString().trim());
// const input = fs.readFileSync(`/dev/stdin`).toString().trim().split('\n');

let sum = 0;
for (let i = 1; i <= input; i++) {
  sum += parseInt(input / i) * i;
}
console.log(sum);