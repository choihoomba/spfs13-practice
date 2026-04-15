// 4. 사용자 정보 출력 함수
function printUser({ name, age, email }) {
  console.log(`이름: ${name}`);
  console.log(`나이: ${age}`);
  console.log(`이메일: ${email}`);
}

printUser({
  name: "홍길동",
  age: 25,
  email: "hong@example.com",
});
