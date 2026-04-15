// 4. 함수 조합
function compose(f, g) {
  // TODO: f(g(x))를 수행하는 함수 반환
  return function (x) {
    return f(g(x));
  };
}

const addOne = function (n) {
  return n + 1;
};
const double = function (n) {
  return n * 2;
};

const addThenDouble = compose(double, addOne);

console.log(addThenDouble(5)); // 12 ((5 + 1) * 2)
