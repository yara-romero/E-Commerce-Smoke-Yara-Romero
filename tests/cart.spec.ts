import { test, expect } from '../fixtures/baseTest';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import * as allure from 'allure-js-commons';

test('@smoke Verify user can add a product to the cart', async ({ authenticatedPage }) => {
  await allure.feature('Cart');
  await allure.story('Add Product');
  await allure.severity('critical');
  await allure.tag('smoke');

  const inventoryPage = new InventoryPage(authenticatedPage);
  const cartPage = new CartPage(authenticatedPage);

  await inventoryPage.addBackpackToCart();
  await inventoryPage.openCart();

  await cartPage.validateCartPage();
  await cartPage.validateProductInCart();
});