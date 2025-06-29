import { test } from '@playwright/test';
test("Register", async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/');
    await page.click('//a[@href="01-xpath-register-page.html"]');
    await page.locator('//input[@id="username"]').fill('Trangdt98');
    await page.locator('//input[@id="email"]').fill('doantranghn98@gmail.com');
    await page.locator('//input[@id="female"]').check();
    await page.locator('//input[@id="traveling"]').check();
    await page.locator('//select[@id="country"]').selectOption({ value: "usa" });
    await page.locator('//input[@id="profile"]').setInputFiles("D:/pw-course (1)/Data/165522424_10225222190398060_7591752606277882188_n.jpg");
    await page.click('//button@type="submit"]');
}
)