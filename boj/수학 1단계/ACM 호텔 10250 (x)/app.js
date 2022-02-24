const fs = require('fs');
const input = fs.readFileSync(`${process.cwd()}/수학 1단계/ACM 호텔 10250/input.txt`).toString().trim().split('\n');
// const input = fs.readFileSync(`/dev/stdin`).toString().trim().split('\n');

function Checkin(Height, Number){
  const H = parseInt(Height)
  let N = parseInt(Number) 
  let W = 0
  while (N > 0) {
    N -= H
    W++
  }
  N += H
  console.log(N+"" + (W<10 ? "0" + W : W))
}

for(i= 1; i <= input[0]; i++){
    const Case = input[i].split(' ').map(ele=>parseInt(ele));
    Checkin(Case[0], Case[2])
}

// // 틀림
// for (let i = 1; i < input.length; i++) {
//   const highestLevel = Number(input[i].split(' ')[0]);
//   const nThPerson = Number(input[i].split(' ')[2]);
//   const dividened = parseInt(nThPerson / highestLevel); // 1
//   const remainder = parseInt(nThPerson % highestLevel); // 4
//   const level = remainder * 100;
//   const roomNumber = 1 + dividened;
//   console.log(`${(level + roomNumber).toString()}`);
// }

// // 출력 초과
// for (let i = 1; i < input.length; i++) {
//   console.log({input:input[i]});
//   const highestLevel = Number(input[i].split(' ')[0]);
//   // const roomsOnLevel = Number(input[i].split(' ')[1]);
//   const nThPerson = Number(input[i].split(' ')[2]);
//   let currentRoomNo = 1;
//   let currentWidth = 1;
//   for (let j = 1; j <= nThPerson; j++) {
//     if (j % (highestLevel * currentWidth + 1) === 0) {
//       currentWidth++; 
//       currentRoomNo = 100 + currentWidth; // 102
//       continue;
//     }
//     currentRoomNo += 100;
//   }
//   console.log(currentRoomNo);
// }