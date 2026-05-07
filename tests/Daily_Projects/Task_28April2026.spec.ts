//You need to go to https://vwo.com/free-trial/?utm_medium=website&utm_source=login-page&utm_campaign=mof_eg_loginpage and for the incorrect Gmail ID, verify that the message will come. 

import { test, expect } from "@playwright/test";

test("Verify error message for invalid business email", async ({ page }) => {
    await page.goto("https://vwo.com/free-trial/?utm_medium=website&utm_source=login-page&utm_campaign=mof_eg_loginpage");

    await page.locator('#page-v1-step1-email').fill("hello@gmail.com");
    await page.locator('#page-free-trial-step1-cu-gdpr-consent-checkbox').click();
    await page.getByRole('button', { name: 'Create a Free Trial Account' }).click();

    const alert = page.getByText("gmail.com doesn\'t look like a business domain. Please use your business email.");
    await expect(alert).toBeVisible();


});