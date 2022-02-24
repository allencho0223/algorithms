const fs = require("fs");
const input = fs.readFileSync(`${process.cwd()}/3052/input.txt`).toString().trim().split('\n');

const modularSet = new Set();

for (let idx = 0; idx < input.length; idx++) {
    const modular = input[idx] % 42;
    console.log(modular);
    if (!modularSet.has(modular)) {
        modularSet.add(modular);
    }
}
console.log(modularSet.size);