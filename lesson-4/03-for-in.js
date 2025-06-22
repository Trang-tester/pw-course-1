const student = { "name": "Alex", "age": 10, "salary": 20 };
// 3.1
for (let newStudent in student) { console.log(newStudent, ":", student[newStudent]); }

// 3.2
let sum = 0;
for (let key in student) {
    if (typeof student[key] === "number") { sum += student[key]; }
}
console.log("sum:", sum);

// 3.3
let newarr = [];
for (let newarr1 in student) { newarr.push(newarr1); }
console.log(newarr);