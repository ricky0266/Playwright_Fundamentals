//https://app.thetestingacademy.com/playwright/tables/practice
//Complete the QA profile with whatever elements you know and add a grid hub profile as well as a screenshot also. 


import { test, expect } from "@playwright/test";

test("QA Profile Form practice", async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/tables/practice");
    await page.locator('#first-name').fill('Rushil');
    await page.locator('#last-name').fill('Garg');
    await page.locator('[data-testid="gender-male"]').click();
    await page.locator('#years-experience').selectOption('6');
    await page.locator('#profile-date').fill('2026-05-07');
    await page.locator('[data-testid="profession-manual"]').click();
    await page.locator('[data-testid="tool-uft"]').click();
    await page.locator('[data-testid="continent-north-america"]').click();
    await page.locator('[data-testid="tab-wait"]').click();
    await page.locator('#upload-image').setInputFiles('C:/Users/ITSD/Desktop/PDF samples/dummy.pdf');
    await page.locator('#download-file').click();
    await page.locator('#profile-submit').click();

    const outputMessage = page.locator('#submission-output');

    await expect(outputMessage).toContainText('Rushil');
    await expect(outputMessage).toContainText('Garg');
    await expect(outputMessage).toContainText('Manual Tester');

});

