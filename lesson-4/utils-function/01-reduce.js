const scores = [85, 90, 78];
// 1.1
let scores1 = scores.reduce((total, num) => total + num, 0);
console.log(scores1);

// 1.2
const numbers = [1, 2, 3, 4];
let numbers1 = numbers.reduce((product, num) => product * num, 1);
console.log(numbers1);
// const expenses = [50, 100, 150]; 

// 1.3
const expenses = [50, 100, 150];
let expenses1 = expenses.reduce((total, num) => total + num, 0);
console.log(expenses1);
