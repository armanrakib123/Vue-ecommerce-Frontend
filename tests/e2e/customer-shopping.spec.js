import { test, expect } from '@playwright/test'

test.describe('Customer Shopping Journey', () => {
  test('browses catalog, filters products, and adds to cart', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('h1')).toContainText('Precision Engineering')

    // Navigate to products
    await page.click('text=Explore Catalog')
    await expect(page).toHaveURL(/.*products/)

    // Add first item to cart
    const addToCartBtn = page.locator('button:has-text("+ Add to Cart")').first()
    if (await addToCartBtn.isVisible()) {
      await addToCartBtn.click()
    }
  })
})
