import { test, expect } from '@playwright/test';

test('Write text into the input field, click the Button and make sure the button name is Changing', async ({ page }) => {
    await page.goto('http://www.uitestingplayground.com/textinput');

    // Set a dynamic text
    const dynamicText = 'Aloha ✈️';
    
    // Record setting text into the input field
    const inputField = await page.locator('#newButtonName');
    await inputField.fill(dynamicText);  // Write the text you would like to see in the button

    // Click the button
    const button = await page.locator('#updatingButton');
    await button.click();

    // Retrieve the text content of the button after clicking
    const buttonTextAfterClick = await button.textContent();

    // Expectation: Verify that the button name is changing
    expect(buttonTextAfterClick).not.toBe('Button That Should Change its Name Based on Input Value'); 

    // Additional expectation: Verify that the button name matches the text you filled in the input
    expect(buttonTextAfterClick).toBe(dynamicText);

    

})
