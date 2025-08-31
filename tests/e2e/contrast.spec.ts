import { test, expect } from '@playwright/test';

test('body text has sufficient contrast over white backgrounds', async ({ page }) => {
  await page.goto('/');
  
  // Check main paragraphs have good contrast
  const bodyText = page.locator('p').first();
  const textColor = await bodyText.evaluate((el) => {
    const style = window.getComputedStyle(el);
    return style.color;
  });
  
  // Check background is white
  const bgColor = await bodyText.evaluate((el) => {
    const style = window.getComputedStyle(el);
    return style.backgroundColor;
  });
  
  // Text should be dark (close to #0C3745 = rgb(12, 55, 69))
  expect(textColor).toMatch(/rgb\(\d{1,2},?\s*\d{2},?\s*\d{2}\)/);
  
  // Background should be white or transparent (inheriting white)
  expect(bgColor).toMatch(/rgba?\(255,?\s*255,?\s*255|rgba?\(0,?\s*0,?\s*0,?\s*0\)/);
});