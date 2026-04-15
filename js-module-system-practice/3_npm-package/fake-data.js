// js/fake-data.js
// 가짜 데이터 생성 모듈 — @faker-js/faker 패키지를 사용합니다.

// TODO 1: @faker-js/faker 패키지에서 faker를 import 하세요.
// hint: import { faker } from '@faker-js/faker';
//       named export이므로 중괄호 { }가 필요합니다!

// 가짜 유저 정보를 생성하는 함수
// TODO 2: 아래 함수에 export를 붙이세요. (named export)
function createFakeUser() {
  return {
    name: faker.person.fullName(),
    email: faker.internet.email(),
    phone: faker.phone.number({ style: "international" }),
    avatar: faker.image.avatar(),
  };
}

// 가짜 상품 정보를 생성하는 함수
// TODO 3: 아래 함수에 export를 붙이세요. (named export)
function createFakeProduct() {
  return {
    name: faker.commerce.productName(),
    price: faker.commerce.price({ min: 1000, max: 100000, dec: 0 }),
    category: faker.commerce.department(),
    description: faker.commerce.productDescription(),
  };
}

// 가짜 유저 여러 명을 생성하는 함수
// TODO 4: 아래 함수에 export를 붙이세요. (named export)
function createFakeUsers(count) {
  const users = [];
  for (let i = 0; i < count; i++) {
    users.push(createFakeUser());
  }
  return users;
}
