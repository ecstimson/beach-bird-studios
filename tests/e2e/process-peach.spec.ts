import { test, expect } from '@playwright/test';

test('How It Works section has peach gradient background', async ({ page }) => {
  await page.goto('/');
  
  // Scroll to How It Works section
  await page.locator('text=How It Works').scrollIntoViewIfNeeded();
  
  // Check the section has a gradient background with peach colors
  const processSection = page.locator('#process section').first();
  const bgImage = await processSection.evaluate((el) => {
    return window.getComputedStyle(el).backgroundImage;
  });
  
  // Should contain gradient with peach colors similar to #FDF3E7 and #FFEFD9
  expect(bgImage).toContain('linear-gradient');
  expect(bgImage).toMatch(/253,?\s*243,?\s*231|255,?\s*239,?\s*217/); // Should contain RGB values close to peach colors
});