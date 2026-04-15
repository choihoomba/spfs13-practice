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
// var 는 함수 스코프이기 때문에 루프 전체에서 단 하나의 i 변수를 공유합니다.
// result 에 push 된 함수들은 실행 시점에 i 를 참조하는데, 루프가 끝난 시점에 i 는 이미 3이 되어 있어 모두 3을 반환합니다.
// TODO: var를 let으로 바꾸면 해결됩니다. 왜 그럴까요?
// let 는 블록 스코프이기 때문에 반복마다 새로운 i 변수가 생성됩니다.
// 각 함수가 서로 다른 i 를 캡처하기 때문에 0, 1, 2 를 각각 기억합니다.
