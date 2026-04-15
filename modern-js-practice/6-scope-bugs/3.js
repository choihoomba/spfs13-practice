// Bug 3
let count = 0;

function increment() {
  let count = count + 1;
  return count;
}

console.log(increment()); // ReferenceError!

// TODO: 왜 에러가 날까요?

// TODO: 어떻게 수정해야 할까요?
