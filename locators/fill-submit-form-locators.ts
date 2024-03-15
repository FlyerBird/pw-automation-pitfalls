import { Locator, Page } from '@playwright/test';

export class FillSubmitFormPageLocators {
    readonly page: Page;
    readonly nameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.nameInput = page.locator('input[name="UserName"]');
        this.passwordInput = page.locator('input[name="Password"]');
        this.loginButton = page.locator('#login');
    }
}
