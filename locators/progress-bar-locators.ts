import { Locator, Page } from '@playwright/test';

export class ProgressBarPageLocators {
    readonly page: Page;
    readonly startButton: Locator;
    readonly stopButton: Locator;
    readonly progressBar: Locator;

    constructor(page: Page) {
        this.page = page;
        this.startButton = page.locator('#startButton');
        this.stopButton = page.locator('#stopButton');
    }
}
