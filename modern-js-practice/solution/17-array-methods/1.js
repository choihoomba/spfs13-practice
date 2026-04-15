const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1. map: 모든 수를 제곱
const squared = numbers.map((number) => number * number);
console.log(squared); // [1, 4, 9, 16, ...]

// 2. filter: 홀수만 추출
const odds = numbers.filter((number) => number % 2 !== 0);
console.log(odds); // [1, 3, 5, 7, 9]

// 3. find: 5보다 큰 첫 번째 수
const found = numbers.find((number) => number > 5);
console.log(found); // 6

// 4. findIndex: 5보다 큰 첫 번째 수의 인덱스
const index = numbers.findIndex((number) => number > 5);
console.log(index); // 5
