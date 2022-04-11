const fs = require('fs');
let input = (process.env.USER === 'allencho'
  ? fs.readFileSync(`${__dirname}/input.txt`)
  : fs.readFileSync(`/dev/stdin`)
).toString();

input = input.split('\n').map(input => Number(input));

if (input[0] > 0 && input[1] > 0) {
  // q1
  console.log(1);
} else if (input[0] < 0 && input[1] > 0) {
  // q2
  console.log(2);
} else if (input[0] < 0 && input[1] < 0) {
  // q3
  console.log(3);
} else {
  // q4
  console.log(4);
}