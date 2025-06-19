# **I. Git**
## **1. Thay đổi commit message**
Lệnh: _**Git commit --amend**_ ( cách thủ công)
- Gõ i -> vào chế độ insert
- Gõ esc để thoát insert
- Gõ “:wq” -> write and quit

Lệnh: _**git commit --amend -m”message”**_ (cách nhanh hơn)

## **2. Đưa từ vùng staging về working directory**
Lệnh: _**git restore --staged <file>**_

## **3. Đưa từ vùng repository về staging**
_**git reset HEAD~1 (undo 1 commit)**_

## **4. Branching model**
- Branch = nhánh        
    - Dùng branch để tạo ra một vùng làm việc mới,
không ảnh hưởng tới vùng làm việc đã ổn định.
- Không có branch
    - Backup file ra chỗ khác, copy lại.
- Tạo branch

    - 'git branch <ten_branch>'

    - 'git checkout <ten_branch'

    - 'git checkout -b <ten_branch>' ( cách này vừa tạo nhánh và vừa checkout về nhánh đó luôn)

## **5. Gitignore file**
1. Tạo 1 file như bình thường và đặt tên là: 
.gitignore
-> Rồi điền tên file muốn ignore vào phần nội dung rồi save => Thì file này sẽ ở trạng thái untracked và không được git theo dõi

 *** Đối với folder thì điền: <tên folder>/ ( thêm dấu/ như trên)

 __*Note*__ Lệnh Git status dùng để check trạng thái của file

 # __II. Javascript__
__1. Convention__
- snake_case: chưa dùng
- kebab-case: tên file
- camelCase: tên biến (vs isPlaywrigh)
- PascalCase: tên class

__2. Console.log__
- console.log(‘Toi la Nga’);
- console.log(“Toi la Phong”);
- console.log(`${variable_name}`)
- let name = “Nga”;
- console.log(`Toi la ${name}`);
- console.log(“Toi ten la” + name) Dạng chuỗi
- console.log(“Toi ten la” , name) Tự động thêm dấu phẩy giữa các biến và text

__3. Object__

- Định nghĩa: Object = đối tượng, dùng để lưu trữ tập hợp các giá trị
vào cùng một biến hoặc hằng số

- Khai báo: let/const <ten_object> = {
<thuoc_tinh>: <gia_tri>,
...
}

    - Trong đó:
        +  <thuoc_tinh>: giống quy tắc đặt tên
biến
        + <gia tri>: có kiểu giống biến, hoặc
là 1 object khác.

Ví dụ:

○ let user = {“name”: “Alex”, “age”: 10,
“email”: “alex@gmail.com”}

○ const product = {
“name”: “Laptop”,
“price”: 500,
“isWindow”: true,
“manufacturer”: {
“name”: “Acer”,
“year”: 2024
}

● Sử dụng:

○ console.log("name = " + user.name);

○ console.log("manufacturer name = " +
product.manufacturer.name);

○ console.log(“price = “,
product[“price”]);

● Gán lại:

○ user.age = 28
○ product[“manufacturer”][“year”] = 2025


__3. Logical operator__

- && : cả 2 vế của mệnh đề đều
đúng

- || : một trong 2 vế đúng

- ! : đảo ngược lại giá trị

__4. Array__

● Tạo mảng
 -  Khai báo let/const [0,1,2,3] or let/const ["Trang", "Phương"]
 - Sử dụng

● Truy xuất mảng
-  Độ dài mảng: length console.log(arr.length)
-  Lấy phần tử theo index:[0], [1], [2] console.log(arr.[0])


__5.Function__
- Function = hàm, là đoạn code được đặt
tên và có thể tái sử dụng, thực hiện
1 nhiệm vụ hoặc 1 tính toán cụ thể.

    - Khai báo
function <nameFunction>() {
// code
}
    - Parameter
    - Return value
