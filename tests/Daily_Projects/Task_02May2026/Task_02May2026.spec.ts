//https://tta-bank-digital-973242068062.us-west1.run.app/
//Load the solution to GitHub as a project.
//Make sure you add the custom reporter also, which I have given you by using here.
//Please create a readme file with the screenshots with custom reporter that you are able to verify as well. 

import { test, expect } from "@playwright/test";

test("toautomateTTA_Bank", async ({ page }) => {
    console.log("🌐 Navigating to TTA Bank Digital app...");
    await page.goto("https://tta-bank-digital-973242068062.us-west1.run.app/");

    console.log("🖱️  Clicking Sign Up button...");
    await page.getByRole('button', { name: 'Sign Up' }).click();

    console.log("✍️  Filling registration form - Name: Rushil Garg, Email: test@yopmail.com");
    await page.locator('[type="text"]').fill('Rushil Garg');
    await page.locator('[type="email"]').fill('test@yopmail.com');
    await page.locator('[type="password"]').fill('Test@1234');

    console.log("🚀 Submitting Create Account form...");
    await page.getByRole('button', { name: 'Create Account' }).click();

    console.log("✅ Verifying initial balance is $50,000.00...");
    await expect(page.getByRole("heading", { name: "$50,000.00" })).toBeVisible();

    console.log("💸 Initiating fund transfer of $5,000...");
    await page.getByRole('button', { name: 'Transfer Funds' }).click();
    await page.locator('[type="number"]').fill('5000');
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.getByRole('button', { name: 'Confirm Transfer' }).click();

    console.log("🏠 Navigating back to Dashboard...");
    await page.getByRole('button', { name: 'Dashboard' }).click();

    console.log("✅ Verifying updated balance is $45,000.00...");
    await expect(page.getByRole("heading", { name: "$45,000.00" })).toBeVisible();
    await expect(page.getByRole("main")).toContainText("$45,000.00");

    console.log("🎉 Test completed successfully! Balance updated from $50,000.00 → $45,000.00");
});