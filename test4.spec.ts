import { test } from '@playwright/test';
test("Register", async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/');
    await page.click('//a[@href="04-xpath-personal-notes.html"]');
    const articles = [
        {
            title: "NASA phát hiện hành tinh giống Trái Đất",
            content: "Các nhà khoa học NASA đã phát hiện một hành tinh có điều kiện tương tự Trái Đất, cách chúng ta 300 năm ánh sáng. Khả năng tồn tại sự sống đang được nghiên cứu."
        },
        {
            title: "AI vượt con người trong giải mã protein",
            content: "Công nghệ AI đang hỗ trợ phân tích cấu trúc protein với tốc độ nhanh gấp hàng nghìn lần con người. Điều này mở ra bước ngoặt trong nghiên cứu y sinh."
        },
        {
            title: "Phát hiện lỗ đen cực lớn ẩn trong thiên hà gần",
            content: "Một lỗ đen siêu lớn với khối lượng gấp hàng triệu lần Mặt Trời vừa được phát hiện trong thiên hà lân cận bằng kỹ thuật quan sát tia X."
        },
        {
            title: "Khám phá hóa thạch sinh vật 500 triệu năm tuổi",
            content: "Các nhà khảo cổ Trung Quốc tìm thấy hóa thạch sinh vật thời kỳ Cambri, có hình thái chưa từng thấy. Phát hiện này giúp làm rõ tiến hoá sinh giới sơ khai."
        },
        {
            title: "Trung Quốc thử nghiệm pin mặt trời ngoài không gian",
            content: "Trung Quốc vừa thử nghiệm thành công công nghệ truyền điện từ vệ tinh quay quanh Trái Đất xuống mặt đất. Đây là bước tiến lớn trong khai thác năng lượng vũ trụ."
        },
        {
            title: "Phát minh vật liệu tự phục hồi siêu bền",
            content: "Một nhóm nghiên cứu Nhật Bản đã tạo ra loại polymer có khả năng tự vá vết rách trong vòng vài giây. Vật liệu này có thể ứng dụng trong thiết bị điện tử và y tế."
        },
        {
            title: "Hạt nhân nguyên tử dưới áp suất cực cao",
            content: "Các nhà vật lý tái hiện trạng thái hạt nhân nguyên tử trong lõi sao neutron. Áp suất lớn gấp tỷ lần Trái Đất đã tạo ra hiện tượng vật lý kỳ lạ."
        },
        {
            title: "Vi khuẩn có thể sản xuất điện",
            content: "Các nhà khoa học phát hiện một loài vi khuẩn có khả năng tạo ra dòng điện nhỏ từ quá trình trao đổi chất. Ứng dụng tiềm năng trong pin sinh học."
        },
        {
            title: "Đại dương nguyên thuỷ trên sao Hoả?",
            content: "Bằng chứng mới từ tàu thăm dò NASA cho thấy sao Hoả từng có đại dương nông cách đây hàng tỷ năm. Đây là manh mối lớn cho khả năng có sự sống cổ xưa."
        },
        {
            title: "Cây trồng biến đổi gen chịu hạn tốt hơn",
            content: "Giống lúa biến đổi gen ở Ấn Độ cho năng suất cao hơn 40% trong điều kiện khô hạn. Công nghệ này hứa hẹn giải quyết khủng hoảng lương thực."
        }
    ];
    for (const article of articles) {
        await page.locator('//input[@id="note-title"]').fill(article.title);
        await page.locator('//textarea[@id="note-content"]').fill(article.content);
        await page.click('//button[@id="add-note"]');
    };
    await page.locator('//input[@id="search"]').fill(articles[0].title);
})
