import { test as base, expect, Page } from '@playwright/test';
import { loginAsStandardUser } from '../utils/auth';

type AuthFixtures = {
  authenticatedPage: Page;
};

export const test = base.extend<AuthFixtures>({
  authenticatedPage: async ({ page }, use) => {
    // Perform reusable login
    await loginAsStandardUser(page);

    // Provide the authenticated page to the tests
    await use(page);
  },
});

export { expect };