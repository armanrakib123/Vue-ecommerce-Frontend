import { test, expect } from '@playwright/test'

test.describe('Merchant & Seller Workflow', () => {
  test('navigates to merchant center and views inventory', async ({ page }) => {
    await page.goto('/seller/dashboard')
    await expect(page.locator('text=Merchant Overview')).toBeVisible()
  })
})
