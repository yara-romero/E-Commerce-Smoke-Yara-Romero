import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { CheckoutOverviewPage } from '../pages/CheckoutOverviewPage';
import credentials from '../test-data/credentials.json';
import checkoutData from '../test-data/checkoutData.json';

test.describe('E-Commerce Smoke Suite - Checkout', () => {
  test('@smoke Verify user can successfully complete a purchase', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
    const checkoutOverviewPage = new CheckoutOverviewPage(page);

    // Login
    await loginPage.navigate();
    await loginPage.login(
      credentials.standardUser.username,
      credentials.standardUser.password
    );

    // Validate login
    await inventoryPage.validateLoginSuccess();

    // Add product to cart
    await inventoryPage.addBackpackToCart();
    await inventoryPage.openCart();

    // Validate cart and proceed
    await cartPage.validateCartPage();
    await cartPage.validateProductInCart();
    await cartPage.proceedToCheckout();

    // Fill checkout information
    await checkoutPage.fillCheckoutInformation(
      checkoutData.customer.firstName,
      checkoutData.customer.lastName,
      checkoutData.customer.postalCode
    );

    // Complete purchase
    await checkoutOverviewPage.validateOverviewPage();
    await checkoutOverviewPage.finishCheckout();
    await checkoutOverviewPage.validateOrderConfirmation();
  });
});