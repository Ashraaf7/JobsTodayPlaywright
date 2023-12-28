const { test, expect } = require('@playwright/test');

test('loginTC', async ({page}) => {
    await page.goto('https://www.stagjobstoday.world/en/login/');
    await page.getByPlaceholder('Email address').fill('jobseeker12@gmail.com');
    await page.getByPlaceholder('Password').fill('test123456');

    // Simulate pressing the TAB key
    await page.getByRole('button', { name: 'Login' }).focus();

    // Send keys individually
    await page.keyboard.press('Digit0');
    await page.keyboard.press('Digit7');
    await page.keyboard.press('Digit8');
    await page.keyboard.press('Digit9');

    await page.getByRole('button', { name: 'Login' }).click();

    await page.waitForTimeout(2000);

    expect(page.url()).toBe('https://www.stagjobstoday.world/en/')
  });
  
  test('test', async ({ page }) => {
    await page.goto('https://www.stagjobstoday.world/en/login/');
    await page.locator('span').filter({ hasText: /^EN$/ }).click();
    await page.locator('span').filter({ hasText: 'DE' }).click();
    await expect(page.locator('#candidate-login')).toContainText('Anmelden');
  });