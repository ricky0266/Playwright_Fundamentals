// test one browser with multiple contexts
import { test, expect } from "@playwright/test";

test("One Browser Multiple Contexts", async ({ browser }) => {
    //first context
    const context1 = await browser.newContext();
    const page1 = await context1.newPage();
    await page1.goto("https://katalon-demo-cura.herokuapp.com/");

    // Second context
    const context2 = await browser.newContext();
    const page2 = await context2.newPage();

    await page2.goto(
        "https://katalon-demo-cura.herokuapp.com/#appointment"
    );

    await context1.close();
    await context2.close();

});
