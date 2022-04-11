const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const startHour = Number(input[0].split(' ')[0]);
const startMinute = Number(input[0].split(' ')[1]);
const cookingTimeInMinutes = Number(input[1]);
let cookedHour = 0;
let cookedMinute = 0;

if (startMinute + cookingTimeInMinutes >= 60) {
  const hoursTaken = Math.floor((startMinute + cookingTimeInMinutes) / 60);
  cookedHour = hoursTaken + startHour > 23 ? hoursTaken + startHour - 24 : hoursTaken + startHour;
  cookedMinute = startMinute + cookingTimeInMinutes === 60 ? 0 : (startMinute + cookingTimeInMinutes) % 60;
} else {
  cookedHour = startHour;
  cookedMinute = startMinute + cookingTimeInMinutes;
}

console.log(`${cookedHour} ${cookedMinute}`);