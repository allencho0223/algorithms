const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : `${__dirname}/input.txt`;
const input = fs.readFileSync(filePath).toString().trim();

const disassembledSum = Number(input);
let minConstructor = disassembledSum;

for (let i = disassembledSum; i >= 1; i--) {
  const assembledIndexDigitsSum = String(i).split('').reduce((previousValue, currentValue) => {
    return parseInt(previousValue) + parseInt(currentValue);
  }, 0);

  if (i + assembledIndexDigitsSum > disassembledSum) continue;
  if (i + assembledIndexDigitsSum === disassembledSum && i < minConstructor) minConstructor = i;
}

console.log(minConstructor !== disassembledSum ? minConstructor : 0);