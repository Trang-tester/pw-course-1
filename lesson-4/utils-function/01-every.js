const scores = [85, 90, 78];
// 1.1
let scores1 = scores.every(num => num > 70);
console.log(scores1);

// 1.2
const ages = [18, 21, 16, 25];
let ages1 = ages.every(num => num > 15);
console.log(ages1);

1.3
const words = ["apple", "banana", "cherry", "date"];
let words1 = words.every(num => num.length > 3)
console.log(words1);