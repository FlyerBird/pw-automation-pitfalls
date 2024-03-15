import { test, expect } from '@playwright/test';
import { AjaxPageLocators } from '../src/locators/ajax-locators';

test('Element appear after the AJAX, Wait for an Element to Show up', async ({ page }) => {
    await page.goto('http://www.uitestingplayground.com/ajax');

    const buttonAjax = 'button.btn-primary';
    const textElement = 'p.bg-success';

    await page.click(buttonAjax);

    await page.waitForSelector(textElement);

    await page.click(textElement);

    expect (textElement).toBeTruthy();
})
