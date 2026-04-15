// 5. 객체 속성 업데이트
const product = {
  id: 1,
  name: "노트북",
  price: 1000000,
  stock: 5,
};

// TODO: price만 1200000으로 변경한 새 객체
const updatedProduct = { ...product, price: 1200000 };
console.log(product.price); // 1000000 (원본 유지)
console.log(updatedProduct.price); // 1200000
