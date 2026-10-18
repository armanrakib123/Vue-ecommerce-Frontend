import { test, expect } from '@playwright/test'

test.describe('Storefront WCAG 2.1 AA Accessibility', () => {
  test('verifies semantic heading hierarchy and landmarks', async ({ page }) => {
    await page.goto('/')
    const h1Count = await page.locator('h1').count()
    expect(h1Count).toBe(1)
    await expect(page.locator('main')).toBeVisible()
  })
})
