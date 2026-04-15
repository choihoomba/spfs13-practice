const students = [
  { id: 1, name: "홍길동", score: 85, grade: "B" },
  { id: 2, name: "김철수", score: 92, grade: "A" },
  { id: 3, name: "이영희", score: 78, grade: "C" },
  { id: 4, name: "박민수", score: 95, grade: "A" },
  { id: 5, name: "정수진", score: 88, grade: "B" },
];

// 5. 이름만 추출
const names = students.map((student) => student.name);

console.log(names); // ['홍길동', '김철수', ...]

// 6. A학점 학생만 필터링
const aGrade = students.filter((student) => student.grade === "A");

console.log(aGrade);
// [{id: 2, name: '김철수', ...}, {id: 4, name: '박민수', ...}]

// 7. 점수 90점 이상 학생들의 이름
const highScorers = students
  .filter((student) => student.score >= 90)
  .map((student) => student.name);

console.log(highScorers); // ['김철수', '박민수']

// 8. ID로 학생 찾기
function findStudentById(id) {
  // TODO: find 사용
  return students.find((student) => student.id === id);
}

console.log(findStudentById(3));
// {id: 3, name: '이영희', score: 78, grade: 'C'}

// 9. 평균 점수 계산
function getAverageScore() {
  // TODO: reduce 또는 forEach 사용
  let sum = 0;
  students.forEach((student) => {
    sum += student.score;
  });
  return sum / students.length;
}

console.log(getAverageScore()); // 87.6
