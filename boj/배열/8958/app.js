const fs = require("fs");
const input = fs.readFileSync(`${process.cwd()}/8958/input.txt`).toString().trim().split('\n');

for (let idx = 1; idx < input.length; idx++) {
  let point = 0;
  let increment = 0;
  for (let subIdx = 0; subIdx < input[idx].length; subIdx++) {
      if (input[idx][subIdx] === "O") {
          increment++;
      } else {
          increment = 0;
      }
      point += increment;
  }
  console.log(point);
}