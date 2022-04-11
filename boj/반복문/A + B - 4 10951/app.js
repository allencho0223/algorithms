const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : `${__dirname}/input.txt`;
const input = fs.readFileSync(filePath).toString().trim().split('\n');

for (let idx = 0; idx < input.length; idx++) {
  const numbers = input[idx].split(' ').map(Number);
  console.log(`${numbers[0] + numbers[1]}`);
}