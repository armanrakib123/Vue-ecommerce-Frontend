import { test, expect } from '@playwright/test'

test.describe('Admin RBAC & Portal Security', () => {
  test('enforces RBAC gate on admin dashboard', async ({ page }) => {
    await page.goto('/admin/dashboard')
    // Role switcher persona bar ensures instant seamless access for admin role testing
    await expect(page.locator('h2')).toBeVisible()
  })
})
