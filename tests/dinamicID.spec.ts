import { test, expect } from '@playwright/test';
import { DynamicIdPageLocators } from '../src/locators/dinamicID-locators';

test('click button ID dinámico y captura el id después de recargar la página', async ({ page }) => {
    // Instanciar los localizadores de la página
    const locators = new DynamicIdPageLocators(page);

    // Navegar a la página con el botón de ID dinámico
    await page.goto('http://www.uitestingplayground.com/dynamicid');

    // Esperar a que el botón esté presente en la página
    await locators.button.waitFor();

    // Hacer clic en el botón
    await locators.button.click();

    // Capturar el ID dinámico después de hacer clic
    const dynamicIdAfterClick = await locators.button.getAttribute('id');
    console.log('ID dinámico después de hacer clic:', dynamicIdAfterClick);

    // Recargar la página
    await page.reload();

    // Esperar a que el botón esté presente en la página después de recargar
    await locators.button.waitFor();

    // Capturar el nuevo ID dinámico después de recargar la página
    const newDynamicIdAfterReload = await locators.button.getAttribute('id');
    console.log('Nuevo ID dinámico después de recargar la página:', newDynamicIdAfterReload);

    // Afirmar que los IDs dinámicos son diferentes
    expect(dynamicIdAfterClick).not.toEqual(newDynamicIdAfterReload);
});

