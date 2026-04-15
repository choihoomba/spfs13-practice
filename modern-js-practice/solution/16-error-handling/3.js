// 3. 사용자 생성
function createUser(data) {
  try {
    // TODO: 필수 필드 체크
    if (!data) {
      throw new Error("데이터가 없습니다");
    }

    if (!data.name) {
      throw new Error("이름이 필요합니다");
    }

    if (!data.age || data.age < 0) {
      throw new Error("유효한 나이가 필요합니다");
    }

    return {
      id: Date.now(),
      name: data.name,
      age: data.age,
      email: data.email || "",
      createdAt: new Date(),
    };
  } catch (error) {
    console.error("사용자 생성 실패:", error.message);
    return null;
  }
}

console.log(createUser({ name: "홍길동", age: 25 }));
// {
//     id: 1775031370395,
//     name: '홍길동',
//     age: 25,
//     email: '',
//     createdAt: 2026-04-01T08:16:10.395Z
// }

console.log(createUser({ name: "김철수" }));
// 사용자 생성 실패: 유효한 나이가 필요합니다
// null
