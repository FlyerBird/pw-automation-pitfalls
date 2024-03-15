import { Locator, Page } from '@playwright/test';

export class HiddenLayersPageLocators {
    readonly page: Page;
    readonly greenButton: Locator;
    readonly blueButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.greenButton = page.locator('button.btn-success');
        this.blueButton = page.locator('button.btn-primary');
    }
}
