import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  outputDir: 'test-results/',

  reporter: [
    ['list'],
    ['html'],
    ['allure-playwright']
  ],

  use: {
    baseURL: 'https://www.saucedemo.com/',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  }
});