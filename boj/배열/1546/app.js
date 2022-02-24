const fs = require("fs");
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
const count = Number(input[0]);
const points = input[1].split(' ').map(point => Number(point));
const highestPoint = Math.max(...points);
const newPoints = points.map(point => point / highestPoint * 100);
let finalAvg = 0;
for (let point of newPoints) {
    finalAvg += point
}
console.log(finalAvg / count);