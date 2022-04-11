const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : `${__dirname}/input.txt`;
const input = Number(fs.readFileSync(filePath).toString().trim());

for (let idx = 1; idx <= 9; idx++) {
  console.log(`${input} * ${idx} = ${input * idx}`);
}