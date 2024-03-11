import { test, expect } from '@playwright/test';

test('Find a Button in the scroll view and click it', async ({ page }) => {
    await page.goto('http://www.uitestingplayground.com/scrollbars');

    const button = 'button.btn-primary';
    
    // Scroll the button into view
    await page.evaluate((selector) => {
        const button = document.querySelector(selector);
        if (button) {
            button.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.error('Button not found');
        }
    }, button);

    await page.click(button);

    // Use expect to check if the button is visible
    const isButtonVisible = await page.isVisible(button);
    expect(isButtonVisible).toBe(true);
})
