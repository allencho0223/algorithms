const fs = require('fs');
let input = fs.readFileSync(`/dev/stdin`).toString();

input = input.split(' ').map(input => Number(input));
const hour = input[0],
      minute = input[1];

let targetHour = 0,
    targetMinute = 0;

if (minute >= 45) {
  targetMinute = minute - 45;
  targetHour = hour;
} else {
  targetMinute = (minute - 45) + 60;
  targetHour = hour === 0 ? 23 : (hour - 1);
}

console.log(`${targetHour} ${targetMinute}`);