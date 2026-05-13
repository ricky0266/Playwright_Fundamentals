//Hover to Add ons and click on dropdown and verify the result


import { test, expect } from "@playwright/test";

test("Hover", async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/widgets/hover-menu");

    await page.getByTestId('nav-add-ons').hover();
    await page.getByTestId('test-id-Meal').click();
    console.log(await page.locator('#output').textContent());
    await expect(page.locator('#output')).toContainText("Meal");
    await page.waitForTimeout(2000);

});



