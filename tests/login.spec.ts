import { test, expect } from '@playwright/test';

test.describe('E-Commerce Smoke Suite - Login', () => {

  test('Verify user can successfully login with valid credentials', async ({ page }) => {
    // Navigate to the login page
    await page.goto('/');

    // Enter valid credentials using modern locators
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');

    // Click on the login button
    await page.getByRole('button', { name: 'Login' }).click();

    // Verify successful login by asserting the inventory page is displayed
    await expect(page).toHaveURL(/inventory/);
    await expect(page.getByText('Products')).toBeVisible();
  });

});