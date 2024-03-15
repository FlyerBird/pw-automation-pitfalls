import { test, expect } from '@playwright/test';
import { FillSubmitFormPageLocators } from '../src/locators/fill-submit-form-locators';

test('Fill in an Submit the Form', async ({ page }) => {
    await page.goto('http://www.uitestingplayground.com/sampleapp');

    // Instanciar los localizadores de la página
    const locators = new FillSubmitFormPageLocators(page);

    // Fill up the username input
    await locators.nameInput.fill('new-test-username');

    // Fill up the password input
    await locators.passwordInput.fill('pwd');

    // Click the login button
    await locators.loginButton.click();
    
    // Wait for an element that appears after a successful login:
    const loginSuccess = await page.waitForSelector('#loginstatus', { timeout: 5000 });

    const loginSuccessMessage = await loginSuccess.innerText();

    console.log(loginSuccessMessage);

    // Assertion to check if the login was successful (replace with your own logic)
    expect(loginSuccess).toBeTruthy();
    
})
