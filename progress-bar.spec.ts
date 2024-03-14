import { test, expect } from '@playwright/test';

test('Click Start Button and when progress bar reach 75% then should click Stop', async ({ page }) => {
    await page.goto('http://www.uitestingplayground.com/progressbar');

    const startButton = '#startButton';
    await page.click(startButton);

    const stopButton = '#stopButton';

    // Wait for the progress bar to reach 75%
    await page.waitForFunction(() => {
      const progressBar = document.querySelector('#progressBar') as HTMLDivElement;
      const valueNow = progressBar.getAttribute('aria-valuenow');
      return valueNow && parseInt(valueNow) >= 75;
    },
    { timeout: 30000 } // Adjust the timeout as needed

    );

    // Get the final value of the progress bar
    const finalProgressBarValue = await page.$eval('#progressBar', (progressBar) => parseInt(progressBar.getAttribute('aria-valuenow') ?? '0'));
    console.log(finalProgressBarValue)
    
    await page.click(stopButton);

    // Calculate the difference between the final progress bar value and 75%
    const difference = Math.abs(finalProgressBarValue - 75);

    // Assert that the difference is within an acceptable range (adjust as needed)
    expect(difference).toBeLessThanOrEqual(5); // You can adjust the threshold as needed
  

})
