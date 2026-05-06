import { test, expect } from '@playwright/test';
test('Verify the title of the app.cwo.com', async ({ page }) => {
    await page.goto("http://app.vwo.com");
    await expect(page).toHaveTitle("Login - VWO");
});