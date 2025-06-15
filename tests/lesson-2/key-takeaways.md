# **I.VCS (Vesion control system)**
**1. Định nghĩa**
* Hệ thống quản lý các phiên bản trên cloud (xem được phần chỉnh sửa - ai là người chỉnh sửa, các phiên bản trước chỉnh sửa và sau chỉnh sửa)

**2. Type of vcs**
* Có 3 loại 
    - Local: Lưu ở máy cá nhân
    - Centralized: Lưu ở máy chủ tập trung
    -  Distributed: Lưu ở trên 1 respo nào đó 

# **II. Git**
**1. Định nghĩa**
- Git dùng để quản lý nhiều phiên bản khác nhau và để làm việc giữa nhiều người

**2. Sự khác nhau giữa Git và Github**

Git    |Github       |
---------------|----------------|
| Là 1 phần mềm   | Là 1 dịch vụ web |          |
| Cài trên máy    | Host trên website |       |
| Là một commandline tool    | Là công cụ có giao diện |       |
| Là công cụ quản lý phiên bản, đưa file vào Git repository |Là nơi để upload Git repository lên       |
| Có các tính năng của Version Control System|Có các tính năng của Version Control System và một số tínhnăng khác|

**3. States of Git**
- Working directory: Các file mới hoặc file
có thay đổi
- Staging area: Các file đưa vào
vùng chuẩn bị
commit (tạo ra
các phiên bản)
- Respository: Các commit
(phiên bản)

| STT | States    |Command        |
|-----|---------------|----------------|
| 1   | Working directory | Tạo file rồi dùng lệnh: <pre> ```Git init``` </pre> (nếu trước đó chưa tạo folder trên Git nếu có rồi thì bỏ qua lệnh này).  Cách cấu hình tên Git: Cho 1 repo  <pre> ```git config user.name “<name>”``` </pre> <pre> ``git config user.email “<email>”`` </pre>Cho toàn bộ máy tính (default) <pre> ``git config --global user.name“user”`` </pre> <pre> git config --global user.email“email”|
| 2   | Staging area  |Sử dụng lệnh (Nếu muốn add riêng lẻ từng file) :<pre> ```Git add tên file ``` </pre> . Sử dụng lệnh Nếu muốn add tất cả các file) :<pre> ```Git add . ``` </pre>|
| 3   | Respository |  Dùng lệnh sau để commit:  <pre> ```git commit -m “” ```</pre>Kiểm tra lịch sử log sử dụng: <pre> ```git log ``` |

**4. Commit convention**
-  Commit message cần rõ ràng, chuyên
nghiệp
-Trong lớp học, dùng convention sau:
`<type>:<short_description>`

+ type: loại commit
  - chore: sửa nhỏ lẻ, chính tả, xóa
file không dùng tới,...
  - feat: thêm tính năng mới, test
case mới
  - fix: sửa lỗi 1 test trước đó
+ short_description: mô tả ngắn gọn
(50 kí tự), tiếng Anh hoặc tiếng Việt
không dấu.

● Ví dụ
1. “chore: remove unused file”
2. “feat: add code for exercises 2”

**5. Git workflow**

    1. Không dùng global config
    init > config > add > commit > push

    2. DÙng global config
    init > add > commit > push

# **III.Javascript**
**1 Variable (var và let)**
-  Định nghĩa: biến, dùng để lưu trữ giá trị,
có thể thay đổi giá trị được.

    - var <ten_bien> = <gia tri>;
    - let <ten_bien> = <gia tri>;
        - Trong đó: <ten_bien>: Bắt đầu bằng ký tự chữ,hoặc gạch dưới, hoặc $, không chứa dấu cách, không là các "từ khóa",
tức là các từ đã có trong
Javascript (ví dụ: var, let,
for, if,...)

=> Khác nhau giữa var và let?

        - var khai báo lại được, let thì không

 Ví dụ:       
- var item1 = ‘a’; var item1 = ‘c’; // OK
- let item2 = ‘b’; let item2 = ‘d’; // error

● Phạm vi của biến

- var: phạm vi toàn cục (global)
-  let: phạm vi trong cặp ngoặc {}
-  Nên dùng: let

**2. Constant**

a, Định nghĩa
- Constant = hằng số. Dùng để khai báo các giá trị không thể thay đổi.
    - Khai báo:
    `const<name> = <value>`

● Ví dụ: const framework =
“Playwright”;
Sử dụng console.log(framework); Gán lại
 framework = “Cypress” // Error

 **3. Data type**
-  Có 8 loại kiểu dữ liệu: String, Number,
Bigint, Boolean, Undefined, Null,
Symbol, Object.

    - Kiểu Number: dùng để khai báo một số.Ví dụ: 100, 0, 100.5, -100.005
    - Kiểu Boolean: dùng để khai báo một giá trị kiểu đúng sai (true)
    - Kiểu String: dùng để khai báo một chuỗi

  **4. Comparison operator**

- Dùng để so sánh giá trị giữa 2 biến với
nhau. Kết quả sẽ trả về Boolean (true
hoặc false).
    - Các toán tử so sánh:
        + So sánh hơn kém: >, <
        + So sánh bằng: ==, ===,!=, !==,>=, <=

  **5. Unary operator = toán tử một
ngôi.**

- Dùng để tăng hoặc giảm giá
trị
    + i++ bằng với i=i+1 or i += n
    + i-- bằng với i=i-1 or i -= n

**6.Arithmetic operator = toán tử
số học.**
- Conditional = điều kiện, dùng để kiểm tra
có nên thực hiện một đoạn logic không.
    - Cú pháp: if (<điều kiện>) { // code }. Nếu
điều kiện đúng, sẽ chạy đoạn code. Ví dụ:
if (5 > 3) {
console.log("5 lớn hơn 3")
}

**7.Loops = vòng lặp**
- Dùng để thực hiện một đoạn logic một
số lần nhất định
    - Cú pháp: for(<khởi tạo>; <điều
kiện dừng>; <điều kiện tăng>) {
// code }
    - Ví dụ:
for (let i = 1; i <= 10; i++) {
console.log("Giá trị của i là: ", i);


# **Note*
- Format code:
    - Mac: Option + Shift + F
    - Window: Alt + Shift + F