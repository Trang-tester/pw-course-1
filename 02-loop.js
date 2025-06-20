// 1. 
let sum = 0;
for (let i = 1; i <= 100; i++) { sum += i }
console.log("sum:", sum);

// 2.
for (let i = 2; i <= 9; i++) { console.log(i) }

// 3
const oddNumbers = [];
for (let i = 1; i <= 99; i += 2) { oddNumbers.push(i) }
console.log(oddNumbers);

// 4
for (let i = 1; i <= 10; i++) { console.log(`user${i}@example.com`) }

// 5
const revenues = [
    { month: 1, total: 100 },
    { month: 2, total: 120 },
    { month: 3, total: 90 },
    { month: 4, total: 80 },
    { month: 5, total: 110 },
    { month: 6, total: 95 },
    { month: 7, total: 130 },
    { month: 8, total: 125 },
    { month: 9, total: 105 },
    { month: 10, total: 115 },
    { month: 11, total: 140 },
    { month: 12, total: 150 }
];

let totalRevenue = 0;

for (let i = 0; i < revenues.length; i++) {
    totalRevenue += revenues[i].total;
}

console.log("Tổng doanh thu cả năm là:", totalRevenue);