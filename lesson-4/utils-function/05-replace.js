// 1.1
const phoneNumber = "0123 456 789";
let phoneNumber1 = phoneNumber.replace(/ /g, ".");
console.log(phoneNumber1);

1.2
const report = "Có một lỗi trong hệ thống.";
let report1 = report.replace("lỗi", "bug");
console.log(report1);

// 1.3
const numbersStr = "1,234,567";
let numbersStr1 = numbersStr.replace(/,/g, ".");
console.log(numbersStr1);