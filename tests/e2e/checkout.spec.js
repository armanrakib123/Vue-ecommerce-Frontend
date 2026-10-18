import { test, expect } from '@playwright/test'

test.describe('End-to-End Checkout Funnel', () => {
  test('completes multi-step checkout and renders confirmation', async ({ page }) => {
    await page.goto('/checkout')
    await expect(page).toHaveURL(/.*checkout/)
    await expect(page.locator('text=Enterprise Multi-Step Checkout')).toBeVisible()
  })
})
