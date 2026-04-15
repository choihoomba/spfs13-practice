// 2. 있는 정보만 표시 (단축 평가 &&)
// && 연산자: 좌변이 falsy면 좌변을 반환, truthy면 우변을 반환
// || 연산자: 좌변이 falsy면 우변을 반환 → undefined 대신 빈 문자열로 처리

function createProfileCard(user) {
  // 값이 있을 때만 HTML 생성, 없으면 빈 문자열
  const emailSection = (user.email && `<p>이메일: ${user.email}</p>`) || "";
  const phoneSection = (user.phone && `<p>전화: ${user.phone}</p>`) || "";

  return `
        <div class="profile-card">
            <h2>${user.name}</h2>
            <p>나이: ${user.age}세</p>
            ${emailSection}
            ${phoneSection}
        </div>
    `;
}

// 이메일만 있는 유저
const user1 = {
  name: "김철수",
  age: 30,
  email: "kim@example.com",
  // phone 없음
};

console.log(createProfileCard(user1));
