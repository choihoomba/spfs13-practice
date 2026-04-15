// 5. 계산 함수 (기본값 포함)
function calculate({ a, b, operator = "+" }) {
  // TODO: operator에 따라 계산. +, -, *, / 연산 구현
  if (operator === "+") {
    return a + b;
  } else if (operator === "-") {
    return a - b;
  } else if (operator === "*") {
    return a * b;
  } else if (operator === "/") {
    return a / b;
  }
}

console.log(calculate({ a: 10, b: 5 })); // 15
console.log(calculate({ a: 10, b: 5, operator: "*" })); // 50
