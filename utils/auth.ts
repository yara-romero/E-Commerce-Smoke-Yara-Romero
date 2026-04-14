import { Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import credentials from '../test-data/credentials.json';

export async function loginAsStandardUser(page: Page): Promise<void> {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  // Navigate to the login page
  await loginPage.navigate();

  // Perform login
  await loginPage.login(
    credentials.standardUser.username,
    credentials.standardUser.password
  );

  // Validate successful login
  await inventoryPage.validateLoginSuccess();
}