// 레벨1: 고정 구구단 출력
// 5단 출력
const dan = 5;

// TODO: 5단 구구단 출력
// 5 x 1 = 5
// 5 x 2 = 10
// ...
// 5 x 9 = 45

console.log(`\n=== ${dan}단 ===`);
for (let i = 1; i <= 9; i++) {
  console.log(`${dan} x ${i} = ${dan * i}`);
}
