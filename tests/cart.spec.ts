import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import credentials from '../test-data/credentials.json';

test.describe('E-Commerce Smoke Suite - Cart', () => {
  test('Verify user can add a product to the cart', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);

    // Login
    await loginPage.navigate();
    await loginPage.login(
      credentials.standardUser.username,
      credentials.standardUser.password
    );

    // Validate successful login
    await inventoryPage.validateLoginSuccess();

    // Add product to cart
    await inventoryPage.addBackpackToCart();

    // Open cart
    await inventoryPage.openCart();

    // Validate cart page and product
    await cartPage.validateCartPage();
    await cartPage.validateProductInCart();
  });
});