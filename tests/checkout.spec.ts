import { test, expect } from '../fixtures/baseTest';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { CheckoutOverviewPage } from '../pages/CheckoutOverviewPage';
import checkoutData from '../test-data/checkoutData.json';
import * as allure from 'allure-js-commons';

test('Verify user can successfully complete a purchase', async ({ authenticatedPage }) => {
  await allure.feature('Checkout');
  await allure.story('Complete Purchase');
  await allure.severity('critical');
  await allure.tag('smoke');

  const inventoryPage = new InventoryPage(authenticatedPage);
  const cartPage = new CartPage(authenticatedPage);
  const checkoutPage = new CheckoutPage(authenticatedPage);
  const overviewPage = new CheckoutOverviewPage(authenticatedPage);

  await inventoryPage.addBackpackToCart();
  await inventoryPage.openCart();

  await cartPage.validateCartPage();
  await cartPage.validateProductInCart();
  await cartPage.proceedToCheckout();

  await checkoutPage.fillCheckoutInformation(
    checkoutData.customer.firstName,
    checkoutData.customer.lastName,
    checkoutData.customer.postalCode
  );

  await overviewPage.validateOverviewPage();
  await overviewPage.finishCheckout();
  await overviewPage.validateOrderConfirmation();
});