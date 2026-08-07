import { test, expect } from '@playwright/test';

test('Portfolio Home Page Loads Correctly', async ({ page }) => {
  await page.goto('http://localhost:5173'); // Ya jo bhi port tumhara ho
  await expect(page).toHaveTitle(/Sana Portfolio/);
  await page.screenshot({ path: 'homepage-sanity-check.png' });
  console.log('✅ Home page loaded successfully!');
});