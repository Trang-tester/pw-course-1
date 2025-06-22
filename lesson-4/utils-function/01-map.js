const scores = [85, 90, 78];
// 1.1
let scores1 = scores.map(num => {
    if (num < 90) { return num + num * 0.1; }
    else { return num - num * 0.05; }
})
console.log(scores1);

// 1.2
const numbers = [1, 2, 3, 4];
let numbers1 = numbers.map(num => String(num));
console.log(numbers1);

// 1.3
let numbers2 = numbers.map(num => num * 2);
console.log(numbers2);