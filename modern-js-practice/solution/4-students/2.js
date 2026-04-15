// 레벨2: 객체 사용
// 학생 객체
const student = {
  name: "홍길동",
  korean: 90,
  english: 85,
  math: 88,
};

// TODO: 총점 계산
// TODO: 평균 계산
// TODO: 결과 출력
const total = student.korean + student.english + student.math;
average = total / 3;
console.log(`${student.name} 총점: ${total}점, 평균: ${average.toFixed(2)}점`);
