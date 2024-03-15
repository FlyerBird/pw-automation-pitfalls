import { Locator, Page } from '@playwright/test';

export class AjaxPageLocators {
    readonly page: Page;
    readonly buttonAjax: Locator;
    readonly textElement: Locator;

    constructor(page: Page) {
        this.page = page;
        this.buttonAjax = page.locator('button.btn-primary');
        this.textElement = page.locator('p.bg-success');
    }
}