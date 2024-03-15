import { test, expect } from '@playwright/test';
import { HiddenLayersPageLocators } from '../src/locators/hidden-layers-locators';

test('No se puede presionar el botón verde dos veces', async ({ page }) => {
    // Navega a la página con el botón verde
    await page.goto('http://www.uitestingplayground.com/hiddenlayers');

    // Selecciona el botón verde por su clase
    const buttonSelector = 'button.btn-success';
    const buttonSelector2 = 'button.btn-primary';

    // Obtiene el color del botón antes de hacer clic
    const buttonElement = await page.waitForSelector(buttonSelector);
    const colorBeforeClick = await buttonElement.evaluate((el) => {
    return window.getComputedStyle(el).getPropertyValue('background-color');
    });
    console.log(colorBeforeClick);

    // Realiza el primer clic en el botón verde
    await page.click(buttonSelector);

    // Espera a que el botón cambie (puede ser necesario ajustar el tiempo según tu aplicación)
    await page.waitForTimeout(1000);

    // Obtiene el color del botón después de hacer clic
    const buttonElement2 = await page.waitForSelector(buttonSelector2);
    const colorAfterClick = await buttonElement2.evaluate((el) => {
    return window.getComputedStyle(el).getPropertyValue('background-color');
    });
    console.log('Color después del clic:', colorAfterClick);

    await expect(colorBeforeClick).not.toEqual(colorAfterClick);


});
