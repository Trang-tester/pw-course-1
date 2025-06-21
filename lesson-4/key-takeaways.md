## __1. Phạm vi của biến__ 
**a, var và let**

- Var: có thể truy cập
được vào biến trước khi
được khai báo: Giá trị
undefined (Phạm vi: global)
- Let: KHÔNG thể truy cập
trước khi khai báo (phạm vi trong {})

Ví dụ:
// // var
// for (var i = 0; i < 5; i++) {
//     console.log(i); // 0 - 4
// }

// console.log("i", i); // 5
/*
i = 1;
kiem tra i co nho hon 5 hay khon
dung thi chay lenh 
chay vao i++

i = 2
kiem tra i co nho hon 5 hay khon
dung thi chay lenh 
chay vao i++
....

i = 4
kiem tra i co nho hon 5 hay khon
dung thi chay lenh 
chay vao i++

i = 5
kiem tra i co nho hon 5 hay khong
sai thi thoat ra khoi vong lap
*/


// // let
// for (let i = 0; i < 5; i++) {
//     console.log(i); // 0 - 4
// }

// console.log("i", i); // i is not defined

b, Hoisting
Dùng let thì lúc bị lỗi nó sẽ define rõ lỗi hơn là var

console.log(a); // undefined
var a = 5;

// let
console.log(b);
let b = 5;

**3. If/else, if/else/if, switch/case**

**a, if/else**

if (condition){
    run code when conditon = true
} else {
    run code when condition = false
}

Vd;
let scrore = 8
if (score <8){
    console.log ("diem thap");
} else{
    console.log ("diem cao");
}

**b, if/else/if**

if (condition1) {
    // run code when condition1 = true
} else if (condition2) {
    // run code when condition2 = true
} else {
    // run code when all conditions = false
}

**c, swith/case**

switch (bieu_thuc) {
    case gia_tri_1:
        // run code
        break;
    case gia_tri_2:
        // run code
        break;
    case gia_tri_3:
        // run code
        break;
    case gia_tri_4:
        // run code
        break;
    default: 
        // run code
}

let ngay = 20;
switch (ngay) {
    case 20:
        console.log("thu 6");
        break;
    case 21:
        console.log("thu 7");
        break;
    case 22:
        console.log("chu nhat");
        break;
    default:
        console.log("ngay khong hop le");
}

__4. So sánh `== và !=**, === và !==`__

const result = "5" === 5; // false => gia tri + kieu du lieu
const result1 = "5" == 5; // true => convert string -> number

console.log(result);
console.log(result1);

const result2 = "5" != 5;
console.log(result2); // false

**5. Vòng lặp**

**a, for..in**
- dùng để lặp các thuộc tính trong object
- dùng để lặp lại các giá trị  index trong array

*Project*

let product = {
    Name: "Trang",
    Weight: "0.5kg"
}
for (let me in product) {
    console.log(me);
} => Lấy ra các biến trong project

for (let me in product) {
    console.log (product[me]);
} => Lấy ra các giá trị trong project ( **nếu dùng console.log (product.me) thì sẽ bảo lỗi vì hệ thống sẽ hiểu là vào project product lấy biến me nhưng trong project đang không có)**

*array*
const Trang = ["161cm", "55kg"]
for (let indicator in Trang) {
    console.log(Trang[indicator]);
}

**b,foreach**

- Dùng cho array

const Trang = ["161cm", "55kg"]
Trang.forEach((name, age) => {
    console.log(name, age)

});

**c, for ... of -> dung cho array**

// for (let value of arr) {
//     console.log(value);
// }
const Trang = ["161cm", "55kg"]
for (let today in Trang) { console.log(today);} ( cái này khác for in ở chỗ không cần dẫn là Trang [today] mà có thể dẫn luôn)

**6. Vòng lặp nâng cao : continue**

- bo qua vong lap, chay den vong lap tiep theo khi gap continue
- neu gap continue thi bo qua doan code phia duoi va chay toi vong lap tiep theo
*/
// for (let i = 1; i <= 5; i++) {
//     if (i % 2 === 0) {
//         continue;
//     }

