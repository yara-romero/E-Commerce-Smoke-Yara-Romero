import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import credentials from '../test-data/credentials.json';

test.describe('E-Commerce Smoke Suite - Login', () => {
  test('Verify user can successfully login with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.navigate();
    await loginPage.login(
      credentials.standardUser.username,
      credentials.standardUser.password
    );

    await inventoryPage.validateLoginSuccess();
  });
});