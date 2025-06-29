import { test } from '@playwright/test';
test("Register", async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/');
    await page.click('//a[@href="03-xpath-todo-list.html"]');
    for (let i = 0; i < 100; i++) {
        await page.locator('//input[@id="new-task"]').fill(`Todo ${i}`);
        await page.click('//button[@id="add-task"]');
    };
    page.on('dialog', async dialog => dialog.accept());
    for (let i = 1; i <= 100; i += 2) {
        const todoText = `Todo ${i}`;
        await page.locator(`//span[text()="${todoText}"]/following-sibling::div//button[text()="Delete"]`).click();
    };

}
)