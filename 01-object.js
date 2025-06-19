// 1.
let car = { "make": `Toyota`, "model": `Corolla`, "year": 2021 };
console.log("Year =", car.year);
// 2.
let person = {
    "name": `Trang`,
    "address": { "street": `Triều Khúc`, "city": `Hà Nội`, "country": `Việt Nam` }
};
console.log("address:", person.address.street, "-", person.address.city, "-", person.address.country);
// 3.
let student = {
    "name": `Trang`,
    "grades": { "math": 10, "english": 10 }
}
console.log("Math grade =", student["grades"]["math"]);

// 4.
let settings = { "volume": `30 HZ`, "brightness": 100 };
settings.volume = `98 HZ`;
console.log("settings:", settings);

// 5.
let bike = { "price": 100, "size": "L" };
bike.color = "blue";
console.log(bike);

// 6.
let employee = { "name": `Trang`, "age": 27 };
delete employee.age;
console.log(employee);

// 7.
const school = {
    "classA": ["An", "Bình", "Châu"],
    "classB": ["Đào,", "Hương,", "Giang"]
};
console.log(school);