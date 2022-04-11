const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : `${__dirname}/input.txt`;
const input = Number(fs.readFileSync(filePath).toString().trim());

let count = 0;
let currentNumber = 0;

while (true) {
  currentNumber++;
  if (!currentNumber.toString().includes('666')) continue;
  count++;
  if (count === input) {
    console.log(currentNumber);
    break;
  } 
}