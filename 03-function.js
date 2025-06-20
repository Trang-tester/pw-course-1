// 1.
function multiply(a, b) {
    let result = a * b;
    console.log(`Kết quả của ${a} x ${b} là:`, result);
}
multiply(4, 5);
multiply(7, 3);

// 2
function findMin(a, b, c) { return Math.min(a, b, c); }

let minA = findMin(4, 7, 2);
console.log("minA :", minA);

let minB = findMin(41, 7, 20);
console.log("minB :", minB);

// 3
function getTopStudents(students, threshold) {
    return students
        .filter(student => student.score >= threshold)
        .map(student => student.name);
}
const studentsList = [
    { name: "Trang", score: 9 },
    { name: "Bình", score: 7 },
    { name: "Hương", score: 8.5 },
    { name: "Châu", score: 6 }
];
const topStudents = getTopStudents(studentsList, 8);
console.log("Top students:", topStudents);

// 4
function calculateInterest(principal, rate, years) {
    const total = principal + (principal * rate * years) / 100;
    return total;
}

const soTienGui = 10000000;
const laiSuat = 6.5;
const soNam = 3;

const tongTien = calculateInterest(soTienGui, laiSuat, soNam);
console.log("Tổng tiền sau 3 năm là:", tongTien.toLocaleString(), "VND");