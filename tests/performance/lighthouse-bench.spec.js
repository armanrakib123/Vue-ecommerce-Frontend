import { test, expect } from '@playwright/test'

test.describe('Performance & Core Web Vitals Telemetry', () => {
  test('verifies fast initial contentful paint', async ({ page }) => {
    const start = Date.now()
    await page.goto('/')
    const loadTime = Date.now() - start
    expect(loadTime).toBeLessThan(5000)
  })
})
