import { Page, Locator, expect } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly title: Locator;
  readonly cartIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.getByText('Products');
    this.cartIcon = page.locator('.shopping_cart_link');
  }

  async validateLoginSuccess() {
    await expect(this.title).toBeVisible();
  }

  async addBackpackToCart() {
    await this.page.locator('#add-to-cart-sauce-labs-backpack').click();
  }

  async openCart() {
    await this.cartIcon.click();
  }
}