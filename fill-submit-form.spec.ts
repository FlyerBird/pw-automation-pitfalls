import { test, expect } from '@playwright/test';

test('Fill in an Submit the Form', async ({ page }) => {
    await page.goto('http://www.uitestingplayground.com/sampleapp');

    // Fill up the username input
    await page.fill('input[name="UserName"]', 'new-test-username');

    // Fill up the password input
    await page.fill('input[name="Password"]', 'pwd');

    // Click the login button
    await page.click('#login');

    
    // Wait for an element that appears after a successful login:
    const loginSuccess = await page.waitForSelector('#loginstatus', { timeout: 5000 });

    const loginSuccessMessage = await loginSuccess.innerText();

    console.log(loginSuccessMessage);

    // Assertion to check if the login was successful (replace with your own logic)
    expect(loginSuccess).toBeTruthy();
    
})
