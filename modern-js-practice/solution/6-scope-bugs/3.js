// Bug 3
let count = 0;

function increment() {
  let count = count + 1;
  return count;
}

console.log(increment()); // ReferenceError!

// TODO: 왜 에러가 날까요?
// 함수 내부에 let count 선언이 있기 때문에 JS 엔진은 전역 count 를 무시하고 지역 count 를 참조합니다.
// 그러나 let 은 선언 전 TDZ(Temporal Dead Zone) 상태이므로, 우변의 count + 1 을 평가하는 시점에 지역 count 가 아직 초기화되지 않아 ReferenceError 가 발생합니다.
// TODO: 어떻게 수정해야 할까요?
// 지역 변수 이름을 바꾸거나(let newCount = count + 1), 선언과 할당을 분리해야 합니다.
