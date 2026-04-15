// 2. map 직접 구현
function map(array, callback) {
  // TODO: callback 결과로 새 배열 생성
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i]));
  }
  return result;
}

const doubled = map([1, 2, 3], function (n) {
  return n * 2;
});
console.log(doubled); // [2, 4, 6]
