const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : `${__dirname}/input.txt`;
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const maxNumber = Number(input[0].split(' ')[1]);
const cards = input[1].split(' ').map(Number);

function playNewBlackjack(cards) {
  let closestSum = 0;
  for (let i = 0; i < cards.length - 2; i++) {
    for (let j = i + 1; j < cards.length - 1; j++) {
      for (let k = i + 2; k < cards.length; k++) {
        if (cards[i] !== cards[j] && cards[i] !== cards[k] && cards[j] !== cards[k]) {
          const currentCardsSetSum = cards[i] + cards[j] + cards[k];
          if (currentCardsSetSum <= maxNumber && currentCardsSetSum > closestSum) {
            closestSum = currentCardsSetSum;
          }
        }
        if (closestSum === maxNumber) return closestSum;
      }
    }
  }
  return closestSum
}

console.log(playNewBlackjack(cards));