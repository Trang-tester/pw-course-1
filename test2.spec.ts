import { test } from '@playwright/test';
test("Register", async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/');
    await page.click('//a[@href="02-xpath-product-page.html"]');
    await page.locator('//button[@data-product-id="1"]').dblclick();
    for (let i = 0; i < 3; i++) {
        await page.click('//button[@hdata-product-id="2"]');
    };
    await page.click('//button[@hdata-product-id="3"]');
}
)