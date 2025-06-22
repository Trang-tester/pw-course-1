// 1.1
const scores = [85, 90, 78];
let scores1 = scores.find(num => num > 80);
console.log(scores1);

// 1.2
const ages = [18, 21, 16, 25];
let ages1 = ages.find(num => num >= 18);
console.log(ages1);

// 1.3
const words = ["apple", "banana", "cherry", "date"];
let words1 = words.find(num => num.length > 5);
console.log(words1);
