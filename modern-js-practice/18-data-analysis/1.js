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

// 1. 총 매출액 계산
function getTotalRevenue(sales) {
  // TODO: reduce 사용
  // price * quantity의 합계
  return sales.reduce((total, sale) => total + sale.price * sale.quantity, 0);
}

console.log(getTotalRevenue(sales)); // 4090000

// 2. 카테고리별 매출액
function getRevenueByCategory(sales) {
  // TODO: reduce로 카테고리별 그룹화 후 계산
}

console.log(getRevenueByCategory(sales));
// { '전자제품': 3390000, '가구': 700000 }
