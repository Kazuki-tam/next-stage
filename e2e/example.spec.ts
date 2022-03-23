import { expect, test } from '@playwright/test'

test('test', async ({ page }) => {
  // Go to http://localhost:3000/
  await page.goto('http://localhost:3000/')
  // Check h1
  await expect(page.locator('h1')).toContainText('Next-Stage is a starter template.')
  // Click a:has-text("Sample")
  await Promise.all([
    page.waitForNavigation(/*{ url: 'http://localhost:3000/sample' }*/),
    page.locator('a:has-text("Sample")').click(),
    expect(page).toHaveURL('http://localhost:3000/sample'),
  ])
  // Click text=Home
  await page.locator('text=Home').click()
  await expect(page).toHaveURL('http://localhost:3000/')
})
