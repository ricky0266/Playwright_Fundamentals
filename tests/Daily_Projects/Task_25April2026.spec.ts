//Please now automate the App.vwo invalid username and password with error message. But now you have to use get by role. 

import { test, expect } from "@playwright/test";

test("automateapp.vwo.com", async ({ page }) => {
    await page.goto("https://app.vwo.com/#login");


    await page.getByRole('textbox', { name: 'email' }).fill('hello@yopmail.com');
    await page.getByRole('textbox', { name: 'password' }).fill('Test@1234');
    await page.getByRole('button', { name: 'Sign in', exact: true }).click();

    const alert = page.getByText("Your email, password, IP address or location did not match");
    await expect(alert).toBeVisible();


});