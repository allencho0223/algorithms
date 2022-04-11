const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim();
if (Number(input) < 10) {
  input = `0${input}`;
}

let cycle = 0;

function incrementCycle(firstDigit, secondDigit) {
  let newDigit = String(Number(firstDigit) + Number(secondDigit));
  if(newDigit.length > 1) {
    newDigit = Number(newDigit[newDigit.length - 1]);
  }
  cycle++;
  if (input === `${secondDigit}${newDigit}`) {
    return cycle;
  }

  return incrementCycle(secondDigit, newDigit);
}

console.log(incrementCycle(input.split('')[0], input.split('')[1]));