const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : `${__dirname}/input.txt`;
const input = fs.readFileSync(filePath).toString().trim().split(' ').map(Number).sort((a, b) => a - b);

const [diceA, diceB, diceC] = [input[0], input[1], input[2]];

if (diceA === diceB && diceB === diceC) {
  console.log(10000 + diceA * 1000);
} else if (diceA === diceB || diceB === diceC) {
  console.log(1000 + diceB * 100);
} else {
  console.log(diceC * 100);
}