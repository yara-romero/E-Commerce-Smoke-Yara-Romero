import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import credentials from '../test-data/credentials.json';
import * as allure from 'allure-js-commons';

test('@smoke Verify user can successfully login with valid credentials', async ({ page }) => {
  await allure.feature('Authentication');
  await allure.story('Login');
  await allure.severity('critical');
  await allure.tag('smoke');

  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await loginPage.navigate();
  await loginPage.login(
    credentials.standardUser.username,
    credentials.standardUser.password
  );

  await inventoryPage.validateLoginSuccess();
});