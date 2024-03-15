import { Locator, Page } from '@playwright/test';

export class DynamicIdPageLocators {
    readonly page: Page;
    readonly button: Locator;

    constructor(page: Page) {
        this.page = page;
        this.button = page.locator('button.btn-primary');
    }
}
