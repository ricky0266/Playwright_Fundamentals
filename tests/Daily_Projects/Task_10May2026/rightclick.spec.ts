//right click on target 2 and 3

import { test, expect } from "@playwright/test";

test("right click", async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/widgets/context-menu");

    await page.getByTestId('ctx-target-2').first().click({ button: 'right' });

    const allList: string[] = await page.locator('#ctx-menu').allInnerTexts();
    console.log("Capture all" + allList);
    await page.getByText('Copy', { exact: true }).first().click();
    await page.waitForTimeout(2000);

});
