// 레벨2: 객체 사용
// 학생 객체
const student = {
  name: "홍길동",
  korean: 90,
  english: 85,
  math: 88,
};

// TODO: 총점 계산
let sum = student.korean + student.english + student.math;
// TODO: 평균 계산
let avg = sum / 3;
// TODO: 결과 출력
console.log(`${student.name} 총점:${sum}점, 평균 ${avg.toFixed(2)}점`);
