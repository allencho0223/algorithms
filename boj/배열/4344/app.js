const fs = require("fs");
const input = fs.readFileSync(`${process.cwd()}/4344/input.txt`).toString().trim().split('\n');

for (let i = 1; i < input.length; i++) {
  const testCase = input[i].split(' ').map(point => Number(point));
  const count = testCase[0];
  testCase.shift();
  let sum = 0;
  for (let j = 0; j < testCase.length; j++) {
      sum += testCase[j];
  }
  const avg = sum / count;
  let aboveAvg = 0;
  for (let j = 0; j < testCase.length; j++) {
      if (testCase[j] > avg) {
          aboveAvg++;
      }
  }
  console.log(`${parseFloat(aboveAvg / count * 100).toFixed(3)}%`);
}