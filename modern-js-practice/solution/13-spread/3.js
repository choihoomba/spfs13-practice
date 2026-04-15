// 3. 배열 중간에 요소 삽입
const items = ["A", "B", "D", "E"];

// TODO: 'C'를 B와 D 사이에 삽입
// 힌트: [...items.slice(0, 2), 'C', ...items.slice(2)]
const inserted = [...items.slice(0, 2), "C", ...items.slice(2)];
console.log(inserted); // ... // ['A', 'B', 'C', 'D', 'E']
