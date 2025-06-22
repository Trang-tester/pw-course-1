
const numbers = [1, 2, 3];

// 1.1, 
numbers.forEach((value) => {
    console.log(value)

});

// 1.2
// Tính tổng
let sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum);

// Tìm max
const max = Math.max(...numbers);
console.log("max:", max);

// Tìm min
const min = Math.min(...numbers);
console.log("min:", min);

// Tạo mảng mới
let newmunbers = numbers.map(num => num * 2);
console.log(newmunbers);




