import { Page, Locator, expect } from '@playwright/test';

export class CheckoutOverviewPage {
  readonly page: Page;
  readonly finishButton: Locator;
  readonly confirmationMessage: Locator;
  readonly overviewTitle: Locator;

  constructor(page: Page) {
    this.page = page;
    this.finishButton = page.getByRole('button', { name: 'Finish' });
    this.confirmationMessage = page.getByText('Thank you for your order!');
    this.overviewTitle = page.getByText('Checkout: Overview');
  }

  async validateOverviewPage() {
    await expect(this.overviewTitle).toBeVisible();
  }

  async finishCheckout() {
    await this.finishButton.click();
  }

  async validateOrderConfirmation() {
    await expect(this.confirmationMessage).toBeVisible();
  }
}