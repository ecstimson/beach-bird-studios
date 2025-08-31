import { test, expect } from '@playwright/test';

test('header has light theme with white background and dark text', async ({ page }) => {
  await page.goto('/');
  
  // Check header background is near white
  const header = page.locator('header').first();
  const headerBg = await header.evaluate((el) => {
    return window.getComputedStyle(el).backgroundColor;
  });
  
  // Should be white or very close to white (rgb(255, 255, 255) or rgba with high opacity)
  expect(headerBg).toMatch(/rgba?\(255,?\s*255,?\s*255|rgba?\(255,?\s*255,?\s*255,?\s*0?\.\d+\)/);
  
  // Check nav link color is near #0C3745 (beach-dark)
  const navLink = page.locator('nav a').first();
  const linkColor = await navLink.evaluate((el) => {
    return window.getComputedStyle(el).color;
  });
  
  // Should be dark color close to #0C3745 = rgb(12, 55, 69)
  expect(linkColor).toMatch(/rgb\(12,?\s*55,?\s*69\)|rgb\(\d{1,2},?\s*\d{2},?\s*\d{2}\)/);
});