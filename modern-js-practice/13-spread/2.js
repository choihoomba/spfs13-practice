// 2. 배열 복사 후 수정
const numbers = [1, 2, 3, 4, 5];

// TODO: Spread로 복사 후 마지막에 6 추가
// const extended =
const extended = [...numbers, 6];
console.log(numbers); // ... // [1, 2, 3, 4, 5] (원본 유지)
console.log(extended); // [1, 2, 3, 4, 5, 6]
