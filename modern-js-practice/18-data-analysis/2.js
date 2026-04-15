const sales = [
  {
    id: 1,
    product: "노트북",
    category: "전자제품",
    price: 1200000,
    quantity: 2,
    date: "2024-01-15",
  },
  {
    id: 2,
    product: "마우스",
    category: "전자제품",
    price: 30000,
    quantity: 5,
    date: "2024-01-16",
  },
  {
    id: 3,
    product: "키보드",
    category: "전자제품",
    price: 80000,
    quantity: 3,
    date: "2024-01-16",
  },
  {
    id: 4,
    product: "책상",
    category: "가구",
    price: 200000,
    quantity: 1,
    date: "2024-01-17",
  },
  {
    id: 5,
    product: "의자",
    category: "가구",
    price: 150000,
    quantity: 2,
    date: "2024-01-17",
  },
  {
    id: 6,
    product: "모니터",
    category: "전자제품",
    price: 300000,
    quantity: 2,
    date: "2024-01-18",
  },
  {
    id: 7,
    product: "램프",
    category: "가구",
    price: 50000,
    quantity: 4,
    date: "2024-01-18",
  },
];

// 3. 가격 범위로 필터링
function filterByPriceRange(sales, min, max) {
  // TODO: filter 사용
}

console.log(filterByPriceRange(sales, 100000, 500000));
// [
//     {
//         id: 4,
//         product: '책상',
//         category: '가구',
//         price: 200000,
//         quantity: 1,
//         date: '2024-01-17'
//     },
//     {
//         id: 5,
//         product: '의자',
//         category: '가구',
//         price: 150000,
//         quantity: 2,
//         date: '2024-01-17'
//     },
//     {
//         id: 6,
//         product: '모니터',
//         category: '전자제품',
//         price: 300000,
//         quantity: 2,
//         date: '2024-01-18'
//     }
// ]

// 4. 특정 날짜의 판매 내역
function getSalesByDate(sales, date) {
  // TODO: filter 사용
}

console.log(getSalesByDate(sales, "2024-01-16"));
// [
//     {
//       id: 2,
//       product: '마우스',
//       category: '전자제품',
//       price: 30000,
//       quantity: 5,
//       date: '2024-01-16'
//     },
//     {
//       id: 3,
//       product: '키보드',
//       category: '전자제품',
//       price: 80000,
//       quantity: 3,
//       date: '2024-01-16'
//     }
//   ]
