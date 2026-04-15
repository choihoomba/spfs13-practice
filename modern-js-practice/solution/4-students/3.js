// 레벨3: 객체 배열 사용

// 여러 학생 관리
const students = [
  { name: "홍길동", korean: 90, english: 85, math: 88 },
  { name: "김철수", korean: 78, english: 92, math: 81 },
  { name: "이영희", korean: 95, english: 89, math: 93 },
];

// TODO: 각 학생의 평균 계산
// TODO: 전체 학생 평균 계산
// TODO: 최고 점수 학생 찾기
// 예상 출력:
// === 학생별 성적 ===
// 홍길동: 평균 87.67점
// 김철수: 평균 83.67점
// 이영희: 평균 92.33점

// === 전체 통계 ===
// 전체 평균: 87.89점
// 최고 점수: 이영희 (92.33점)

console.log(`\n=== 학생별 성적 ===`);
let totalSum = 0;
let maxAverage = 0;
let maxStudent = null;
for (const s of students) {
  const total = s.korean + s.english + s.math;
  const avg = total / 3;
  totalSum += total;
  if (avg > maxAverage) {
    maxAverage = avg;
    maxStudent = s;
  }
  console.log(`${s.name}: 평균 ${avg.toFixed(2)}점`);
}

console.log(`\n=== 전체 통계 ===`);
const totalAverage = totalSum / students.length;
console.log(`전체 평균: ${totalAverage.toFixed(2)}점`);
console.log(`최고 평균 점수: ${maxStudent.name} ${maxAverage.toFixed(2)}점`);
