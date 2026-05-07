// Same Context Multiple Pages using test.describe
import { test, expect, BrowserContext, Page } from "@playwright/test";

test.describe("Same Context Multiple Pages", () => {

    let context: BrowserContext;
    let page1: Page;
    let page2: Page;

    test.beforeAll(async ({ browser }) => {

        // Create one shared context
        context = await browser.newContext();

        // Create multiple pages in same context
        page1 = await context.newPage();
        page2 = await context.newPage();

    });

    test("Open first page", async () => {

        await page1.goto("https://example.com");

        await expect(page1).toHaveTitle(/Example/);

    });

    test("Open second page", async () => {

        await page2.goto("https://playwright.dev");

        await expect(page2).toHaveTitle(/Playwright/);

    });

    test.afterAll(async () => {

        await context.close();

    });

});