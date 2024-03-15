import { test, expect } from '@playwright/test';
import { TextInputPageLocators } from '../src/text-input-locators';

test('Write text into the input field, click the Button and make sure the button name is Changing', async ({ page }) => {
    await page.goto('http://www.uitestingplayground.com/textinput');

    // Creamos una instancia de TextInputPageLocators pasando la página actual como argumento
    const locators = new TextInputPageLocators(page);

    // Set a dynamic text
    const dynamicText = 'Aloha ✈️';

    // Record setting text into the input field
    await locators.inputField.fill(dynamicText)
   
    // Click the button
    await locators.button.click();

    // Obtener el elemento del botón actualizado
    const updatedButton = await locators.button

    // Retrieve the text content of the button after clicking
    const buttonTextAfterClick = await updatedButton.textContent();

    // Expectation: Verify that the button name is changing
    expect(buttonTextAfterClick).not.toBe('Button That Should Change its Name Based on Input Value'); 

    // Additional expectation: Verify that the button name matches the text you filled in the input
    expect(buttonTextAfterClick).toBe(dynamicText);

    

})
