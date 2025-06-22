// 1

let addEventListener = "Trái Đất";
let mission = "Khám phá Vũ trụ K15";
let crew = [
    "Quỳnh Như",
    "Tuyết Nhi",
    "Vĩnh Phú",
    "Huỳnh Liên",
    "Sơn Thịnh",
    "Thảo Ly",
    "Thuỳ Trang",
    "Hương Cao",
    "Quang Toàn",
    "Mai Hoàng"
];
console.log(launchShip(crew));
function launchShip(crew) {
    return `Chuẩn bị khởi động! Phi hành đoàn gồm: ${crew.join(", ")} sẽ đồng hành cùng bạn trong chuyến phiêu lưu ${mission}!`;
}

// 2
function calculateDistance(speed, time) { return speed * time }
const distance = calculateDistance(1000, 24);
console.log(`Khoảng cách đến hành tinh bí ẩn là ${distance} km.`);

// 3.
function convertTimeToHex(time) {
    return time.toString(16);
}

const hexTime = convertTimeToHex(120);
console.log(`Thời gian ở hệ thập lục phân là: ${hexTime}`);

// 4
function decryptCode(code) {
    let result = "";

    for (let char of code) {
        if (char === char.toUpperCase()) {
            result += char.toLowerCase();
        } else {
            result += char.toUpperCase();
        }
    }

    return result;
}

const decrypted = decryptCode("K15 Challenge");
console.log(decrypted);

// 5
function returnToEarth() {
    console.log("Chuẩn bị trở về Trái Đất!");
}

returnToEarth();
