import { Locator, Page } from '@playwright/test';

export class ClassAttributePageLocators {
    readonly page: Page;
    readonly blueButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.blueButton = page.locator('button.btn-primary');
    }
}
