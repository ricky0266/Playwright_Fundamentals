import { test, expect, Locator } from '@playwright/test';

const URL = 'https://simplemaps.com/svg/country/in';

test.describe('StateSearch', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto(URL);
    });

    test('search', async ({ page }) => {

        const allStates: string[] = await page.locator('#admin1_map_inner').allInnerTexts();

        console.log("ShowAll" + allStates);


    });

});