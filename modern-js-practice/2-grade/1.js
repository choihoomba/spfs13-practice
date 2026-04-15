// grade.js
// - 90점 이상: A
// - 80점 이상: B
// - 70점 이상: C
// - 60점 이상: D
// - 60점 미만: F
const score = 85;
let grade = null;
// TODO: if-else 문으로 학점 계산
if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else if (score >= 70) {
  grade = "C";
} else if (score >= 60) {
  grade = "D";
} else {
  grade = "F";
}
console.log(`점수: ${score}`);
console.log(`학점: ${grade}`);
// 예상출력:
// 점수: 85
// 학점: B
