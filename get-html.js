const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('https://app.vwo.com/#login');
    await page.waitForLoadState('networkidle');
    const formHtml = await page.locator('form').first().innerHTML();
    console.log(formHtml);
    await browser.close();
})();
