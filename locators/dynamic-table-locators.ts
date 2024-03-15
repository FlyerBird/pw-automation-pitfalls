import { Locator, Page } from '@playwright/test';

export class DynamicTablePageLocators {
    readonly page: Page;
    readonly yellowLabel: Locator;
    readonly tableRows: Locator;

    constructor(page: Page) {
        this.page = page;
        this.yellowLabel = page.locator('.bg-warning');
        this.tableRows = page.locator('div[role="rowgroup"] div[role="row"]');
    }

    async findRowContainingProperty(propertyName: string): Promise<Locator | null> {
        const rows = await this.tableRows.all();

        for (const row of rows) {
            const cells = await row.locator('span[role="cell"]').all();
            for (const cell of cells) {
                const propertyValue = await cell.innerText();
                if (propertyValue === propertyName) {
                    return row;
                }
            }
        }

        return null;
    }
}
