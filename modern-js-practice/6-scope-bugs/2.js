// Bug 2
let result = [];

for (var i = 0; i < 3; i++) {
  result.push(function () {
    return i;
  });
}

console.log(result[0]()); // 예상: 0, 실제: ?
console.log(result[1]()); // 예상: 1, 실제: ?
console.log(result[2]()); // 예상: 2, 실제: ?

// TODO: 왜 모두 3이 나올까요?

// TODO: var를 let으로 바꾸면 해결됩니다. 왜 그럴까요?
