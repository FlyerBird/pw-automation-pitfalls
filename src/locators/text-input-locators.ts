import { Locator, Page } from '@playwright/test';

export class TextInputPageLocators {
     readonly page: Page;
     readonly inputField: Locator 
     readonly button: Locator 

     constructor(page: Page) {
        this.page = page;

        this.inputField = page.locator('#newButtonName');
        this.button = page.locator('#updatingButton')
        
    }
}

