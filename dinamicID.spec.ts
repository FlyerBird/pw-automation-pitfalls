import { test, expect } from '@playwright/test';

test('click button ID dinámico y captura el id después de recargar la página', async ({ page }) => {
  await page.goto('http://www.uitestingplayground.com/dynamicid');

    // Espera a que el botón esté presente en la página
    const buttonSelector = 'button.btn-primary';
    await page.waitForSelector(buttonSelector);
    
    // Haz clic en el botón
    await page.click(buttonSelector);

    // Obtén el elemento del botón
    const buttonElement = await page.locator(buttonSelector);
    
    // Captura el ID dinámico después de hacer clic
    const dynamicIdAfterClick = await buttonElement.getAttribute('id');
    console.log('ID dinámico después de hacer clic:', dynamicIdAfterClick);

    // Recarga la página
    await page.reload();

    // Espera a que el botón esté presente en la página después de recargar
    await page.waitForSelector(buttonSelector);

    // Obtén el nuevo elemento del botón después de recargar
    const newButtonElement = await page.locator(buttonSelector);

    // Captura el nuevo ID dinámico después de recargar la página
    const newDynamicIdAfterReload = newButtonElement ? await newButtonElement.getAttribute('id') : null;
    console.log('Nuevo ID dinámico después de recargar la página:', newDynamicIdAfterReload);

    // Afirmaciones usando expect
    expect(dynamicIdAfterClick).not.toEqual(newDynamicIdAfterReload);
})


