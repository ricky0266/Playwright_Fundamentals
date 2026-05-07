// One Browser Multiple Contexts Multiple Pages

import { test, expect } from "@playwright/test";

test("One Browser Multiple Contexts Multiple Pages",
    async ({ browser }) => {


        // Context 1


        const context1 = await browser.newContext();

        const page1 = await context1.newPage();
        await page1.goto("https://example.com");

        const page2 = await context1.newPage();
        await page2.goto("https://google.com");


        // Context 2


        const context2 = await browser.newContext();

        const page3 = await context2.newPage();
        await page3.goto("https://playwright.dev");

        const page4 = await context2.newPage();
        await page4.goto("https://github.com");

    });