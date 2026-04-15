// fake-data.js
// 가짜 데이터 생성 모듈 — @faker-js/faker 패키지를 사용합니다.

import { faker } from "@faker-js/faker";

// 가짜 유저 정보를 생성하는 함수
export function createFakeUser() {
  return {
    name: faker.person.fullName(),
    email: faker.internet.email(),
    phone: faker.phone.number({ style: "international" }),
    avatar: faker.image.avatar(),
  };
}

// 가짜 상품 정보를 생성하는 함수
export function createFakeProduct() {
  return {
    name: faker.commerce.productName(),
    price: faker.commerce.price({ min: 1000, max: 100000, dec: 0 }),
    category: faker.commerce.department(),
    description: faker.commerce.productDescription(),
  };
}

// 가짜 유저 여러 명을 생성하는 함수
export function createFakeUsers(count) {
  const users = [];
  for (let i = 0; i < count; i++) {
    users.push(createFakeUser());
  }
  return users;
}
