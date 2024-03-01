import { test, expect } from '@playwright/test';

test('button blue click and press ok in alert popup', async ({ page }) => {
  await page.goto('http://www.uitestingplayground.com/classattr');

  // Click on the primary (blue) button
  const buttonBlue = page.locator('button.btn-primary');
  await buttonBlue.click();
  
  page.on('dialog', dialog => dialog.accept());
  //Expectear: Button Blue se puede clickar
  expect(buttonBlue).toBeEnabled();

});

