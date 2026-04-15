// 레벨3: 객체 배열 사용

// 여러 학생 관리
const students = [
  { name: "홍길동", korean: 90, english: 85, math: 88 },
  { name: "김철수", korean: 78, english: 92, math: 81 },
  { name: "이영희", korean: 95, english: 89, math: 93 },
];

// TODO: 각 학생의 평균 계산
console.log("=== 학생별 성적 ===");

for (let student of students) {
  const average = (student.english + student.korean + student.math) / 3;
  console.log(`${student.name}: 평균 ${average.toFixed(2)}점`);
}
// TODO: 전체 학생 평균 계산
console.log("=== 전체 통계 ===");

// TODO: 최고 점수 학생 찾기

// 예상 출력:
// === 학생별 성적 ===
// 홍길동: 평균 87.67점
// 김철수: 평균 83.67점
// 이영희: 평균 92.33점

// === 전체 통계 ===
// 전체 평균: 87.89점
// 최고 점수: 이영희 (92.33점)
