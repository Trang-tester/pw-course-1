# I. Functions advance
**1. Lamda function**

- Đn: 1 cách viết ngắn gọn viết trong hàm JS
    + Sử dụng dấu => thay vì từ khoá function
    + Cú pháp: (parameters) => { code here}

Ví dụ:

- **Cách cũ:**

    *function tên hàm (paramerter1, parameter2) {
    Code
}*

- **Cách mới**

    *const tenHam2 = (paramerter1, parameter2) => {
    Code
}*
=> Cách gọi: 
const tenHam2 (a,b)

- **Không tham số**

    *const tenHam3 = () => {
    Code
}*

- **1 tham số**

    *const tenHam4 = x => {
    Code
}*

- **1 dòng lệnh**

    *const tenHam5 = (paramerter1, parameter2) => console.log(paramerter1, parameter2);*

    *//Có thể bỏ dấu ngoặc*

    *//Có thể bỏ return*

    *const tenham6 = (a,b) => a+b*;

**2. Anonymous function**
- Đn: Được sử dụng 1 lần or làm đối số truyền  vào các hàm khác
VD:
 (*function (){
    console.log ("Đây là hàm không tên");}*
    )();

    Chỉ cần cho ngoặc tròn vào cả hàm và thêm tiếp dấu ngoặc tròn tiếp

 setTimeout (function (){
    console.log ("Đây là hàm không tên");}, 3000)  // ứng dụng: sử dụng callback trong 1 function khác.

# II. DOM
**1. Đn:** 

DOM là phiên bản JavaScript của trang HTML, nơi mọi phần tử (như thẻ `<h1>, <p>, <div>,...)` đều trở thành một “đối tượng” (object) mà bạn có thể truy cập, thay đổi, xoá, thêm… bằng JavaScript.'

1 thẻ hay còn gọi là 1 node:

`<option>United States</option>`
 - Cấu trúc của 1 thẻ: gao gồm thẻ mở `<option>`, nội dung thẻ, thẻ đóng`</option>`, dùng khi thẻ chứa nội dung

 - Thẻ đặc biệt: thẻ tự đóng `<img src.../>` `<br>`: xuống dóng
 `<hr>`: tạo đường ngang ở trên trang, dùng khi thẻ không chứa nội dung nào cả

 - `<option value="usa">United States</option>`

    - value: là thuộc tính
    - usa: giá trị của thuộc tính
    - United States: text

**2. Các thẻ html thường gặp**

- Thẻ `<div>` (viết tắt của divide): dùng để chia các khối trong trang web
- Thẻ `<h1></h1>` đến `<h6></h6>` (viết tắt của heading): dùng để tạo ra các header phân cấp
theo thứ tự từ lớn đến bé.
- Thẻ `<form></form>`: dùng để chứa một form thông tin.
- Thẻ input: text, email, radio, checkbox, file, color, range, date
- Thẻ textarea: hiển thị ô input, dạng to.
- Thẻ radio button: tạo nút chọn một (radio).
- Thẻ checkbox: tạo nút chọn nhiều lựa chọn (checkbox).
- Thẻ list và dropdown: hiển thị danh sách hoặc menu thả xuống.
- Thẻ button: tạo nút bấm.
- Thẻ table: hiển thị bảng dữ liệu.
- thead = table heading
- tr = table row = 1 dòng
- th: table heading: text in đậm

- tbody
- tr -> td = table data
- Thẻ date picker: tạo bộ chọn ngày.
- Thẻ slider: tạo thanh trượt.
- Thẻ iframe: hiển thị nội dung từ một trang web khác bên trong trang hiện tại.

**3. Vẽ cây Dom**

a. Cách sủ dụng mindmap
 - Phím tab: tạo đồng cấp
 - Phím enter: tạo cấp con
 - Chuyển biểu đồ thành dạng dọc: View -> Map theme -> Top-down standard

**4. Selector**
- Đn: Là gọi đến phần tự trên trang web
XPath = XML Path

-  Có 2 loại:

    - Tuyệt đối: đi dọc theo cây DOM
-> bắt đầu bởi 1 /

    - Tương đối: tìm dựa vào đặc tính
-> bắt đầu bởi 2 //:

    `//tenthe[@thuoctinh=”gia
tri”]`

=> Nên dùng XPath tương đối

**4. Playwright basic systax**

- Để tạo 1 file test trong playwwright thì sử dụng có đuôi spec.ts

    *a. test*
    - Đơn vị khai báo 1 test
    sử dụng hàm 
   ` import { test } from '@playwright/test';`
   đây là 1 hàm được import từ thư viện playwright được import vào file để sử dụng

    - Bắt đầu 1 case test `test ('testcase name, async ({page}) => {
code của test
});`
        + Steps: `await test.step('tên step', async()=>{
code here
        });`

*__Lưu ý: step nên được
map 1-1 với test case
để dễ dàng maintain.__*

**- Basic action**
- Navigate: 
`await page.goto(https://www.w3schools.com/)`;`

- Single Click: 
`await page.locator("//button").click ()`;`

- Double Click: 
`await page.locator("//button").dbclick ()`;`

- Click chuột phải: 
` page.locator("//button").click ({button: `right`})`;

- Click chuột kèm bấm phím khác: 
` page.locator("").click ({modifiers: [`shift`],})`;

- Fill: paste content vào 1 ô input
` page.locator("//input").fill ("playwright Viet Nam")`;

- pressSequentially: gõ từng chữ cái vào ô input
` page.locator("//input").pressSequentially ("playwright Viet Nam",{delay: 100,});`

- Lấy giá trị hiện tại đang là check hay không check
 `Const isChecked = page.locator ("//input").isChecked();`

 - Check/uncheck
  `page.locator ("//input").Check();`
  
  `page.locator ("//input").setChecked(false);`