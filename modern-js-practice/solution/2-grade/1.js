// grade.js

const score = 85;

// TODO: if-else 문으로 학점 계산
if (score >= 90) {
  console.log(`점수: ${score}`);
  console.log("학점: A");
} else if (score >= 80) {
  console.log(`점수: ${score}`);
  console.log("학점: B");
} else if (score >= 70) {
  console.log(`점수: ${score}`);
  console.log("학점: C");
} else {
  console.log(`점수: ${score}`);
  console.log("학점: F");
}

// 예상출력:
// 점수: 85
// 학점: B
