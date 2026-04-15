// 4. 배열 합치기
function mergeArrays(...arrays) {
  // TODO: 모든 배열을 하나로 합치기
  // 힌트: flat() 또는 reduce()
  return arrays.flat();
}

console.log(mergeArrays([1, 2], [3, 4], [5]));
// [1, 2, 3, 4, 5]
