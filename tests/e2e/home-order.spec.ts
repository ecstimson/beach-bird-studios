import { test, expect } from '@playwright/test';

test('ServiceCards appears before ProcessTimeline in DOM order', async ({ page }) => {
  await page.goto('/');
  
  // Get positions of both sections
  const servicesSection = page.locator('#services');
  const processSection = page.locator('#process');
  
  // Both sections should exist
  await expect(servicesSection).toBeVisible();
  await expect(processSection).toBeVisible();
  
  // Get their DOM positions
  const servicesPosition = await servicesSection.evaluate((el) => {
    let position = 0;
    let current = el;
    while (current.previousElementSibling) {
      position++;
      current = current.previousElementSibling;
    }
    return position;
  });
  
  const processPosition = await processSection.evaluate((el) => {
    let position = 0;
    let current = el;
    while (current.previousElementSibling) {
      position++;
      current = current.previousElementSibling;
    }
    return position;
  });
  
  // Services should come before Process in DOM order
  expect(servicesPosition).toBeLessThan(processPosition);
});