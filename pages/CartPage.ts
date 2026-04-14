import { Page, Locator, expect } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly cartTitle: Locator;
  readonly cartItem: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartTitle = page.getByText('Your Cart');
    this.cartItem = page.getByText('Sauce Labs Backpack');
  }

  async validateCartPage() {
    await expect(this.cartTitle).toBeVisible();
  }

  async validateProductInCart() {
    await expect(this.cartItem).toBeVisible();
  }
}