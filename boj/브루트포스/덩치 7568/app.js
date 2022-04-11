const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const numberOfPeople = Number(input.shift());
let answer = '';

for (let sourceIdx = 0; sourceIdx < numberOfPeople; sourceIdx++) {
  const bodyMass = input[sourceIdx].split(' ').map(Number);
  const [sourceWeight, sourceHeight] = [bodyMass[0], bodyMass[1]];
  let rank = 1;
  for (let targetIdx = 0; targetIdx < numberOfPeople; targetIdx++) {
    if (sourceIdx === targetIdx) continue;
    const comparedBodyMass = input[targetIdx].split(' ').map(Number);
    const [targetWeight, targetHeight] = [comparedBodyMass[0], comparedBodyMass[1]];
    if (sourceWeight < targetWeight && sourceHeight < targetHeight) {
      rank++;
    }
  }
  answer = sourceIdx === numberOfPeople - 1 ? `${answer}${rank}` : `${answer}${rank} `;
}

console.log(answer);