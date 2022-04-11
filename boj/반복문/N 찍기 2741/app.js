const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : `${__dirname}/input.txt`;
const input = Number(fs.readFileSync(filePath).toString().trim());

let answer = 0;

for (idx = 1; idx <= input; idx++) {
  answer = idx === input ? `${answer + idx}` : `${answer + idx}\n`;
}

console.log(answer);