// 레벨1: 배열 사용

// 학생 이름 배열
const names = ["홍길동", "김철수", "이영희"];

// 점수 배열
const scores = [85, 90, 78];

// TODO: 각 학생의 이름과 점수 출력
// 홍길동: 85점
// 김철수: 90점
// 이영희: 78점
let sum = 0;
for (let i = 0; i < names.length; i++) {
  console.log(`${names[i]}: ${scores[i]}점`);
  sum = sum + scores[i];
}
// TODO: 평균 점수 계산
