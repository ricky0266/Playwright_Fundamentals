//Open the Flipkart website go to this link flipkart.com/search
//search for the macmini and click on the SVG icon
//Get the all results on the first page and click on the low to high button and give me the cheapest macmini available on the flipkart.


import { test, expect, Locator } from '@playwright/test';

const URL = 'https://www.flipkart.com/search';

test.describe('FlipkartTest', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto(URL);
    });

    test('locate flipKart elements', async ({ page }) => {

        await page.getByPlaceholder('Search for products, brands and more').fill('macmini');

        const svgElements: Locator = page.locator('svg');
        await svgElements.first().click();

        // capture all product titles
        // const products = page.locator('div[data-id]');

        // const count = await products.count();
        // console.log(`Total Products: ${count}`);
        // const items: string[] = await products.allInnerTexts();
        // for (const item of items) {
        //     console.log(item);
        // }
        await page.waitForLoadState('networkidle');
        //sort low to high
        await page.getByText('Price -- Low to High').click();
        await page.waitForLoadState('networkidle');
        //cheapest macmini
        const firstProduct = await page.locator('div[data-id]').first();
        const productName = await firstProduct.locator('a[title]').nth(0).textContent();
        console.log(`Product Title: ${productName}`);

        const productPrice = await firstProduct.locator('div.hZ3P6w').nth(0).textContent();
        console.log(`Product Price: ${productPrice}`);


    });


});


