import { test, expect } from '@playwright/test';
import { ScrollbarsPageLocators } from '../src/locators/scrollbars-locators';

test('Find a Button in the scroll view and click it', async ({ page }) => {
    await page.goto('http://www.uitestingplayground.com/scrollbars');

    // Instanciar los localizadores de la página
    const locators = new ScrollbarsPageLocators(page);

    // Hacer scroll hasta que el botón esté visible
    await locators.button.scrollIntoViewIfNeeded();
    
    /* Scroll the button into view
    await page.evaluate((selector) => {
        const button = document.querySelector(selector);
        if (button) {
            button.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.error('Button not found');
        }
    }, button);
    */

    // Hacer clic en el botón
    await locators.button.click();

    // Use expect to check if the button is visible
    const isButtonVisible = await locators.button.isVisible();
    expect(isButtonVisible).toBe(true);
})
