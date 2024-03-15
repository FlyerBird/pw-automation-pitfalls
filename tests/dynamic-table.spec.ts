import { test, expect, Locator } from '@playwright/test';

test('Get value for Chrome CPU Load and compare it with value in the yellow label', async ({ page }) => {
    await page.goto('http://www.uitestingplayground.com/dynamictable');
    const yellowCpu = await page.locator('.bg-warning').innerText();

     const propertyName = 'Chrome'; 
     const rows = await page.locator('div[role="rowgroup"]').nth(1).locator('div[role="row"]').all()
     
     let desiredRowLocator: Locator = page.getByText('ERROR') ;
     
     for (const row of rows) {
       const cells = await row.locator('span[role="cell"]').all();
       for (const cell of cells) {
        const propertyValue = await cell.innerText()
       if (propertyValue === propertyName) {
         desiredRowLocator = row;
         break;
       }
      }
    }

     const cpuValue = await desiredRowLocator.getByText('%').innerText();
    
     function extract(cadena: string): string | null {
        const porcentajeRegex = /(\d+(\.\d+)?)%/;
        const match = cadena.match(porcentajeRegex);
        return match ? match[0] : null;
      }

      const yellowCpuExtracted = extract(yellowCpu);
      console.log(cpuValue)
      console.log(yellowCpuExtracted)

      expect(cpuValue === yellowCpuExtracted).toBeTruthy();
    
})
