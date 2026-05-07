// 1. Got to - >https://katalon-demo-cura.herokuapp.com/
// 2. Click On the make appointment.  
// 3. Next page, Enter the username and password
// 4. https://katalon-demo-cura.herokuapp.com/#appointment We need to verify that the URL is now changed to this. 
// 5. And verify The page contains heading Make Appointment

import { test, expect } from "@playwright/test";

test("MakeAppointments", async ({ page }) => {
    await page.goto("https://katalon-demo-cura.herokuapp.com/");

    await page.locator('#btn-make-appointment').click();
    await page.locator('#txt-username').fill('John Doe');
    await page.locator('#txt-password').fill('ThisIsNotAPassword');
    await page.locator('#btn-login').click();


    await expect(page).toHaveURL("https://katalon-demo-cura.herokuapp.com/#appointment")

    const heading = page.locator('.col-sm-12.text-center');
    await expect(heading).toContainText("Make Appointment");

}); 