//     console.log(i);
// }
i = 1 k chia hết cho 2, thì in ra, 
i = 2 chia hết cho 2 thì chạy tiếp continue
i = 3 k chia hết cho 2 thì in  ra tương tự 4 và 5

// break
/*
- khi gap break thi thoat ra khoi vong lap luon
*/
// for (let i = 1; i <= 5; i++) {
//     if (i % 2 === 0) {
//         break;
//     }

//     console.log(i);
// }
i =1 không chia hết cho 2 in Ra
i = 2 chia hết cho 2 gặp break out ra luôn kết thúc vòng lặp

**7. string-util.js**

**a,trim()**

let name1 = " doan thuy trang  "
console.log ("name =", name1.trim())

**b,toLowerCase(), toUpperCase()**

 console.log(name1.toLowerCase());
 console.log(name1.toUpperCase());

**c, includes -> true/ false** ( kiểm tra chuỗi ấy có chứa chuỗi con hay không
) hàm này thì sẽ check phân biệt hoa thường nghĩa là check tuyệt đối

 console.log(name1.includes("awesome"));
console.log(name1.includes("Awesome"));

**d, replace**

str = str.replace("awesome", "fun");
console.log(str);

 **e, split -> array**

 const words = str.split(" ");
 console.log(words); // [ 'JS', 'is', 'awesome' ]


**f, substring** 
- tra ve 1 string dua tren index cua chuoi con trong chuoi cha

let str = "Hello World";
// console.log(str.substring(0, 5));
// console.log(str.substring(6));

// console.log(str.substring(11, 6));

**g, indexOf()**

- tra ve vi tri xuat tri xuat hien dau tien cua 1 chuoi con
- neu khong tim thay -> return -1
 console.log(str.indexOf("World")); // 6
 console.log(str.indexOf("AAAA")); // -1

 **8.array-util**
**a, map()**

let numbers = [1, 2, 3, 4];
let newNumbers = numbers.map(num => num * 2);
console.log(numbers);
console.log(newNumbers);

let str = ["1", "2", "3", "4"];
let newStr = str.map(str => console.log(str));

**b, filter**

let numbers = [1, 2, 3, 4];
 let newNumbers = numbers.filter(num => num % 2 === 0);
 console.log(newNumbers);

**c,find**

 -> tra ra phan tu dau tien thoa man dieu kien
 let numbers = [1, 3, 3, 3];
let firstNumber = numbers.find(num => num %  2 === 0);
console.log(firstNumber); // 2

**d, reduce**
let numbers = [1, 3, 3, 3];
let sum = numbers.reduce((total, num) => total + num, 3);
 console.log(sum);
total: bien nhan gia tri duy nhat = 0
num: phan tu trong mang
 0: gia tri khoi tao cho bien total

/*
total = 1,
total + 1 = 2 => total = 2
total + 3 = 5 => total = 5
total + 3 = 8 => total = 8
total + 3 = 11 => total = 11
*/

**e, some**

let numbers = [1, 3, 3, 5];
let hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven);

**f, every**

let numbers = [1, 2, 3, 4];
let hasEven = numbers.every(num => num % 2 === 0);
console.log(hasEven);

**g, push** (thêm giá trị)

 let numbers = [1, 2, 3, 4];
 numbers.push(5, 6);
 console.log(numbers);

**h, shift** (loại bỏ giá trị đầu tiên)

let numbers = [1, 2, 3, 4];
let number = numbers.shift();
console.log(number); // 1
console.log(numbers); // [ 2, 3, 4 ]

**j, sort**

let numbers = [1, 2, 3, 4];
numbers.sort();
console.log(numbers);

numbers.sort((a,b) => b - a);
console.log(numbers);

/*
UTF-16, ASCII
Mac dinh: a la so dung truoc, b la dung sau
- Tang dan: sort((a,b) => a - b)
a - b = negative -> a < b => a dung truoc b
a - b = positive -> a > b => b dung truoc a

- Giam dan: sort((a, b) => b - a)
b - a = negative => b < a => a dung truoc b
b - a = positive => b > a => b dung truoc a
*/
