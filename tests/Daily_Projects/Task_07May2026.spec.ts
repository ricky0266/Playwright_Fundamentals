//open this - https://app.thetestingacademy.com/playwright/webtable
//Search the Kabir, Verify that it is visible and checkbox it also, 

import { test, expect } from "@playwright/test";

test("Verify name on Web table", async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/webtable");
    await page.getByRole('searchbox', { name: 'Search employee table' }).fill('Kabir');
    // await page.locator('//td[text() = "Kabir.Khan"]/preceding-sibling::td').click();

    //or
    await page.locator("tr:has(td:text('Kabir.Khan'))").locator("td").first().click();

    await expect(page.locator('#selected-output')).toHaveText('Kabir.Khan');
});