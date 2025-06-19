// 1. Vì hàm const dùng để khai báo 1 hằng số nên không thể thay đổi giá trị sau khai báo nhưng dòng myName = "Nagi"; lại cố thay đổi → gây lỗi ngay khi chạy.
// Có 2 cách sửa:

// Cách 1:
let myName = "Alex";
myName = "Nagi";
console.log(myName);

// Cách 2:
const myName = "Alex";
console.log(myName);
