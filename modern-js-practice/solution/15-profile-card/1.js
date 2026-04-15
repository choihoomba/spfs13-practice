// 1. 사용자 정보로 HTML 카드 생성
function createProfileCard(user) {
  // TODO: 템플릿 리터럴로 HTML 생성
  return `
        <div class="profile-card">
            <h2>${user.name}</h2>
            <p>나이: ${user.age}세</p>
            <p>직업: ${user.job}</p>
        </div>
    `;
}

const user1 = {
  name: "홍길동",
  age: 25,
  job: "개발자",
};

console.log(createProfileCard(user1));
// 예상 출력
// <div class="profile-card">
//      <h2>홍길동</h2>
//     <p>나이: 25세</p>
//     <p>직업: 개발자</p>
// </div>
